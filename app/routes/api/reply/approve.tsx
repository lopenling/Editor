import { ActionFunction } from "@remix-run/server-runtime";
import { updateIsAproved } from "~/model/reply";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let replyId = formData.get("id") as string;
  let isSolved = formData.get("isSolved") === "false";

  try {
    await updateIsAproved(replyId, isSolved);
  } catch (e) {
    throw new Error("error on approving reply");
  }
  return null;
};
