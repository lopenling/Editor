import { Link, Form, useSearchParams } from '@remix-run/react';
import type { LoaderFunction, V2_MetaArgs } from '@remix-run/node';
import { Button, Card, TextInput } from 'flowbite-react';
import FooterContainer from '~/component/Layout/Footer';
import { defer } from '@remix-run/node';
import { searchPages } from '~/model/page';
import { useLocation, useLoaderData, useNavigation } from '@remix-run/react';
import uselitteraTranlation from '~/locales/useLitteraTranslations';
import { motion } from 'framer-motion';
import Header from '~/component/Layout/Header';
import { useState, useEffect, ChangeEvent } from 'react';
import { Skeleton } from '~/component/UI';
import { HEADER_HEIGHT } from '~/constants';
import { initializeTribute } from '~/lib';
import { findLatestText } from '~/model/text';
import { TextType } from '~/model/type';
import groupData from '~/lib/filterVersionFromText';

export let loader: LoaderFunction = async ({ request }) => {
  const searchText = new URL(request.url).searchParams.get('search')?.trim();
  const { latestTexts, count } = await findLatestText();
  let headers = {
    'Cache-Control': 'max-age=15,stale-while-revalidate=60',
  };
  if (!searchText) return { textList: null, search: null, latestTexts: { list: latestTexts, count } };

  return defer(
    { textList: await searchPages(searchText), search: searchText, latestTexts: null },
    {
      headers,
    },
  );
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
  const translation: any = uselitteraTranlation();

  useEffect(() => {
    initializeTribute('inputText');
  }, []);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
  };
  useEffect(() => {
    let p = params.get('search');
    if (!p) {
      setSearchInput('');
    } else {
      setSearchInput(p);
    }
  }, [params]);
  const lists = data.textList;
  const isLoading = navigation.formData?.get('search') && navigation.state === 'loading';
  if (lists?.message) return <div className="text-red-400">{lists?.message}</div>;
  return (
    <motion.div
      key={useLocation().pathname}
      initial={{ x: '5%', opacity: 0 }}
      animate={{ x: '0%', opacity: 1 }}
      exit={{ x: '5%', opacity: 0 }}
      style={{ position: 'relative', minHeight: '100vh' }}
    >
      <Header editor={null} />
      <div className=" mx-auto max-w-2xl " style={{ paddingTop: HEADER_HEIGHT }}>
        <div className="flex w-full flex-col items-center justify-center  px-3 pt-24 md:px-1.5  ">
          <Form method="GET" className="mb-3 w-full max-w-2xl">
            <div className="relative flex w-full space-x-3 ">
              <TextInput
                autoComplete="off"
                name="search"
                placeholder={translation.searchText}
                value={searchInput}
                id="inputText"
                onChange={handleInputChange}
                type="search"
                style={{ height: '100%' }}
                className="flex-1 text-gray-500"
                icon={() => (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.75 14.75L10.25 10.25M11.75 6.5C11.75 7.18944 11.6142 7.87213 11.3504 8.50909C11.0865 9.14605 10.6998 9.7248 10.2123 10.2123C9.7248 10.6998 9.14605 11.0865 8.50909 11.3504C7.87213 11.6142 7.18944 11.75 6.5 11.75C5.81056 11.75 5.12787 11.6142 4.49091 11.3504C3.85395 11.0865 3.2752 10.6998 2.78769 10.2123C2.30018 9.7248 1.91347 9.14605 1.64963 8.50909C1.3858 7.87213 1.25 7.18944 1.25 6.5C1.25 5.10761 1.80312 3.77226 2.78769 2.78769C3.77226 1.80312 5.10761 1.25 6.5 1.25C7.89239 1.25 9.22774 1.80312 10.2123 2.78769C11.1969 3.77226 11.75 5.10761 11.75 6.5Z"
                      stroke="#6B7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              />
              <Button type="submit" className="h-full bg-green-400 text-white" color={'#1C64F2'} size="lg">
                {translation.searchText}
              </Button>
            </div>
          </Form>

          {data?.latestTexts && (
            <>
              {data.latestTexts.list.map((text: TextType) => {
                let pageWithPost = text.allow_post;
                let { groupedData, isVersionAvailable } = groupData(text.Page);
                let url = `/text/${text.id}/page/1/${pageWithPost ? 'posts' : ''}`;
                return (
                  <div key={text.id} className="flex w-full justify-between border-b dark:border-gray-700">
                    <div className="flex items-center gap-1 px-4 py-4" style={{ fontFamily: 'monlam' }}>
                      <Link to={url}>{text.name}</Link>
                    </div>
                    {
                      <div className="flex gap-2 px-4 py-4 font-light text-gray-300">
                        {!isVersionAvailable ? (
                          <></>
                        ) : (
                          <>
                            {Object.keys(groupedData).map((key) => {
                              let urlversion = url + '?version=' + key;
                              return (
                                <Link
                                  key={key}
                                  to={urlversion}
                                  className="cursor-pointer rounded-md bg-yellow-300 px-2 capitalize text-black"
                                >
                                  {translation[key]}
                                </Link>
                              );
                            })}
                          </>
                        )}
                      </div>
                    }
                  </div>
                );
              })}
              <Link
                to="/list"
                className="mb-3 pt-5 text-sm font-light text-gray-800 underline transition-colors dark:text-white"
              >
                List all ({data?.latestTexts?.count}) Pechas
              </Link>
            </>
          )}
        </div>
        <div className="inline-flex  w-full flex-col items-center justify-start space-y-3.5 py-10">
          {isLoading && <Skeleton height={125} number={3} />}

          {lists && !isLoading && (
            <>
              {lists.length === 0 && (
                <div className="text-xl font-extrabold capitalize text-gray-300 font-Inter leading-[150%]">
                  No result found
                </div>
              )}
              {lists?.map(
                (
                  list: {
                    textId: number;
                    results: any;
                  },
                  index: number,
                ) => {
                  let result = list.results[0];
                  return (
                    <Link
                      to={`/text/${list.textId}/page/1/posts`}
                      key={'id' + index}
                      className="container w-full"
                      prefetch="intent"
                    >
                      <Card className="dark:bg-gray-500 font-monlam">
                        <div className="text-xl">{result.name}</div>
                        <div className="flex flex-wrap justify-between text-sm">
                          {result && result[1]}
                          <div className="text-sm text-gray-400">{result.total} matches</div>
                        </div>
                      </Card>
                    </Link>
                  );
                },
              )}
            </>
          )}
        </div>
      </div>
      {!lists && !isLoading && (
        <>
          <FooterContainer />
        </>
      )}
    </motion.div>
  );
}
