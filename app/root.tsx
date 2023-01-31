import { json, LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
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
import tailwindStyle from "./styles/tailwind.css";
import globalStyle from "./styles/globalStyle.css";
import Header from "./component/Header";
import { getUserSession } from "./services/session.server";
import FooterContainer from "./component/Footer";
import React from "react";
import { Progress } from "flowbite-react";
import ErrorPage from "./component/ErrorPage";
import { db } from "./db.server";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  description: "annotation of text and discussion on budhist text",
});
export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);
  let text = await db.text.findMany();
  return { user, text };
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

function Document({ children, title }: any) {
  const transition = useTransition();
  const loaderData = useLoaderData();
  let location = useLocation();
  let routeChanged =
    transition.state === "loading" &&
    transition.location.pathname.includes("/texts") &&
    !transition.location.state;

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>Lopenling</title>
      </head>

      <body style={{ width: "100vw" }}>
        <Header user={loaderData.user} />
        {routeChanged ? <Loading /> : children}
        {location.pathname === "/" && <FooterContainer />}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Loading() {
  const [percent, setPercent] = React.useState(0);
  let step = 0.5;
  let current_progress = 0;
  React.useEffect(() => {
    let interval = setInterval(function () {
      current_progress += step;
      let progress =
        Math.round((Math.atan(current_progress) / (Math.PI / 2)) * 100 * 1000) /
        1000;
      if (progress >= 100) {
        clearInterval(interval);
      } else if (progress >= 70) {
        step = 0.1;
      }
      setPercent(progress);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <Progress progress={percent} size="sm" color="dark" />;
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
      <Document title={"Lopenling Application"}>
        <Outlet />
      </Document>
    </>
  );
}
export default App;
