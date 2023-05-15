import { useLittera } from "@assembless/react-littera";
import en from "~/assets/locale/en.json";
import bo from "~/assets/locale/bo.json";

type translationType = {
  filter: string;
};

export const translationCodes = [
  { code: "en_US", name: "English" },
  { code: "bo_TI", name: "བོད་ཡིག" },
];

export function translationList() {
  let translations: translationType = en;
  for (const key in en) {
    translations = {
      ...translations,
      [key]: {
        en_US: en[key],
        bo_TI: bo.hasOwnProperty(key) ? bo[key] : en[key],
      },
    };
  }
  return translations;
}
export default function uselitteraTranlation() {
  let translations = translationList();
  const translation = useLittera(translations);
  return translation;
}
