import type { LoaderFunction, MetaFunction } from "@remix-run/node";
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
  useLocation,
} from "@remix-run/react";
import { Spinner } from "flowbite-react";
import ErrorPage from "./component/ErrorPage";
import Header from "./component/Header";
import { getUserSession } from "./services/session.server";
import globalStyle from "./styles/globalStyle.css";
import tailwindStyle from "./styles/tailwind.css";
import { LitteraProvider } from "@assembless/react-littera";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { theme } from "./states";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Audiostyle from "react-h5-audio-player/lib/styles.css";
import flagsmith from "flagsmith";
import { FlagsmithProvider } from "flagsmith/react";

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
    { rel: "stylesheet", href: Audiostyle, as: "style" },
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
      <pre color="red">{error?.message}</pre>
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
  let [themeSelected, setThemeSelected] = useRecoilState(theme);
  useEffect(() => {
    // addingtohtml();
    if (window) {
      let oldSelection = window.localStorage.getItem("theme");
      if (oldSelection !== themeSelected) setThemeSelected(oldSelection);
    }
  }, []);
  return (
    <html className={themeSelected}>
      <head>
        <Meta />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
        <Links />
      </head>
      <body className="dark:bg-gray-600 dark:text-white">
        <LitteraProvider locales={["en_US", "bo_TI"]}>
          <Header user={data.user} />
          <AnimatePresence mode="wait" initial={false}>
            {routeChanged ? <Loading /> : <Outlet />}
          </AnimatePresence>
        </LitteraProvider>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <LiveReload />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>

        <Scripts />
      </body>
    </html>
  );
}
export default function AppContainer() {
  return (
    <FlagsmithProvider
      options={{
        environmentID:
          process.env.NODE_ENV == "production"
            ? "HP2Vunc4bFV43VC4mxJq9h"
            : "Sv9qxuVydSiwi6dNdKhstn",
      }}
      flagsmith={flagsmith}
    >
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </FlagsmithProvider>
  );
}
