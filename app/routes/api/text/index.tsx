import { LoaderFunction, ActionFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { findTextByTextId, updateText } from "~/model/text";
import pusher from "~/services/pusher.server";
import DiffMatchPatch from "diff-match-patch";

export let loader: LoaderFunction = async ({ request }) => {
  const textId = new URL(request.url).searchParams.get("textId") ?? "";
  const text = await findTextByTextId(parseInt(textId), true);
  return json(text);
};
export let action: ActionFunction = async ({ request }) => {
  const dmp = new DiffMatchPatch();
  const data = await request.formData();
  const patchString = data.get("patch") as string;
  const patch = dmp.patch_fromText(patchString);
  const id = data.get("id") as string;
  const textContent = await findTextByTextId(parseInt(id), true);
  const content = textContent?.content;
  const [newText, result] = dmp.patch_apply(patch, content);
  try {
    if (result.every((element) => element === true)) {
      const res = await updateText(parseInt(id), newText);
      if (res) {
        let channelId = "presence-text_" + id;
        await pusher.trigger(channelId, "update-app", {
          message: "ok",
        });
      }

      return res;
    }
    return null;
  } catch (e) {
    return false;
  }
};
