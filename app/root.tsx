import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import ErrorPage from "./component/Layout/ErrorPage";
import { getUserSession } from "./services/session.server";
import globalStyle from "./styles/globalStyle.css";
import tailwindStyle from "./styles/tailwind.css";
import { LitteraProvider } from "@assembless/react-littera";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { UserState } from "./states";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { getUser } from "./model/user";
import { Loader, GlobalLoading } from "./component/UI";
import notificationStyle from "react-notifications-component/dist/theme.css";

export function meta() {
  return [
    { title: "Lopenling App" },
    {
      name: "description",
      content: "annotation of text and discussion on budhist text",
    },
    { property: "og:title", content: "Lopenling App" },
  ];
}

export const loader: LoaderFunction = async ({ request }) => {
  let userSession = await getUserSession(request);
  if (!userSession) return { user: null };
  let user = await getUser(userSession.id);
  return { user };
};
export function links() {
  return [
    {
      rel: "icon",
      href: "https://lopenling.org/uploads/default/optimized/1X/dc5520a6052a0314c4b370af1420c9c9c105526b_2_32x32.png",
      type: "image/png",
    },
    { rel: "stylesheet", href: tailwindStyle, as: "style" },
    { rel: "stylesheet", href: globalStyle, as: "style" },
    { rel: "stylesheet", href: notificationStyle, as: "style" },
  ];
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <ErrorPage message={error.data} />
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <ErrorPage message={error.message} />
        <p>The stack trace is:</p>
        <p>{error.stack}</p>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

function App() {
  const data = useLoaderData();
  const navigation = useNavigation();
  let routeChanged =
    navigation.state === "loading" &&
    navigation.location?.pathname.includes("/text");

  return (
    <html className={data.user?.preference?.theme || "light"}>
      <head>
        <Meta />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
        <Links />
      </head>
      <body className="relative dark:bg-gray-600 dark:text-white  scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <LitteraProvider locales={["en_US", "bo_TI"]}>
          <AnimatePresence mode="wait" initial={false}>
            {routeChanged ? (
              <div
                style={{ height: "100vh" }}
                className="w-full flex justify-center items-center"
              >
                <Loader />
              </div>
            ) : (
              <Outlet context={{ user: data.user }} />
            )}
          </AnimatePresence>
        </LitteraProvider>
        <GlobalLoading />
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
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}
