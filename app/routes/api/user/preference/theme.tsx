import { ActionFunction } from "@remix-run/node";
import { updateTheme } from "~/model/preference";
import { getUserSession } from "~/services/session.server";

export const action: ActionFunction = async ({ request }) => {
  let user = await getUserSession(request);
  let formData = await request.formData();
  let theme = formData.get("theme") as string;
  let res = await updateTheme(user.id, theme);
  return res;
};
