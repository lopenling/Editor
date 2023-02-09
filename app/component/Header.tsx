import React from "react";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import LopenlingLogo from "~/file/logo.svg";
import { useTranslation } from "react-i18next";
function generateInitials(name) {
  const nameArray = name.split(" ");
  let initials = "";
  for (let i = 0; i < nameArray.length; i++) {
    initials += nameArray[i][0];
  }
  return initials;
}

export default function Header({ user }: any) {
  const location = useLocation();
  const { t, ready } = useTranslation("common");
  return (
    <Navbar
      rounded={true}
      fluid={false}
      style={{ borderBottom: "1px solid #eee" }}
      className="justify-between px-3"
    >
      <Link to="/" className="flex items-center  ">
        <img src={LopenlingLogo} alt="logo" />
      </Link>
      <div className="flex flex-row">
        <Translation />

        {user ? (
          <div className="flex md:order-2">
            <Dropdown
              className="z-10"
              inline={true}
              label={
                user.avatarUrl ? (
                  <Avatar alt={user.name} img={user.avatarUrl} rounded={true} />
                ) : (
                  <div className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
                    <span className="font-medium capitalize text-gray-600 dark:text-gray-300">
                      {generateInitials(user.name)}
                    </span>
                  </div>
                )
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.username}</span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Divider />
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
                    defaultValue={location.pathname}
                  />
                  <button
                    className="text-sm font-medium leading-tight text-gray-900"
                    type="submit"
                    name="_action"
                    value="logout"
                  >
                    {t("logout")}
                  </button>
                </Form>
              </Dropdown.Item>
              <Dropdown.Item>
                {user?.admin === "true" && (
                  <Link to="/text-upload">{t("uploadText")}</Link>
                )}
              </Dropdown.Item>
            </Dropdown>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Form
              method="post"
              action="/sso/login"
              className="flex items-center"
            >
              <input
                type="hidden"
                name="redirectTo"
                defaultValue={location.pathname}
              />
              <button
                type="submit"
                name="_action"
                value="login"
                className="text-sm font-medium leading-tight text-gray-900"
              >
                {t("login")}
              </button>
            </Form>
            <div className="flex items-center justify-center space-x-2 rounded-lg border border-green-400 px-5 py-2.5">
              <a
                href={"https://lopenling.org/signup"}
                className="text-sm font-medium leading-tight text-green-400"
              >
                {t("signUp")}
              </a>
            </div>
          </div>
        )}
      </div>
    </Navbar>
  );
}

function Translation() {
  const { t, ready, i18n } = useTranslation("common");
  if (!ready) return <div>loading</div>;
  let locale = i18n.language;
  function changeLanguage() {
    if (locale === "en") {
      i18n.changeLanguage("bo");
    } else {
      i18n.changeLanguage("en");
    }
  }
  return (
    <div className="mr-10 flex items-center justify-center space-x-0.5">
      <button
        onClick={changeLanguage}
        className="text-sm font-medium leading-tight text-gray-900 mr-2"
        style={{ paddingTop: locale === "bo" ? -10 : 0 }}
      >
        {t("localeName")}
      </button>
      <svg
        width="6"
        height="9"
        viewBox="0 0 6 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.564289 8.73635C0.395565 8.56757 0.300781 8.3387 0.300781 8.10005C0.300781 7.8614 0.395565 7.63252 0.564289 7.46375L3.52799 4.50005L0.564289 1.53635C0.400347 1.36661 0.309632 1.13927 0.311682 0.903288C0.313733 0.667311 0.408385 0.44158 0.575252 0.274713C0.74212 0.107845 0.967851 0.013193 1.20383 0.0111424C1.43981 0.00909184 1.66715 0.0998072 1.83689 0.263749L5.43689 3.86375C5.60561 4.03252 5.7004 4.2614 5.7004 4.50005C5.7004 4.7387 5.60561 4.96757 5.43689 5.13635L1.83689 8.73635C1.66811 8.90507 1.43924 8.99986 1.20059 8.99986C0.961941 8.99986 0.733064 8.90507 0.564289 8.73635Z"
          fill="#6B7280"
        />
      </svg>
    </div>
  );
}
