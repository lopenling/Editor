import { LoaderFunction, ActionFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { findTextByTextId, updateText } from "~/model/text";
import pusher from "~/services/pusher.server";

export let loader: LoaderFunction = async ({ request }) => {
  const textId = new URL(request.url).searchParams.get("textId") ?? "";
  const text = await findTextByTextId(parseInt(textId), true);
  return json(text);
};
export let action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const content = data.get("content") as string;
  const id = data.get("id") as string;
  try {
    const res = await updateText(parseInt(id), content);
    if (res) {
      let channelId = "presence-text_" + id;
      await pusher.trigger(channelId, "update-app", {
        message: "ok",
      });
    }

    return res;
  } catch (e) {
    return false;
  }
};
