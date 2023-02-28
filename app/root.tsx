import type { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useTransition,
} from "@remix-run/react";
import { Progress, Spinner } from "flowbite-react";
import React from "react";
import ErrorPage from "./component/ErrorPage";
import Header from "./component/Header";
import { getUserSession } from "./services/session.server";
import globalStyle from "./styles/globalStyle.css";
import tailwindStyle from "./styles/tailwind.css";
import { LitteraProvider } from "@assembless/react-littera";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  description: "annotation of text and discussion on budhist text",
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

function Document({ children, title }: { children: any; title: string }) {
  const transition = useTransition();
  const loaderData = useLoaderData();
  let routeChanged =
    transition.state === "loading" &&
    transition.location.pathname.includes("/texts") &&
    !transition.location.state;
  const header = React.useMemo(
    () => <Header user={loaderData.user} />,
    [loaderData.user]
  );
  return (
    <html>
      <head>
        <Meta />
        <Links />
        <title>{title}</title>
      </head>

      <body style={{ width: "100vw" }}>
        <LitteraProvider locales={["en_US", "bo_TI"]}>
          {header}
          {routeChanged ? <Loading /> : children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </LitteraProvider>
      </body>
    </html>
  );
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
  console.log(error);
  return (
    <Document title={"error ooh"}>
      <h1>App Error</h1>
      <pre color="red">{error.message}</pre>
      <p>
        try to go to here <a href="/">click</a>
      </p>
    </Document>
  );
}

function App() {
  return (
    <>
      <Document title={"Lopenling App"}>
        <Outlet />
      </Document>
    </>
  );
}
export default App;
