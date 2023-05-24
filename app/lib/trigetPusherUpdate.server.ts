import { UserType } from "~/model/type";
import pusher from "~/services/pusher.server";

async function trigerUpdate(user: UserType, textId: number) {
  if (textId) {
    let channelId = "presence-text_" + textId;
    await pusher.trigger(channelId, "update-app", {
      userId: user?.id,
      userName: user?.username,
    });
  }
}

export default trigerUpdate;
