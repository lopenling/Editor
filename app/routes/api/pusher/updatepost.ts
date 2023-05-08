import { ActionFunction, json } from "@remix-run/node";
import pusher from "~/services/pusher.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const channel_name = formData.get("channelName");
  const message = formData.get("message");

  await pusher.trigger(channel_name, "update-app", {
    message,
  });
  console.log(channel_name, message);
  return json({ status: 200 });
};
