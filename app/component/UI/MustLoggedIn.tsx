import { useFetcher, useLocation } from "@remix-run/react";
import uselitteraTranlation from "~/locales/useLitteraTranslations";

export default function LogInMessage() {
  let loginFetcher = useFetcher();
  let redirectTo = useLocation().pathname;
  const translation = uselitteraTranlation();

  return (
    <div
      id="toast-success"
      className="flex items-center w-full  p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Warning icon</span>
      </div>
      <loginFetcher.Form
        method="POST"
        id="login"
        action="/auth/login"
        className="flex items-center ml-3 text-sm font-normal"
      >
        <input type="hidden" name="redirectTo" defaultValue={redirectTo} />

        <button
          type="submit"
          name="_action"
          value="login"
          className="text-sm font-medium leading-tight text-gray-900 capitalize dark:text-white"
        >
          click to {translation.login}
        </button>
      </loginFetcher.Form>
    </div>
  );
}
