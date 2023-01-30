import { json, LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import tailwindStyle from "./styles/tailwind.css";
import globalStyle from "./styles/globalStyle.css";
import { db } from "./db.server";
import Header from "./component/Header";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  description: "annotation of text and discussion on budhist text",
});

export const loader: LoaderFunction = async ({ request }) => {
  const title = "lopenling";
  const user = db.user.findMany();
  return json({ user, title });
};

export function links() {
  return [
    { rel: "stylesheet", href: tailwindStyle, as: "style" },
    { rel: "stylesheet", href: globalStyle, as: "style" },
  ];
}

export default function App() {
  const loaderData = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body style={{ width: "100vw" }}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
