import { ActionFunction } from "@remix-run/node";
import { updateTheme } from "~/model/preference";
import { getUserSession } from "~/services/session.server";

export const action: ActionFunction = async ({ request }) => {
  let user = await getUserSession(request);
  let formData = await request.formData();
  let theme = formData.get("theme") as string;
  if (!user) return null;
  let updateddata = await updateTheme(user.id, theme);
  console.log(updateddata);
  return null;
};
