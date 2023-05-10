import { ActionFunction, ActionArgs } from "@remix-run/server-runtime";
import {
  createReply,
  findReply,
  isReplyPresent,
  updateLikeReply,
} from "~/model/reply";
import { getUserSession } from "~/services/session.server";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const user = await getUserSession(request);
  let Obj = Object.fromEntries(formData);

  let post_id = Obj.post_id as string;
  let id = Obj.id as string;
  //check if user already like it
  let replyExist = await isReplyPresent(id);
  if (!replyExist) {
    await createReply(id, post_id, user.id);
  } else {
    const alreadyLiked = await findReply(id, user.id);
    await updateLikeReply(id, user.id, !alreadyLiked);
  }
  return { success: true };
};
