import { ActionFunction } from "@remix-run/server-runtime";
import { findAproved, updateIsAproved } from "~/model/reply";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let replyId = formData.get("id") as string;
  try {
    let reply = await findAproved(replyId);
    if (!reply?.isAproved) {
      await updateIsAproved(replyId, true);
    } else {
      await updateIsAproved(replyId, false);
    }
  } catch (e) {
    throw new Error("error on approving reply");
  }
  return null;
};
