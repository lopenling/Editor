import { useLittera } from "@assembless/react-littera";
import en from "~/assets/locale/en.json";
import bo from "~/assets/locale/bo.json";

type translationType = {
  filter: string;
};
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

export default function uselitteraTranlation() {
  const translation = useLittera(translations);
  return translation;
}
