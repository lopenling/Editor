import { Link, Form, useSearchParams } from "@remix-run/react";
import type {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import { Button, Card, Spinner, TextInput } from "flowbite-react";
import FooterContainer from "~/component/Footer";
import { json } from "@remix-run/cloudflare";
import { searchTextWithName } from "~/model/text";
import { useLocation, useLoaderData, useTransition } from "@remix-run/react";
import uselitteraTranlation from "~/locales/useLitteraTranslations";
import SearchIcon from "~/assets/svg/icon_search.svg";
import { motion } from "framer-motion";
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
    <motion.div
      key={useLocation().pathname}
      initial={{ x: "5%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "5%", opacity: 0 }}
    >
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
                icon={() => (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                  prefetch="intent"
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
          <FooterContainer />
        </>
      )}
    </motion.div>
  );
}
