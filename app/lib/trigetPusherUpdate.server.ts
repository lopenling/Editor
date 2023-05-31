import { UserType } from "~/model/type";
import pusher from "~/services/pusher.server";

async function trigerUpdate(user: UserType, pageId: string) {
  if (pageId) {
    let channelId = `presence-text_${pageId}`;
    return await pusher.trigger(channelId, "update-app", {
      userId: user?.id,
      userName: user?.username,
    });
  }
}

export default trigerUpdate;
