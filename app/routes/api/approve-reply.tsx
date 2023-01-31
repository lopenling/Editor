import { ActionFunction } from "@remix-run/server-runtime";
import { db } from "~/db.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let replyId = formData.get("id") as string;
  try {
    let reply = await db.reply.findFirst({
      where: {
        id: replyId,
      },
      select: {
        isAproved: true,
      },
    });
    if (!reply?.isAproved) {
      await db.reply.update({
        where: {
          id: replyId,
        },
        data: {
          isAproved: true,
        },
      });
    } else {
      await db.reply.update({
        where: {
          id: replyId,
        },
        data: {
          isAproved: null,
        },
      });
    }
  } catch (e) {
    throw new Error("error on approving reply");
  }
  return null;
};
