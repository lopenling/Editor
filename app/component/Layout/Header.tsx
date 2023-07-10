import { Form, Link, NavLink, useFetcher, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import LogoOnly from '~/assets/logo.png';
import { useLitteraMethods } from '@assembless/react-littera';
import { useEffect, useState, memo } from 'react';
import uselitteraTranlation, { translationCodes } from '~/locales/useLitteraTranslations';
import { useRecoilValue } from 'recoil';
import { textInfo } from '~/states';
import { Editor } from '@tiptap/react';
import { SearchString } from '~/features/Editor';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { ForumLink, HEADER_HEIGHT } from '~/constants';
import { Avatar } from '~/component/UI';
import { containTibetanletter, isSmallScreen } from '~/lib';
import { UserType } from '~/model/type';
import { FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { AiOutlineTranslation } from 'react-icons/ai';
import EditorSetting from '~/features/Editor/component/EditorSetting';
import { FaUserAlt, FaBars } from 'react-icons/fa';

const Logo = () => (
  <img
    src={ForumLink+'/uploads/default/original/1X/0ac3db8e589f085c53c5ff8f36c17722888658ad.png'}
    alt="logo"
    className="block max-h-[37px] object-contain "
  />
);
const LogoWithTextName = ({ textName }: { textName: string }) => {
  if (textName.length > 20 && isSmallScreen) {
    textName = textName.slice(0, 25) + '...';
  }
  return (
    <div className="flex items-center gap-1">
      <Link to="/">
        {' '}
        <img src={LogoOnly} alt="logo" className="block object-contain" style={{ maxHeight: '37px' }} />
      </Link>
      <h1
        onClick={() => {
          let editorElement = document.getElementById('textEditorContainer');
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
  const redirectTo = useLocation().pathname;
  const [TextNameOnHeader, setTextNameOnHeader] = useState(false);
  const { name: textName } = useRecoilValue(textInfo);
  let { user }: { user: UserType } = useOutletContext();

  const changeTheme = () => {
    themeFetcher.submit(
      {
        theme: user?.preference?.theme !== 'dark' ? 'dark' : 'light',
      },
      {
        action: '/api/user/preference/theme',
        method: 'POST',
      }
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
  }, [redirectTo, textName]);
  
  let darkMode = user?.preference?.theme === 'dark';
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showHeaderMenu, setShowHeaderMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const ref = useDetectClickOutside({
    onTriggered: () => setShowUserMenu(false),
  });
  const searchRef = useDetectClickOutside({
    onTriggered: () => setShowSearch(false),
  });
  const headermenuref = useDetectClickOutside({
    onTriggered: () => setShowHeaderMenu(false),
  });
  return (
    <nav
      className="header shadow-header fixed top-0 z-50 w-full border-gray-200 bg-white dark:bg-gray-900 "
      style={{
        height: showHeaderMenu ? 'min-content' : HEADER_HEIGHT,
        fontFamily: 'serif',
      }}
    >
      <div className=" mx-auto flex flex-wrap items-center justify-between p-2">
        {TextNameOnHeader ? (
          <LogoWithTextName textName={textName} />
        ) : (
          <NavLink to={'/'} prefetch="intent" className="flex w-auto items-center">
            <Logo />
          </NavLink>
        )}
        <button
          onClick={() => setShowHeaderMenu((p) => !p)}
          type="button"
          className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 dark:text-gray-400 dark:focus:ring-gray-600 dark:hover:bg-gray-700 md:hidden"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <FaBars color="inherit" className="fill-gray-400 hover:text-gray-600 " size={24} />
        </button>
        <div
          ref={headermenuref}
          className={`${
            !showHeaderMenu && 'hidden md:flex'
          }  w-full flex-col items-center justify-center  md:order-2 md:w-auto md:justify-end lg:flex-row`}
        >
          <div className="flex w-full items-center justify-between gap-2 pt-3 md:p-0">
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
            {editor && (
              <div className="flex gap-3">
                <div className="mr-2 mt-2 " ref={searchRef}>
                  <button onClick={() => setShowSearch((p) => !p)}>
                    <FaSearch className="text-gray-400 hover:text-gray-600 " size={24} />
                  </button>
                  {showSearch && (
                    <div className="absolute right-0 top-[100%] mt-2 bg-white" style={{ width: 515, maxWidth: '50vw' }}>
                      <SearchString editor={editor} />
                    </div>
                  )}
                </div>
                <EditorSetting editor={editor} />
              </div>
            )}

            {user && (
              <>
                <button
                  type="button"
                  className="  rounded-full  text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
                  id="user-menu-button"
                  onClick={() => setShowUserMenu((prev) => !prev)}
                >
                  <span className="sr-only">Open user menu</span>
                  <Avatar alt={user.name} img={user.avatarUrl} rounded={true} title={user?.name} size="sm" />
                </button>
                {showUserMenu && (
                  <div
                    ref={ref}
                    style={{ top: '100%' }}
                    className="absolute right-0 z-50 list-none divide-y divide-gray-100 rounded-lg bg-white px-3 text-base shadow dark:divide-gray-600 dark:bg-gray-700"
                    id="user-dropdown-bittun"
                  >
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
                      <span className="block truncate  text-sm text-gray-500 dark:text-gray-400">
                        <a
                          target={'_self'}
                          href={ForumLink + `/u/${user?.username}/summary`}
                          className="block truncate text-sm font-medium"
                        >
                          {user?.email}
                        </a>
                      </span>
                    </div>
                    <div className=" flex flex-col justify-center" aria-labelledby="user-menu-button ">
                      <Translation />

                      <div
                        onClick={changeTheme}
                        className={` cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white`}
                      >
                        {darkMode ? (
                          <div className="flex gap-2 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className={`${themeFetcher.formData?.get('theme') && 'animate-spin'} h-5 w-5`}
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            Light mode
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className={`${themeFetcher.formData?.get('theme') && 'animate-spin'} h-5 w-5`}
                            >
                              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            Dark mode
                          </div>
                        )}
                      </div>
                      <div>
                        <a
                          target={'_blank'}
                          href={ForumLink + `/u/${user?.username}/preferences/account`}
                          className=" flex gap-2 truncate px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.49 3.17C11.11 1.61 8.88999 1.61 8.50999 3.17C8.45326 3.40442 8.34198 3.62212 8.18522 3.80541C8.02845 3.9887 7.83062 4.13238 7.60784 4.22477C7.38505 4.31716 7.1436 4.35564 6.90313 4.33709C6.66266 4.31854 6.42997 4.24347 6.22399 4.118C4.85199 3.282 3.28199 4.852 4.11799 6.224C4.65799 7.11 4.17899 8.266 3.17099 8.511C1.60999 8.89 1.60999 11.111 3.17099 11.489C3.40547 11.5458 3.62322 11.6572 3.80651 11.8141C3.98979 11.971 4.13343 12.1689 4.22573 12.3918C4.31803 12.6147 4.35639 12.8563 4.33766 13.0968C4.31894 13.3373 4.24368 13.5701 4.11799 13.776C3.28199 15.148 4.85199 16.718 6.22399 15.882C6.42993 15.7563 6.66265 15.6811 6.90318 15.6623C7.14371 15.6436 7.38527 15.682 7.60817 15.7743C7.83108 15.8666 8.02904 16.0102 8.18592 16.1935C8.34281 16.3768 8.45419 16.5945 8.51099 16.829C8.88999 18.39 11.111 18.39 11.489 16.829C11.546 16.5946 11.6575 16.377 11.8144 16.1939C11.9713 16.0107 12.1692 15.8672 12.3921 15.7749C12.6149 15.6826 12.8564 15.6442 13.0969 15.6628C13.3373 15.6815 13.57 15.7565 13.776 15.882C15.148 16.718 16.718 15.148 15.882 13.776C15.7565 13.57 15.6815 13.3373 15.6628 13.0969C15.6442 12.8564 15.6826 12.6149 15.7749 12.3921C15.8672 12.1692 16.0107 11.9713 16.1939 11.8144C16.377 11.6575 16.5946 11.546 16.829 11.489C18.39 11.11 18.39 8.889 16.829 8.511C16.5945 8.45419 16.3768 8.34281 16.1935 8.18593C16.0102 8.02904 15.8666 7.83109 15.7743 7.60818C15.682 7.38527 15.6436 7.14372 15.6623 6.90318C15.681 6.66265 15.7563 6.42994 15.882 6.224C16.718 4.852 15.148 3.282 13.776 4.118C13.5701 4.24368 13.3373 4.31895 13.0968 4.33767C12.8563 4.35639 12.6147 4.31804 12.3918 4.22574C12.1689 4.13344 11.971 3.9898 11.8141 3.80651C11.6572 3.62323 11.5458 3.40548 11.489 3.171L11.49 3.17ZM9.99999 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 9.99999 7C9.20434 7 8.44128 7.31607 7.87867 7.87868C7.31606 8.44129 6.99999 9.20435 6.99999 10C6.99999 10.7956 7.31606 11.5587 7.87867 12.1213C8.44128 12.6839 9.20434 13 9.99999 13V13Z"
                              fill={darkMode ? 'white' : '#111928'}
                            />
                          </svg>
                          Preferences
                        </a>
                      </div>

                      <Form
                        method="POST"
                        action="/auth/login"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <input
                          type="hidden"
                          name="redirectTo"
                          className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                          defaultValue={redirectTo}
                        />
                        <button
                          className="flex items-center gap-2 px-1 text-sm font-medium leading-tight"
                          type="submit"
                          name="_action"
                          value="logout"
                        >
                          <FaSignOutAlt />
                          {translation.logout}
                        </button>
                      </Form>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
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
      <AiOutlineTranslation />
      <select
        onChange={changeLanguage}
        className="border-transparent bg-transparent text-gray-500 focus:border-transparent focus:outline-none  focus:ring-0 focus:ring-gray-100 dark:border-gray-600  dark:bg-transparent dark:text-white dark:focus:ring-gray-700"
      >
        {translationCodes.map((code) => (
          <option key={code.code} value={code.code} className="bg-white dark:bg-slate-600 ">
            {code.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default memo(Header);
