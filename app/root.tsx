import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
  useNavigation,
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
import Loader from "./component/UI/Loader";
import { GlobalLoading } from "./component/UI/globalLoader";
import notificationStyle from "react-notifications-component/dist/theme.css";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  description: "annotation of text and discussion on budhist text",
  title: "Lopenling App",
});
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
  const navigation = useNavigation();
  let routeChanged =
    navigation.state === "loading" &&
    navigation.location?.pathname.includes("/text");
  let setUser = useSetRecoilState(UserState);
  useEffect(() => {
    setUser(data.user);
  }, [data]);

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
              <Outlet />
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
