import type { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useTransition,
} from "@remix-run/react";
import { Spinner } from "flowbite-react";
import ErrorPage from "./component/ErrorPage";
import Header from "./component/Header";
import { getUserSession } from "./services/session.server";
import globalStyle from "./styles/globalStyle.css";
import tailwindStyle from "./styles/tailwind.css";
import { LitteraProvider } from "@assembless/react-littera";
import { RecoilRoot } from "recoil";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  description: "annotation of text and discussion on budhist text",
  title: "Lopenling App",
});
export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);

  return { user };
};

export function links() {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
    { rel: "stylesheet", href: tailwindStyle, as: "style" },
    { rel: "stylesheet", href: globalStyle, as: "style" },
  ];
}

function Loading() {
  return (
    <div className="mt-10 flex justify-center items-center">
      <Spinner size="xl" aria-label="Center-aligned spinner example" />
    </div>
  );
}

export function CatchBoundary() {
  return (
    <>
      <head>
        <Meta />
        <Links />
        <title>Error</title>
      </head>
      <ErrorPage />;
    </>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <body>
      <h1 className=" text-3xl text-red-600 font-sans">App Error</h1>
      <pre color="red">{error.message}</pre>
      <p>
        try to go to
        <Link to={"/"}> home page</Link>
      </p>
    </body>
  );
}

function App() {
  const data = useLoaderData();
  const transition = useTransition();
  let routeChanged =
    transition.state === "loading" &&
    transition.location.pathname.includes("/texts") &&
    !transition.location.state;

  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-gray-600 dark:text-white">
        <RecoilRoot>
          <LitteraProvider locales={["en_US", "bo_TI"]}>
            <Header user={data.user} />
            {routeChanged ? <Loading /> : <Outlet />}
          </LitteraProvider>
        </RecoilRoot>
        <ScrollRestoration getKey={(location) => location.pathname} />

        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
export default App;
