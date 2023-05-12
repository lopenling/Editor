import { LoaderFunction, ActionFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { findTextByTextId, updateText } from "~/model/text";
import pusher from "~/services/pusher.server";
import DiffMatchPatch from "diff-match-patch";
import { redis } from "~/services/redis.server";
import { getUserSession } from "~/services/session.server";

export let loader: LoaderFunction = async ({ request }) => {
  const textId = new URL(request.url).searchParams.get("textId") ?? "";
  const text = await findTextByTextId(parseInt(textId), true);
  return json(text);
};
export let action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const user = await getUserSession(request);
  const dmp = new DiffMatchPatch();
  const patchString = data.get("patch") as string;
  const patch = dmp.patch_fromText(JSON.parse(patchString));
  const id = data.get("id") as string;
  let text = await findTextByTextId(parseInt(id), true);
  const [newText, result] = dmp.patch_apply(patch, text.content);
  try {
    if (result.every((element) => element === true)) {
      const res = await updateText(parseInt(id), newText);
      if (res.id) {
        let channelId = "presence-text_" + id;
        await pusher.trigger(channelId, "update-app", { user: user.id });
      }
      return res;
    }
    return null;
  } catch (e) {
    return false;
  }
};
