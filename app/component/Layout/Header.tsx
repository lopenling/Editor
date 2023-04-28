import { Form, Link, NavLink, useFetcher, useLocation } from "@remix-run/react";
import { Navbar, Avatar, Button, Select } from "flowbite-react";
import LogoOnly from "~/assets/logo.png";
import { useLitteraMethods } from "@assembless/react-littera";
import { useEffect, useState, memo } from "react";
import uselitteraTranlation, {
  translationCodes,
} from "~/locales/useLitteraTranslations";
import { useRecoilState, useRecoilValue } from "recoil";
import { openJoyride, textName, theme } from "~/states";
import { Editor } from "@tiptap/react";
import SearchString from "../Editor/SearchString";
import { useDetectClickOutside } from "react-detect-click-outside";
const Logo = () => (
  <img
    src="https://lopenling.org/uploads/default/original/1X/0ac3db8e589f085c53c5ff8f36c17722888658ad.png"
    alt="logo"
    className="block object-contain max-h-[37px] "
  />
);
const LogoWithTextName = ({ textNameValue }: { textNameValue: string }) => (
  <div className="flex items-center gap-1">
    <Link to="/">
      {" "}
      <img
        src={LogoOnly}
        alt="logo"
        className="hidden md:block object-contain"
        style={{ maxHeight: "37px" }}
      />
    </Link>
    <h1
      onClick={() => window?.scrollTo(0, 0)}
      style={{ top: -10 }}
      className="text-3xl ml-2 relative  font-bold "
    >
      {textNameValue}
    </h1>
  </div>
);
type HeaderProps = {
  user: any;
  editor: Editor | null;
};
function Header({ user, editor }: HeaderProps) {
  const loginFetcher = useFetcher();
  const themeFetcher = useFetcher();
  const translation = uselitteraTranlation();
  const redirectTo = useLocation().pathname;
  const [TextNameOnHeader, setTextNameOnHeader] = useState(false);
  const textNameValue = useRecoilValue(textName);
  const [themeSelected, setThemeSelected] = useRecoilState(theme);
  const changeTheme = () => {
    setThemeSelected(!themeSelected);
    themeFetcher.submit(
      {
        theme: !themeSelected ? "dark" : "light",
      },
      {
        action: "/api/user/preference/theme",
        method: "post",
      }
    );
  };
  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        const shouldShowTextName =
          window.scrollY > 10 && redirectTo.includes("texts");

        setTextNameOnHeader(shouldShowTextName);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, [redirectTo, textNameValue]);
  let darkMode = themeSelected;
  let [run, setRun] = useRecoilState(openJoyride);
  let [showMenu, setShowMenu] = useState(false);
  const ref = useDetectClickOutside({ onTriggered: () => setShowMenu(false) });
  return (
    <nav className="header bg-white border-gray-200 dark:bg-gray-900 shadow-header sticky top-0 z-20 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        {TextNameOnHeader ? (
          <LogoWithTextName textNameValue={textNameValue} />
        ) : (
          <NavLink to={"/"} prefetch="intent" className="flex items-center">
            <Logo />
          </NavLink>
        )}
        <div id="searchTextForm"></div>
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="flex items-center justify-end gap-2 md:order-2 hidden w-full md:flex md:w-auto"
          id="mobile-menu-2"
        >
          <div className="flex items-center">
            <Translation />
          </div>
          {editor && <SearchString editor={editor} />}

          {user ? (
            <>
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                onClick={() => setShowMenu((prev) => !prev)}
              >
                <span className="sr-only">Open user menu</span>
                <Avatar
                  alt={user.name}
                  img={user.avatarUrl}
                  rounded={true}
                  size="sm"
                  title={user?.name}
                />
              </button>
              {showMenu && (
                <div
                  ref={ref}
                  style={{ top: 50 }}
                  className="z-50 absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown-bittun"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user.name}
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      <a
                        target={"_self"}
                        href={`https://lopenling.org/u/${user?.username}/summary`}
                        className="block truncate text-sm font-medium"
                      >
                        {user?.email}
                      </a>
                    </span>
                  </div>
                  <div
                    className=" flex flex-col justify-center"
                    aria-labelledby="user-menu-button "
                  >
                    <NavLink
                      preventScrollReset
                      to="/texts/upload"
                      prefetch="render"
                      className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.4697 2.46967C11.7626 2.17678 12.2374 2.17678 12.5303 2.46967L17.0303 6.96967C17.3232 7.26256 17.3232 7.73744 17.0303 8.03033C16.7374 8.32322 16.2626 8.32322 15.9697 8.03033L12.75 4.81066L12.75 16.5C12.75 16.9142 12.4142 17.25 12 17.25C11.5858 17.25 11.25 16.9142 11.25 16.5L11.25 4.81066L8.03033 8.03033C7.73744 8.32322 7.26256 8.32322 6.96967 8.03033C6.67678 7.73744 6.67678 7.26256 6.96967 6.96967L11.4697 2.46967ZM3 15.75C3.41421 15.75 3.75 16.0858 3.75 16.5V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V16.5C20.25 16.0858 20.5858 15.75 21 15.75C21.4142 15.75 21.75 16.0858 21.75 16.5V18.75C21.75 20.4069 20.4069 21.75 18.75 21.75H5.25C3.59315 21.75 2.25 20.4069 2.25 18.75V16.5C2.25 16.0858 2.58579 15.75 3 15.75Z"
                          fill={darkMode ? "white" : "#111928"}
                          stroke="#111928"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Upload text
                    </NavLink>

                    <div
                      onClick={changeTheme}
                      className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      {darkMode ? (
                        <div className="flex gap-2 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5"
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
                            className="w-5 h-5"
                          >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                          </svg>
                          Dark mode
                        </div>
                      )}
                    </div>
                    <div>
                      <a
                        target={"_blank"}
                        href={`https://lopenling.org/u/${user?.username}/preferences/account`}
                        className="block truncate flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
                            fill={darkMode ? "white" : "#111928"}
                          />
                        </svg>
                        Preferences
                      </a>
                    </div>
                    {redirectTo.includes("texts") && (
                      <div
                        className="block cursor-pointer truncate flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        onClick={() => setRun(true)}
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
                            d="M18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10ZM10 7C9.8243 6.99983 9.65165 7.04595 9.49945 7.13373C9.34724 7.22151 9.22085 7.34784 9.133 7.5C9.06957 7.61788 8.98311 7.72182 8.87876 7.80566C8.77441 7.8895 8.65429 7.95154 8.52552 7.9881C8.39675 8.02466 8.26194 8.03499 8.12911 8.01849C7.99627 8.00198 7.86809 7.95897 7.75218 7.89201C7.63628 7.82505 7.53499 7.7355 7.45433 7.62867C7.37367 7.52184 7.31529 7.3999 7.28263 7.27008C7.24997 7.14027 7.24371 7.00522 7.26421 6.87294C7.28472 6.74065 7.33157 6.61384 7.402 6.5C7.73222 5.92811 8.24191 5.48116 8.85203 5.22846C9.46214 4.97576 10.1386 4.93144 10.7765 5.10236C11.4143 5.27328 11.978 5.64989 12.38 6.1738C12.782 6.6977 13 7.33962 13 8C13.0002 8.62062 12.8079 9.22603 12.4498 9.73285C12.0916 10.2397 11.5851 10.623 11 10.83V11C11 11.2652 10.8946 11.5196 10.7071 11.7071C10.5196 11.8946 10.2652 12 10 12C9.73478 12 9.48043 11.8946 9.29289 11.7071C9.10536 11.5196 9 11.2652 9 11V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9C10.2652 9 10.5196 8.89464 10.7071 8.70711C10.8946 8.51957 11 8.26522 11 8C11 7.73478 10.8946 7.48043 10.7071 7.29289C10.5196 7.10536 10.2652 7 10 7ZM10 15C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13C9.73478 13 9.48043 13.1054 9.29289 13.2929C9.10536 13.4804 9 13.7348 9 14C9 14.2652 9.10536 14.5196 9.29289 14.7071C9.48043 14.8946 9.73478 15 10 15Z"
                            fill={darkMode ? "white" : "#111928"}
                          />
                        </svg>
                        help
                      </div>
                    )}
                    <Form
                      method="post"
                      action="/sso/login"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <input
                        type="hidden"
                        name="redirectTo"
                        className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                        defaultValue={redirectTo}
                      />
                      <button
                        className="text-sm font-medium leading-tight "
                        type="submit"
                        name="_action"
                        value="logout"
                      >
                        {translation.logout}
                      </button>
                    </Form>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex gap-2 justify-between" id="user-menu-button">
              <loginFetcher.Form
                method="post"
                id="login"
                action="/sso/login"
                className="flex items-center"
              >
                <input
                  type="hidden"
                  name="redirectTo"
                  defaultValue={redirectTo}
                />

                <button
                  type="submit"
                  name="_action"
                  value="login"
                  className="text-sm font-medium leading-tight text-gray-900 capitalize dark:text-white"
                >
                  {translation.login}
                </button>
              </loginFetcher.Form>
              <Button
                // gradientDuoTone="tealToLime"
                className=" text-green-400 border-2 border-green-300"
                color=""
                id="signup"
              >
                <a href={"https://lopenling.org/signup"}>
                  {translation.signup}
                </a>
              </Button>
            </div>
          )}
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        ></div>
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
    <div className="md:mr-10 flex items-center justify-start space-x-0.5">
      <Select
        onChange={changeLanguage}
        sizing="md"
        className="border-transparent focus:border-transparent focus:ring-0 text-gray-500 bg-transparent  focus:outline-none focus:ring-gray-100 dark:bg-transparent  dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
      >
        {translationCodes.map((code) => (
          <option
            key={code.code}
            value={code.code}
            className="dark:bg-slate-600 "
          >
            {code.name}
          </option>
        ))}
      </Select>
    </div>
  );
}

export default memo(Header);
