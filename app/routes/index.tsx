import { Link, Form, useSearchParams } from "@remix-run/react";
import type {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import { useEffect } from "react";
import { Button, Card, Spinner, TextInput } from "flowbite-react";
import FooterContainer from "~/component/Footer";
import { json } from "@remix-run/cloudflare";
import { searchTextWithName } from "~/model/text";
import { useLoaderData, useTransition } from "@remix-run/react/dist/components";
import uselitteraTranlation from "~/locales/useLitteraTranslations";
import SearchIcon from "~/assets/svg/icon_search.svg";
export let loader: LoaderFunction = async ({ request }) => {
  const searchText = new URL(request.url).searchParams.get("search");
  if (searchText === null) return null;
  if (searchText === "") return json([]);
  let headers = {
    "Cache-Control": "max-age=60, s-maxage=60480",
  };
  let textList = await searchTextWithName(searchText);
  try {
    return json(textList, {
      headers,
    });
  } catch (e) {
    return json(
      { message: e.message },
      {
        status: 400,
      }
    );
  }
};

export function headers({ loaderHeaders }: { loaderHeaders: Headers }) {
  return {
    "Cache-Control": loaderHeaders.get("Cache-Control"),
  };
}

export const meta: MetaFunction = ({ data, params }) => {
  return {
    viewport: "width=device-width,initial-scale=1",
    description: "annotation of text and discussion on budhist text",
    title: data?.search
      ? `${data?.search} - Lopenling Search`
      : "Lopenling App",
  };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const transition = useTransition();
  const translation: any = uselitteraTranlation();
  const [params] = useSearchParams();
  const list = data;
  const isLoading =
    transition.submission?.formData.get("search") &&
    transition.state !== "idle";
  if (list?.message) return <div className="text-red-400">{list?.message}</div>;

  return (
    <>
      <div className=" max-w-2xl mx-auto">
        <div
          className="inline-flex w-full items-center justify-center  px-3 md:px-1.5"
          style={{
            paddingBlock: !isLoading && !list ? "7rem" : 30,
          }}
        >
          <Form method="get" className="w-full max-w-2xl">
            <div className="relative flex w-full space-x-3 ">
              <TextInput
                name="search"
                placeholder={translation.searchText}
                defaultValue={params.get("search")}
                type="search"
                required
                style={{ height: "100%" }}
                className="flex-1 text-gray-500"
                icon={() => <img src={SearchIcon} alt="search" />}
              />
              <Button
                type="submit"
                className="bg-green-400 text-white h-full"
                color={"#1C64F2"}
                size="lg"
              >
                {translation.searchText}
              </Button>
            </div>
          </Form>
        </div>
        {isLoading && (
          <div className="inline-flex h-screen w-full flex-col items-center justify-start space-y-3.5">
            <Spinner />
          </div>
        )}

        {list && (
          <div className="inline-flex  w-full flex-col items-center justify-start space-y-3.5 py-10">
            {list.length === 0 && (
              <div
                className="text-gray-300 text-xl font-extrabold capitalize"
                style={{
                  fontSize: 20,
                  fontFamily: "Inter",
                  lineHeight: "150%",
                }}
              >
                No result found
              </div>
            )}
            {list?.map((list: { id: number; name: string }) => {
              return (
                <Link
                  to={"/texts/" + list.id + "/posts"}
                  key={"id" + list.id}
                  className="container w-full"
                  prefetch="render"
                >
                  <Card className="dark:bg-gray-500">
                    <h5 className="text-2xl  text-gray-700 dark:text-white">
                      {list.name}
                    </h5>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      {!list && !isLoading && (
        <>
          <FeatureSection />
          <FooterContainer />
        </>
      )}
    </>
  );
}

const FeatureSection = () => (
  <section className="bg-gray-50 dark:bg-gray-700">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Welcome to Lopenling
      </h2>
      <p className="text-gray-500 sm:text-xl dark:text-gray-400">
        Here are a few reasons to use Lopenling
      </p>
      <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <div>
          <svg
            width="40"
            height="53"
            viewBox="0 0 40 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.800049 7.30002C0.800049 5.60264 1.47433 3.97477 2.67457 2.77454C3.8748 1.57431 5.50266 0.900024 7.20005 0.900024H21.8752C23.5725 0.900387 25.2001 1.57491 26.4 2.77522L37.3248 13.7C38.5252 14.9 39.1997 16.5276 39.2001 18.2248V45.7C39.2001 47.3974 38.5258 49.0253 37.3255 50.2255C36.1253 51.4257 34.4974 52.1 32.8 52.1H7.20005C5.50266 52.1 3.8748 51.4257 2.67457 50.2255C1.47433 49.0253 0.800049 47.3974 0.800049 45.7V7.30002ZM7.20005 26.5C7.20005 25.6513 7.53719 24.8374 8.13731 24.2373C8.73742 23.6372 9.55136 23.3 10.4 23.3H29.6C30.4487 23.3 31.2627 23.6372 31.8628 24.2373C32.4629 24.8374 32.8 25.6513 32.8 26.5C32.8 27.3487 32.4629 28.1626 31.8628 28.7628C31.2627 29.3629 30.4487 29.7 29.6 29.7H10.4C9.55136 29.7 8.73742 29.3629 8.13731 28.7628C7.53719 28.1626 7.20005 27.3487 7.20005 26.5ZM10.4 36.1C9.55136 36.1 8.73742 36.4372 8.13731 37.0373C7.53719 37.6374 7.20005 38.4513 7.20005 39.3C7.20005 40.1487 7.53719 40.9626 8.13731 41.5628C8.73742 42.1629 9.55136 42.5 10.4 42.5H29.6C30.4487 42.5 31.2627 42.1629 31.8628 41.5628C32.4629 40.9626 32.8 40.1487 32.8 39.3C32.8 38.4513 32.4629 37.6374 31.8628 37.0373C31.2627 36.4372 30.4487 36.1 29.6 36.1H10.4Z"
              fill="#31C48D"
            />
          </svg>

          <h3 className="mb-2 text-xl font-bold dark:text-white">
            Accesibility
          </h3>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            We store the vast majority of the digital assets in secure offline
            storage.
          </p>
          <a
            href="#"
            className=" text-green-400 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
          >
            Learn how to keep your funds safe{" "}
            <svg
              className="ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div>
          <svg
            className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500"
            width="58"
            height="49"
            viewBox="0 0 58 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.5999 9.69998C38.5999 12.2461 37.5885 14.6879 35.7882 16.4882C33.9878 18.2886 31.546 19.3 29 19.3C26.4539 19.3 24.0121 18.2886 22.2117 16.4882C20.4114 14.6879 19.4 12.2461 19.4 9.69998C19.4 7.1539 20.4114 4.7121 22.2117 2.91175C24.0121 1.1114 26.4539 0.0999756 29 0.0999756C31.546 0.0999756 33.9878 1.1114 35.7882 2.91175C37.5885 4.7121 38.5999 7.1539 38.5999 9.69998ZM54.5999 16.1C54.5999 17.7974 53.9257 19.4252 52.7254 20.6255C51.5252 21.8257 49.8973 22.5 48.1999 22.5C46.5026 22.5 44.8747 21.8257 43.6745 20.6255C42.4742 19.4252 41.7999 17.7974 41.7999 16.1C41.7999 14.4026 42.4742 12.7747 43.6745 11.5745C44.8747 10.3743 46.5026 9.69998 48.1999 9.69998C49.8973 9.69998 51.5252 10.3743 52.7254 11.5745C53.9257 12.7747 54.5999 14.4026 54.5999 16.1ZM41.7999 38.5C41.7999 35.1052 40.4514 31.8495 38.0509 29.449C35.6505 27.0485 32.3947 25.7 29 25.7C25.6052 25.7 22.3494 27.0485 19.949 29.449C17.5485 31.8495 16.2 35.1052 16.2 38.5V48.1H41.7999V38.5ZM16.2 16.1C16.2 17.7974 15.5257 19.4252 14.3254 20.6255C13.1252 21.8257 11.4973 22.5 9.79995 22.5C8.10257 22.5 6.4747 21.8257 5.27447 20.6255C4.07424 19.4252 3.39995 17.7974 3.39995 16.1C3.39995 14.4026 4.07424 12.7747 5.27447 11.5745C6.4747 10.3743 8.10257 9.69998 9.79995 9.69998C11.4973 9.69998 13.1252 10.3743 14.3254 11.5745C15.5257 12.7747 16.2 14.4026 16.2 16.1ZM48.1999 48.1V38.5C48.2046 35.2465 47.3785 32.0457 45.7999 29.2008C47.2187 28.8377 48.7016 28.8035 50.1355 29.1007C51.5695 29.3979 52.9166 30.0187 54.0741 30.9157C55.2317 31.8127 56.1691 32.9623 56.8148 34.2767C57.4605 35.591 57.7974 37.0355 57.7999 38.5V48.1H48.1999ZM12.2 29.2008C10.6215 32.0457 9.79547 35.2465 9.79995 38.5V48.1H0.199952V38.5C0.199335 37.0345 0.534234 35.5883 1.17898 34.2723C1.82373 32.9563 2.76121 31.8054 3.91958 30.9077C5.07795 30.01 6.42645 29.3895 7.86174 29.0936C9.29704 28.7978 10.781 28.8344 12.2 29.2008Z"
              fill="#31C48D"
            />
          </svg>

          <h3 className="mb-2 text-xl font-bold dark:text-white">Community</h3>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Flowbite maintains crypto insurance and all USD cash balances are
            covered.
          </p>
          <a
            href="#"
            className="inline-flex text-green-400 items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
          >
            Learn how your crypto is covered{" "}
            <svg
              className="ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div>
          <svg
            className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
              fill="#31C48D"
            ></path>
          </svg>
          <h3 className="mb-2 text-xl font-bold dark:text-white">
            Data Driven
          </h3>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Flowbite marketplace supports a variety of the most popular digital
            currencies.
          </p>
          <a
            href="#"
            className=" text-green-400 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
          >
            How to implement best practices{" "}
            <svg
              className="ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);
