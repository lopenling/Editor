import { LoaderFunction, ActionFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { findTextByPageId } from "~/model/text";

import pusher from "~/services/pusher.server";
import diffMatchPatch from "diff-match-patch";
import { getUserSession } from "~/services/session.server";
import { TextType } from "~/model/type";
import { trigerUpdate } from "~/lib";
import { updatePage } from "~/model/page";

// export let loader: LoaderFunction = async ({ request }) => {
//   const textId = new URL(request.url).searchParams.get("textId") ?? "";
//   const text = await findTextByTextIdAndPageId(parseInt(textId), 1);
//   return json(text);
// };
export let action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const user = await getUserSession(request);
  const dmp = new diffMatchPatch();
  const patchString = data.get("patch") as string;
  const patch = dmp.patch_fromText(JSON.parse(patchString));
  const pageId = data.get("pageId") as string;

  let text: TextType = await findTextByPageId(pageId);
  const [newText, result] = dmp.patch_apply(patch, text.content);
  try {
    if (result.every((element: any) => element === true)) {
      const res = await updatePage(pageId, newText);
      await trigerUpdate(user, pageId);
      return res;
    }
    return null;
  } catch (e) {
    return false;
  }
};
