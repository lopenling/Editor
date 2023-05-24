import { UserType } from "~/model/type";
import pusher from "~/services/pusher.server";

async function trigerUpdate(user: UserType, textId: number) {
  if (textId) {
    let channelId = `presence-text_${textId}`;
    return await pusher.trigger(channelId, "revalidate", {
      userId: user?.id,
      userName: user?.username,
    });
  }
}

export default trigerUpdate;
