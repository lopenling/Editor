import { Link, Form, useSearchParams } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { useEffect } from "react";
import { Button, Card, Spinner, TextInput } from "flowbite-react";
import FooterContainer from "~/component/Footer";
import { json } from "@remix-run/cloudflare";
import { searchTextWithName } from "~/model/text";
import { useLoaderData, useTransition } from "@remix-run/react/dist/components";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import uselitteraTranlation from "~/locales/useLitteraTranslations";
import SearchIcon from "~/assets/svg/icon_search.svg";
import { useSetRecoilState } from "recoil";
import { textName } from "~/states";
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
  const data = useLoaderData();
  const transition = useTransition();
  const translation = uselitteraTranlation();
  const [animationParent] = useAutoAnimate();
  const [params] = useSearchParams();
  const list = data;
  const isLoading =
    transition.state !== "idle" &&
    transition.submission?.formData.get("search");
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
          <div
            ref={animationParent}
            className="inline-flex  w-full flex-col items-center justify-start space-y-3.5 py-10"
          >
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
                  <Card>
                    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
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
          <ExtraDetail />
          <FooterContainer />
        </>
      )}
    </>
  );
}

const ExtraDetail = () => (
  <div className="inline-flex w-full items-center justify-center bg-gray-50 px-16">
    <div className="inline-flex flex-col items-center justify-center  bg-gray-50 py-24">
      <div className="flex flex-col items-center justify-center ">
        <p className="text-center text-4xl font-extrabold leading-10 text-gray-900">
          Welcome to Lopenling
        </p>
        <p className="text-center text-xl leading-loose text-gray-500">
          Here are a few reasons to use lopenling
        </p>
      </div>
      <div className="flex flex-col items-start justify-start  space-y-4 md:flex-row md:items-center">
        <div className="inline-flex flex-1 flex-col items-center justify-center space-y-4 ">
          <svg
            width="40"
            height="53"
            viewBox="0 0 40 53"
            className="fill-green-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.800049 7.30002C0.800049 5.60264 1.47433 3.97477 2.67457 2.77454C3.8748 1.57431 5.50266 0.900024 7.20005 0.900024H21.8752C23.5725 0.900387 25.2001 1.57491 26.4 2.77522L37.3248 13.7C38.5252 14.9 39.1997 16.5276 39.2001 18.2248V45.7C39.2001 47.3974 38.5258 49.0253 37.3255 50.2255C36.1253 51.4257 34.4974 52.1 32.8 52.1H7.20005C5.50266 52.1 3.8748 51.4257 2.67457 50.2255C1.47433 49.0253 0.800049 47.3974 0.800049 45.7V7.30002ZM7.20005 26.5C7.20005 25.6513 7.53719 24.8374 8.13731 24.2373C8.73742 23.6372 9.55136 23.3 10.4 23.3H29.6C30.4487 23.3 31.2627 23.6372 31.8628 24.2373C32.4629 24.8374 32.8 25.6513 32.8 26.5C32.8 27.3487 32.4629 28.1626 31.8628 28.7628C31.2627 29.3629 30.4487 29.7 29.6 29.7H10.4C9.55136 29.7 8.73742 29.3629 8.13731 28.7628C7.53719 28.1626 7.20005 27.3487 7.20005 26.5ZM10.4 36.1C9.55136 36.1 8.73742 36.4372 8.13731 37.0373C7.53719 37.6374 7.20005 38.4513 7.20005 39.3C7.20005 40.1487 7.53719 40.9626 8.13731 41.5628C8.73742 42.1629 9.55136 42.5 10.4 42.5H29.6C30.4487 42.5 31.2627 42.1629 31.8628 41.5628C32.4629 40.9626 32.8 40.1487 32.8 39.3C32.8 38.4513 32.4629 37.6374 31.8628 37.0373C31.2627 36.4372 30.4487 36.1 29.6 36.1H10.4Z"
            />
          </svg>

          <div className="flex w-full flex-col items-start justify-start ">
            <p className="w-full text-center text-xl font-bold leading-normal text-gray-900">
              Accesibilty
            </p>
            <p className="w-full text-center text-base leading-normal text-gray-500">
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
          </div>
          <div className="inline-flex items-center justify-start space-x-1.5">
            <p className="text-center text-sm font-medium leading-tight text-green-400">
              Learn how to keep your funds safe
            </p>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.793031 10.207C0.60556 10.0195 0.500244 9.76514 0.500244 9.49998C0.500244 9.23482 0.60556 8.98051 0.793031 8.79298L4.08603 5.49998L0.793031 2.20698C0.610873 2.01838 0.510078 1.76578 0.512356 1.50358C0.514635 1.24138 0.619804 0.99057 0.805212 0.805162C0.99062 0.619753 1.24143 0.514584 1.50363 0.512306C1.76583 0.510027 2.01843 0.610822 2.20703 0.79298L6.20703 4.79298C6.3945 4.98051 6.49982 5.23482 6.49982 5.49998C6.49982 5.76514 6.3945 6.01945 6.20703 6.20698L2.20703 10.207C2.0195 10.3945 1.76519 10.4998 1.50003 10.4998C1.23487 10.4998 0.980558 10.3945 0.793031 10.207Z"
                fill="#31C48D"
              />
            </svg>
          </div>
        </div>
        <div className="inline-flex flex-1 flex-col items-center  justify-center space-y-4 ">
          <svg
            width="58"
            height="49"
            viewBox="0 0 58 49"
            className="fill-green-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M38.5999 9.69998C38.5999 12.2461 37.5885 14.6879 35.7882 16.4882C33.9878 18.2886 31.546 19.3 29 19.3C26.4539 19.3 24.0121 18.2886 22.2117 16.4882C20.4114 14.6879 19.4 12.2461 19.4 9.69998C19.4 7.1539 20.4114 4.7121 22.2117 2.91175C24.0121 1.1114 26.4539 0.0999756 29 0.0999756C31.546 0.0999756 33.9878 1.1114 35.7882 2.91175C37.5885 4.7121 38.5999 7.1539 38.5999 9.69998ZM54.5999 16.1C54.5999 17.7974 53.9257 19.4252 52.7254 20.6255C51.5252 21.8257 49.8973 22.5 48.1999 22.5C46.5026 22.5 44.8747 21.8257 43.6745 20.6255C42.4742 19.4252 41.7999 17.7974 41.7999 16.1C41.7999 14.4026 42.4742 12.7747 43.6745 11.5745C44.8747 10.3743 46.5026 9.69998 48.1999 9.69998C49.8973 9.69998 51.5252 10.3743 52.7254 11.5745C53.9257 12.7747 54.5999 14.4026 54.5999 16.1ZM41.7999 38.5C41.7999 35.1052 40.4514 31.8495 38.0509 29.449C35.6505 27.0485 32.3947 25.7 29 25.7C25.6052 25.7 22.3494 27.0485 19.949 29.449C17.5485 31.8495 16.2 35.1052 16.2 38.5V48.1H41.7999V38.5ZM16.2 16.1C16.2 17.7974 15.5257 19.4252 14.3254 20.6255C13.1252 21.8257 11.4973 22.5 9.79995 22.5C8.10257 22.5 6.4747 21.8257 5.27447 20.6255C4.07424 19.4252 3.39995 17.7974 3.39995 16.1C3.39995 14.4026 4.07424 12.7747 5.27447 11.5745C6.4747 10.3743 8.10257 9.69998 9.79995 9.69998C11.4973 9.69998 13.1252 10.3743 14.3254 11.5745C15.5257 12.7747 16.2 14.4026 16.2 16.1ZM48.1999 48.1V38.5C48.2046 35.2465 47.3785 32.0457 45.7999 29.2008C47.2187 28.8377 48.7016 28.8035 50.1355 29.1007C51.5695 29.3979 52.9166 30.0187 54.0741 30.9157C55.2317 31.8127 56.1691 32.9623 56.8148 34.2767C57.4605 35.591 57.7974 37.0355 57.7999 38.5V48.1H48.1999ZM12.2 29.2008C10.6215 32.0457 9.79547 35.2465 9.79995 38.5V48.1H0.199952V38.5C0.199335 37.0345 0.534234 35.5883 1.17898 34.2723C1.82373 32.9563 2.76121 31.8054 3.91958 30.9077C5.07795 30.01 6.42645 29.3895 7.86174 29.0936C9.29704 28.7978 10.781 28.8344 12.2 29.2008Z" />
          </svg>

          <div className="flex w-full flex-col items-start justify-start">
            <p className="w-full text-center text-xl font-bold leading-normal text-gray-900">
              Community
            </p>
            <p className="w-full text-center text-base leading-normal text-gray-500">
              Flowbite maintains crypto insurance and all USD cash balances are
              covered{" "}
            </p>
          </div>
          <div className="inline-flex items-center justify-start space-x-1.5">
            <p className="text-center text-sm font-medium leading-tight text-green-400">
              Learn how your crypto is covered
            </p>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.793031 10.207C0.60556 10.0195 0.500244 9.76514 0.500244 9.49998C0.500244 9.23482 0.60556 8.98051 0.793031 8.79298L4.08603 5.49998L0.793031 2.20698C0.610873 2.01838 0.510078 1.76578 0.512356 1.50358C0.514635 1.24138 0.619804 0.99057 0.805212 0.805162C0.99062 0.619753 1.24143 0.514584 1.50363 0.512306C1.76583 0.510027 2.01843 0.610822 2.20703 0.79298L6.20703 4.79298C6.3945 4.98051 6.49982 5.23482 6.49982 5.49998C6.49982 5.76514 6.3945 6.01945 6.20703 6.20698L2.20703 10.207C2.0195 10.3945 1.76519 10.4998 1.50003 10.4998C1.23487 10.4998 0.980558 10.3945 0.793031 10.207Z"
                fill="#31C48D"
              />
            </svg>
          </div>
        </div>
        <div className="inline-flex flex-1 flex-col items-center justify-center  space-y-4">
          <svg
            width="52"
            height="53"
            viewBox="0 0 52 53"
            className="fill-green-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.0543 5.55594C16.1128 5.39159 18.0669 4.58196 19.6383 3.24234C21.4133 1.73063 23.6685 0.900391 25.9999 0.900391C28.3314 0.900391 30.5866 1.73063 32.3615 3.24234C33.933 4.58196 35.8871 5.39159 37.9455 5.55594C40.2701 5.74172 42.4525 6.74942 44.1015 8.39839C45.7505 10.0474 46.7582 12.2298 46.9439 14.5543C47.1071 16.6119 47.9167 18.5671 49.2575 20.1383C50.7692 21.9133 51.5995 24.1685 51.5995 26.4999C51.5995 28.8314 50.7692 31.0866 49.2575 32.8615C47.9179 34.433 47.1083 36.3871 46.9439 38.4455C46.7582 40.7701 45.7505 42.9525 44.1015 44.6015C42.4525 46.2505 40.2701 47.2582 37.9455 47.4439C35.8871 47.6083 33.933 48.4179 32.3615 49.7575C30.5866 51.2692 28.3314 52.0995 25.9999 52.0995C23.6685 52.0995 21.4133 51.2692 19.6383 49.7575C18.0669 48.4179 16.1128 47.6083 14.0543 47.4439C11.7298 47.2582 9.54736 46.2505 7.89839 44.6015C6.24942 42.9525 5.24172 40.7701 5.05594 38.4455C4.89159 36.3871 4.08196 34.433 2.74234 32.8615C1.23063 31.0866 0.400391 28.8314 0.400391 26.4999C0.400391 24.1685 1.23063 21.9133 2.74234 20.1383C4.08196 18.5669 4.89159 16.6128 5.05594 14.5543C5.24172 12.2298 6.24942 10.0474 7.89839 8.39839C9.54736 6.74942 11.7298 5.74172 14.0543 5.55594ZM37.8623 22.3623C38.4452 21.7588 38.7678 20.9505 38.7605 20.1115C38.7532 19.2724 38.4167 18.4698 37.8234 17.8765C37.2301 17.2832 36.4275 16.9467 35.5884 16.9394C34.7494 16.9321 33.9411 17.2546 33.3375 17.8375L22.7999 28.3751L18.6623 24.2375C18.0588 23.6546 17.2505 23.3321 16.4115 23.3394C15.5724 23.3467 14.7698 23.6832 14.1765 24.2765C13.5832 24.8698 13.2467 25.6724 13.2394 26.5115C13.2321 27.3505 13.5546 28.1588 14.1375 28.7623L20.5375 35.1623C21.1376 35.7622 21.9514 36.0993 22.7999 36.0993C23.6485 36.0993 24.4623 35.7622 25.0623 35.1623L37.8623 22.3623Z"
            />
          </svg>

          <div className="flex w-full flex-col items-start justify-start ">
            <p className="w-full text-center text-xl font-bold leading-normal text-gray-900">
              Data Driven
            </p>
            <p className="w-full text-center text-base leading-normal text-gray-500">
              Flowbite marketplace supports a variety of the most popular
              digital currencies.
            </p>
          </div>
          <div className="inline-flex items-center justify-start space-x-1.5">
            <p className="text-center text-sm font-medium leading-tight text-green-400">
              Learn how to we implement best practices
            </p>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.793031 10.207C0.60556 10.0195 0.500244 9.76514 0.500244 9.49998C0.500244 9.23482 0.60556 8.98051 0.793031 8.79298L4.08603 5.49998L0.793031 2.20698C0.610873 2.01838 0.510078 1.76578 0.512356 1.50358C0.514635 1.24138 0.619804 0.99057 0.805212 0.805162C0.99062 0.619753 1.24143 0.514584 1.50363 0.512306C1.76583 0.510027 2.01843 0.610822 2.20703 0.79298L6.20703 4.79298C6.3945 4.98051 6.49982 5.23482 6.49982 5.49998C6.49982 5.76514 6.3945 6.01945 6.20703 6.20698L2.20703 10.207C2.0195 10.3945 1.76519 10.4998 1.50003 10.4998C1.23487 10.4998 0.980558 10.3945 0.793031 10.207Z"
                fill="#31C48D"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);
