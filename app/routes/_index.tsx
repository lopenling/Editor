import { Link, Form, useSearchParams, Await } from '@remix-run/react';
import type { LoaderFunction, V2_MetaArgs } from '@remix-run/node';
import { Button, Card, TextInput } from 'flowbite-react';
import FooterContainer from '~/component/Layout/Footer';
import { defer } from '@remix-run/node';
import { searchPages } from '~/model/page';
import { useLocation, useLoaderData, useNavigation } from '@remix-run/react';
import useLitteraTranslation from '~/locales/useLitteraTranslations';
import { motion } from 'framer-motion';
import Header from '~/component/Layout/Header';
import { useState, useEffect, ChangeEvent, Suspense } from 'react';
import { Skeleton } from '~/component/UI';
import { HEADER_HEIGHT } from '~/constants';
import { findLatestText } from '~/model/text';
import groupData from '~/lib/filterVersionFromText';

export let loader: LoaderFunction = async ({ request }) => {
  const searchText = new URL(request.url).searchParams.get('search')?.trim();
  const { texts } = await findLatestText();
  if (!searchText) return { textList: null, search: null, latestTexts: { list: texts } };
  return defer({ textList: await searchPages(searchText), search: searchText, latestTexts: null });
};

export function headers({ loaderHeaders }: { loaderHeaders: Headers }) {
  return {
    'Cache-Control': loaderHeaders.get('Cache-Control'),
  };
}

export function meta({ data }: V2_MetaArgs) {
  let title = data?.search ? `${data?.search} - Lopenling Search` : 'Lopenling App';
  return [
    {
      title,
    },
    {
      name: 'description',
      content: 'annotation of text and discussion on budhist text',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    },
  ];
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const [params] = useSearchParams();
  const [searchInput, setSearchInput] = useState('');
  const translation = useLitteraTranslation();

  useEffect(() => {
    setSearchInput(params.get('search') || '');
  }, [params]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const isLoading = navigation.formData?.get('search') && navigation.state === 'loading';

  return (
    <MainLayout>
      <SearchBar searchInput={searchInput} onInputChange={handleInputChange} translation={translation} />
      <ContentArea latestTexts={data.latestTexts} isLoading={isLoading} />
    </MainLayout>
  );
}

function MainLayout({ children }) {
  return (
    <motion.div
      key={useLocation().pathname}
      initial={{ x: '5%', opacity: 0 }}
      animate={{ x: '0%', opacity: 1 }}
      exit={{ x: '5%', opacity: 0 }}
      style={{ position: 'relative', minHeight: '100vh' }}
    >
      <Header editor={null} />
      {children}
      <FooterContainer />
    </motion.div>
  );
}

function SearchBar({ searchInput, onInputChange, translation }) {
  return (
    <div className="mx-auto max-w-2xl" style={{ paddingTop: HEADER_HEIGHT + 40 }}>
      <Form method="GET" className="mb-3 w-full max-w-2xl">
        <div className="relative flex w-full space-x-3">
          <TextInput
            autoComplete="off"
            name="search"
            placeholder={translation.searchText}
            value={searchInput}
            id="inputText"
            onChange={onInputChange}
            type="search"
            className="flex-1 text-gray-500 pr-3"
          />
          <Button type="submit" className="h-full bg-green-400 text-white">
            {translation.searchText}
          </Button>
        </div>
      </Form>
    </div>
  );
}

function ContentArea({ latestTexts, isLoading }) {
  let { textList } = useLoaderData<typeof loader>();
  return (
    <div className="flex w-full mx-auto max-w-2xl flex-col items-center justify-start space-y-3.5 py-10">
      {isLoading && <Skeleton height={70} number={3} />}
      {latestTexts && !isLoading && latestTexts.list.map((text) => <TextItem key={text.id} text={text} />)}
      {!isLoading && (
        <Suspense fallback={<div>loading...</div>}>
          <Await resolve={textList}>
            {(lists) => {
              if (!lists) return null;
              if (lists?.length === 0) return <NoResultMessage />;
              return <ListResults lists={lists} />;
            }}
          </Await>
        </Suspense>
      )}
    </div>
  );
}

function TextItem({ text }) {
  const { groupedData, isVersionAvailable } = groupData(text.Page);
  const textItemUrl = `/text/${text.id}/page/1/`;

  return (
    <div className="flex w-full justify-between border-b dark:border-gray-700">
      <TextLink url={textItemUrl} name={text.name} />
      {isVersionAvailable && <VersionLinks groupedData={groupedData} baseUrl={textItemUrl} />}
    </div>
  );
}

function TextLink({ url, name }) {
  return (
    <div className="flex items-center gap-1 px-4 py-4" style={{ fontFamily: 'monlam' }}>
      <Link to={url}>{name}</Link>
    </div>
  );
}

function VersionLinks({ groupedData, baseUrl }) {
  const translation = useLitteraTranslation();

  return (
    <div className="flex gap-2 px-4 py-4 font-light text-gray-300">
      {Object.keys(groupedData).map((key) => (
        <Link
          key={key}
          to={`${baseUrl}?version=${key}`}
          className="cursor-pointer rounded-md bg-yellow-300 px-2 capitalize text-black"
        >
          {translation[key]}
        </Link>
      ))}
    </div>
  );
}

function NoResultMessage() {
  return (
    <div className="text-xl font-extrabold capitalize text-gray-300 font-Inter leading-[150%]">No result found</div>
  );
}

function ListResults({ lists }) {
  if (!lists || lists.length === 0) return <NoResultMessage />;
  return (
    <>
      {lists.map((list, index) => (
        <ResultLink key={`id${index}`} list={list} />
      ))}
    </>
  );
}

function ResultLink({ list }) {
  const { textId, results } = list;
  const result = results[0];

  return (
    <Link
      to={`/text/${textId}/page/1`}
      className="font-monlam w-full hover:text-slate-500 transition-all duration-75"
      prefetch="intent"
    >
      <div className="text-md">{result.name}</div>
      <div className="flex justify-between float-right">
        {result && result[1]}
        <div className="text-gray-400 text-xs">{result.total} matches</div>
      </div>
    </Link>
  );
}
