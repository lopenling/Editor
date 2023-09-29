import type { LoaderFunction } from '@remix-run/node';
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
  useFetchers,
} from '@remix-run/react';
import ErrorPage from './component/Layout/ErrorPage';
import { getUserSession } from './services/session.server';
import globalStyle from './styles/globalStyle.css';
import tributeStyle from './styles/tribute.css';
import tailwindStyle from './styles/tailwind.css';
import { LitteraProvider } from '@assembless/react-littera';
import { RecoilRoot } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import { getUser } from './model/user';
import notificationStyle from 'react-notifications-component/dist/theme.css';
import nProgressStyles from 'nprogress/nprogress.css';
import { useEffect, useMemo } from 'react';
import NProgress from 'nprogress';
export function meta({ matches }) {
  const rootMeta = matches[0].meta;
  const title = rootMeta.find((m) => m.title) || 'Lopenling App';
  return [
    { title },
    {
      name: 'description',
      content: 'annotation of text and discussion on budhist text',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    },
    { property: 'og:title', content: 'Lopenling App' },
    {
      name: 'keywords',
      content: 'Lopenling, Lopen, editor,tibetan,critical text,pecha ,text, lopenling-editor',
    },
  ];
}

export const loader: LoaderFunction = async ({ request }) => {
  let userSession = await getUserSession(request);
  if (!userSession) return { user: null };
  let user = await getUser(userSession.username);

  return { user };
};
export function links() {
  return [
    {
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/png',
    },
    { rel: 'stylesheet', href: tailwindStyle, as: 'style' },
    { rel: 'stylesheet', href: globalStyle, as: 'style' },
    { rel: 'stylesheet', href: notificationStyle, as: 'style' },
    { rel: 'stylesheet', href: tributeStyle, as: 'style' },
    { rel: 'stylesheet', href: nProgressStyles },
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

export default function App() {
  const data = useLoaderData();
  const navigation = useNavigation();
  let fetchers = useFetchers();

  let state = useMemo<'idle' | 'loading'>(
    function getGlobalState() {
      let states = [navigation.state, ...fetchers.map((fetcher) => fetcher.state)];
      if (states.every((state) => state === 'idle')) return 'idle';
      return 'loading';
    },
    [navigation.state, fetchers],
  );
  useEffect(() => {
    if (state === 'loading') NProgress.start();
    if (state === 'idle') NProgress.done();
  }, [navigation.state]);

  return (
    <html className={data.user?.preference?.theme || 'light'}>
      <head>
        <meta charSet="UTF-8"></meta>
        <Meta />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
        <Links />
      </head>
      <body className="relative max-h-[100vh] max-w-[100vw] overflow-x-hidden  scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:bg-gray-600 dark:text-white">
        <LitteraProvider locales={['en_US', 'bo_TI']}>
          <AnimatePresence mode="wait" initial={false}>
            <RecoilRoot>
              <Outlet context={{ user: data.user }} />
            </RecoilRoot>
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
