import { Form, Link, useLocation } from "@remix-run/react";
import { Navbar, Dropdown, Avatar, Select } from "flowbite-react";
import LopenlingLogo from "~/assets/logo.svg";
import { useLittera, useLitteraMethods } from "@assembless/react-littera";
import translations from "~/locales/translations";
import { MAX_WIDTH_PAGE } from "~/constants";
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
          height: 56,
          padding: 0,
          maxWidth: MAX_WIDTH_PAGE,
          margin: "0 auto",
        }}
      >
        <Link to="/" className="flex items-center  ">
          <img
            src="https://lopenling.org/uploads/default/original/1X/0ac3db8e589f085c53c5ff8f36c17722888658ad.png"
            alt="logo"
            style={{ maxHeight: 37, maxWidth: 324 }}
          />
        </Link>
        <div className="flex">
          <Translation />
          {user ? (
            <div className="flex md:order-2">
              <Dropdown
                className="z-10"
                inline={true}
                arrowIcon={null}
                label={
                  user.avatarUrl ? (
                    <Avatar
                      alt={user.name}
                      img={user.avatarUrl}
                      rounded={true}
                      size="sm"
                    />
                  ) : (
                    <div className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
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
                      logout
                    </button>
                  </Form>
                </Dropdown.Item>
                <Dropdown.Item>
                  {user?.admin === "true" && (
                    <Link to="/text-upload">UploadText</Link>
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
                  className="text-sm font-medium leading-tight text-gray-900 capitalize"
                >
                  log in
                </button>
              </Form>
              <div className="flex items-center justify-center space-x-2 rounded-lg border border-green-400 px-5 py-2.5">
                <a
                  href={"https://lopenling.org/signup"}
                  className="text-sm font-medium leading-tight text-green-400"
                >
                  Sign Up
                </a>
              </div>
            </div>
          )}
        </div>
      </Navbar>
    </div>
  );
}

function Translation() {
  const translated = useLittera(translations);
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
        className="text-sm font-medium leading-tight text-gray-900 border-0 outline-none focus:outline-none"
      >
        <option value="en">english</option>
        <option value="bo">བོད་ཡིག་</option>
      </select>
    </div>
  );
}
