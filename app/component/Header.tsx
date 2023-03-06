import { Form, Link, NavLink, useFetcher, useLocation } from "@remix-run/react";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import LopenlingLogo from "~/assets/logo.svg";
import { useLitteraMethods } from "@assembless/react-littera";
import { MAX_WIDTH_PAGE } from "~/constants";
import { uselitteraTranlation } from "~/locales/translations";
export default function Header({ user }: any) {
  const location = useLocation();
  const loginFetcher = useFetcher();
  const translation = uselitteraTranlation();
  return (
    <div
      className=" max-w-full"
      style={{
        boxShadow: "0 2px 4px -1px rgb(0 0 0 / 25%)",
      }}
    >
      <Navbar
        rounded={true}
        fluid={false}
        style={{
          minHeight: 56,
          padding: 0,
          maxWidth: MAX_WIDTH_PAGE,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <NavLink preventScrollReset to={"/"} className="flex items-center">
          <img
            src="https://lopenling.org/uploads/default/original/1X/0ac3db8e589f085c53c5ff8f36c17722888658ad.png"
            alt="logo"
            className="hidden md:block"
            style={{ maxHeight: 37, maxWidth: 324 }}
          />
          <img
            src={LopenlingLogo}
            alt="logo"
            className="block md:hidden"
            style={{ maxHeight: 37, maxWidth: 324 }}
          />
        </NavLink>
        <div className="md:flex">
          <div className="hidden md:flex items-center">
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
                    size="sm"
                  />
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
                      {translation.logout}
                    </button>
                  </Form>
                </Dropdown.Item>
                <Dropdown.Item>
                  {user?.admin === "true" && (
                    <NavLink preventScrollReset to="/text-upload">
                      UploadText
                    </NavLink>
                  )}
                </Dropdown.Item>
                <div className="block md:hidden">
                  <Translation />
                </div>
              </Dropdown>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <loginFetcher.Form
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
                  className="text-sm font-medium leading-tight text-gray-900 capitalize"
                >
                  {translation.login}
                </button>
              </loginFetcher.Form>
              <Button
                outline={true}
                color=""
                className=" text-green-300 border-2 border-green-300"
              >
                <a
                  href={"https://lopenling.org/signup"}
                  className="text-sm font-medium leading-tight text-green-400"
                >
                  {translation.signup}
                </a>
              </Button>
            </div>
          )}
        </div>
      </Navbar>
    </div>
  );
}

function Translation() {
  const methods = useLitteraMethods();
  function changeLanguage(e) {
    switch (e.target.value) {
      case "en":
        methods.setLocale("en_US");
        break;
      case "bo":
        methods.setLocale("bo_TI");

        break;
    }
  }
  return (
    <div className="mr-10 flex items-center justify-start space-x-0.5">
      <select
        onChange={changeLanguage}
        className="text-sm font-medium leading-tight text-gray-900 "
      >
        <option value="en">English</option>
        <option value="bo">བོད་ཡིག་</option>
      </select>
    </div>
  );
}
