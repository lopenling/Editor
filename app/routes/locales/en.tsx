import { json, LoaderFunction } from "@remix-run/server-runtime";
import en from "~/file/i18n/en.json";
export const loader: LoaderFunction = () => {
  return json(en);
};
