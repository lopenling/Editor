import { Form, Link, NavLink, useFetcher, useLocation } from "@remix-run/react";
import { Navbar, Dropdown, Avatar, Button, Select } from "flowbite-react";
import LogoOnly from "~/assets/logo.png";
import { useLitteraMethods } from "@assembless/react-littera";
import { useEffect, useMemo, useState } from "react";
import uselitteraTranlation, {
  translationCodes,
} from "~/locales/useLitteraTranslations";
import { useRecoilState, useRecoilValue } from "recoil";
import { textName, theme } from "~/states";

const Logo = `<img src="https://lopenling.org/uploads/default/original/1X/0ac3db8e589f085c53c5ff8f36c17722888658ad.png"
        alt="logo"
        className="hidden md:block object-contain"
        style="max-height:37px"
  /> `;
const LogoWithTextName = ({ textNameValue }) => (
  <div className="flex items-start gap-1">
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
      className="text-3xl font-bold ml-2 relative top-[-5px] text-light"
    >
      {textNameValue}
    </h1>
  </div>
);
export default function Header({ user }: any) {
  const loginFetcher = useFetcher();
  const translation = uselitteraTranlation();
  const redirectTo = useLocation().pathname;
  const [TextNameOnHeader, setTextNameOnHeader] = useState(false);
  const textNameValue = useRecoilValue(textName);
  const [themeSelected, setThemeSelected] = useRecoilState(theme);
  const changeTheme = () => {
    if (themeSelected === "light") setThemeSelected("dark");
    else setThemeSelected("light");
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [redirectTo, textNameValue]);
  return (
    <div id="header" className=" shadow-header sticky top-0 z-20 ">
      <Navbar
        fluid={false}
        className="xl:px-48 py-0 flex items-center "
        style={{
          minHeight: 56,
        }}
      >
        {TextNameOnHeader ? (
          <LogoWithTextName textNameValue={textNameValue} />
        ) : (
          <Navbar.Brand to={"/"} as={NavLink} className="flex items-center">
            <div
              dangerouslySetInnerHTML={{
                __html: Logo,
              }}
            ></div>
          </Navbar.Brand>
        )}
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div
            className={`flex ${
              user ? "justify-between" : "flex-col"
            } md:flex-row`}
          >
            <div className="flex items-center">
              <Translation />
            </div>
            {user ? (
              <div className="flex md:order-2">
                <Dropdown
                  className="z-10"
                  inline={true}
                  arrowIcon={null}
                  label={
                    <Avatar
                      alt={user.name}
                      img={user.avatarUrl}
                      rounded={true}
                      size="md"
                      title={user?.name}
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block truncate text-sm font-medium">
                      {user?.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item
                    className={user?.admin === "true" ? "" : "hidden"}
                  >
                    <NavLink preventScrollReset to="/texts/upload">
                      UploadText
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={changeTheme}>
                    {themeSelected === "light" ? "Dark Mode" : "Light Mode"}
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Form
                      method="post"
                      action="/sso/login"
                      className="flex items-center"
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
                  </Dropdown.Item>
                </Dropdown>
              </div>
            ) : (
              <div className="flex gap-2 justify-between p-3">
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
        </Navbar.Collapse>
      </Navbar>
    </div>
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
