import { Form, Link, NavLink, useFetcher, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import LogoOnly from '~/assets/logo.png';
import { useLitteraMethods } from '@assembless/react-littera';
import { useEffect, useState, memo } from 'react';
import uselitteraTranlation, { translationCodes } from '~/locales/useLitteraTranslations';
import { Editor } from '@tiptap/react';
import { ForumLink, HEADER_HEIGHT } from '~/constants';
import { Avatar } from '~/component/UI';
import { containTibetanletter, isSmallScreen } from '~/lib';
import { UserType } from '~/model/type';
import { FaSignOutAlt } from 'react-icons/fa';
import { AiOutlineTranslation } from 'react-icons/ai';
import EditorSetting from '~/features/Editor/component/EditorSetting';
import { FaUserAlt } from 'react-icons/fa';
import { Dropdown } from 'flowbite-react';
import { MdNightlight } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { IoIosSettings } from 'react-icons/io';

const LogoWithTextName = ({ textName }: { textName: string }) => {
  if (textName.length > 20 && isSmallScreen) {
    textName = textName.slice(0, 25) + '...';
  }
  return (
    <div className="flex items-center gap-1">
      <Link to="/">
        <img src={LogoOnly} alt="logo" className="block object-contain" style={{ maxHeight: '37px' }} />
      </Link>
      <h1
        onClick={() => {
          let editorElement = document.documentElement;
          editorElement?.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
        style={{ top: containTibetanletter(textName) ? -7 : 0, fontSize: 24 }}
        className="relative ml-2 text-3xl  font-bold "
      >
        {textName}
      </h1>
    </div>
  );
};
type HeaderProps = {
  editor: Editor | null;
};
function Header({ editor }: HeaderProps) {
  const loginFetcher = useFetcher();
  const themeFetcher = useFetcher();
  const translation: any = uselitteraTranlation();
  const { pathname, search } = useLocation();
  const redirectTo = pathname + search;
  const [TextNameOnHeader, setTextNameOnHeader] = useState(false);
  let { user }: { user: UserType } = useOutletContext();
  let { text } = useLoaderData();
  const changeTheme = () => {
    themeFetcher.submit(
      {
        theme: user?.preference?.theme !== 'dark' ? 'dark' : 'light',
      },
      {
        action: '/api/user/preference/theme',
        method: 'POST',
      },
    );
  };
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        var scrollTopValue = window.pageYOffset || document.documentElement?.scrollTop || document.body?.scrollTop;
        const shouldShowTextName = scrollTopValue! > 10 && redirectTo.includes('text');
        setTextNameOnHeader(shouldShowTextName);
      }, 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window?.addEventListener('scroll', handleScroll);
  }, [redirectTo]);
  let darkMode = user?.preference?.theme === 'dark';

  return (
    <nav
      className="z-50 w-full border-gray-200 bg-white dark:bg-gray-900 "
      style={{
        height: HEADER_HEIGHT,
        fontFamily: 'serif',
      }}
    >
      <div className=" mx-auto flex flex-wrap items-center justify-between p-2">
        {TextNameOnHeader && text?.name ? (
          <LogoWithTextName textName={text?.name} />
        ) : (
          <NavLink to={'/'} prefetch="intent" className="flex w-auto items-center">
            <img
              src={ForumLink + '/uploads/default/original/1X/0ac3db8e589f085c53c5ff8f36c17722888658ad.png'}
              alt="logo"
              className="block h-8 object-contain p-1 md:p-0"
            />
          </NavLink>
        )}
        <div className="flex gap-2">
          {!user && (
            <div className="flex gap-2" id="user-menu-button">
              <a href={ForumLink + '/signup'} id="signup" className="loginButton">
                {translation.signup}
              </a>
              <loginFetcher.Form method="POST" id="login" action="/auth/login" className="mr-2 flex items-center">
                <input type="hidden" name="redirectTo" defaultValue={redirectTo} />
                <button type="submit" name="_action" value="login" className="loginButton flex items-center gap-1">
                  <FaUserAlt />
                  {translation.login}
                </button>
              </loginFetcher.Form>
            </div>
          )}
          {editor && <EditorSetting editor={editor} />}

          {user && (
            <>
              <Dropdown
                label="Dropdown button"
                dismissOnClick={false}
                renderTrigger={() => {
                  return (
                    <button
                      type="button"
                      className="rounded-full  text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
                      id="user-menu-button"
                    >
                      <span className="sr-only">Open user menu</span>
                      <Avatar alt={user?.name} img={user?.avatarUrl} rounded={true} title={user?.name} size="sm" />
                    </button>
                  );
                }}
              >
                <Dropdown.Header>
                  <span className="block text-sm capitalize">{user.username}</span>
                  <a
                    target={'_self'}
                    href={ForumLink + `/u/${user?.username}/summary`}
                    className="block truncate text-sm font-medium"
                  >
                    {user.email}
                  </a>
                </Dropdown.Header>
                <Dropdown.Item onClick={changeTheme} icon={darkMode ? CiLight : MdNightlight}>
                  {darkMode ? 'Light mode' : 'Dark mode'}
                </Dropdown.Item>
                <Translation />
                <Dropdown.Item
                  as="a"
                  href={ForumLink + `/u/${user?.username}/preferences/account`}
                  icon={IoIosSettings}
                  target="_blank"
                >
                  Preferences
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item icon={FaSignOutAlt}>
                  <Form method="POST" action="/auth/login">
                    <input type="hidden" name="redirectTo" defaultValue={redirectTo} />
                    <button className=" text-sm font-medium leading-tight" type="submit" name="_action" value="logout">
                      {translation.logout}
                    </button>
                  </Form>
                </Dropdown.Item>
              </Dropdown>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
export function Translation() {
  const methods = useLitteraMethods();
  const changeLanguage: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    methods.setLocale(e.target.value);
  };
  return (
    <div className="flex  items-center justify-start space-x-0.5 px-4">
      <AiOutlineTranslation className="mr-2" />
      <select
        onChange={changeLanguage}
        className="border-transparent bg-transparent text-gray-500 focus:border-transparent focus:outline-none  focus:ring-0 focus:ring-gray-100 dark:border-gray-600  dark:bg-transparent dark:text-white dark:focus:ring-gray-700"
      >
        {translationCodes.map((code) => (
          <option key={code.code} value={code.code} className="bg-white dark:bg-slate-600 px-1 py-2 ">
            {code?.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default memo(Header);
