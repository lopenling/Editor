import { json, LoaderFunction } from "@remix-run/server-runtime";
import bo from "~/file/i18n/bo.json";
export const loader: LoaderFunction = () => {
  return json(bo);
};
