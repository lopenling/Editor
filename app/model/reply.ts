//create reply

import { db } from "~/db.server";

export async function createReply(
  id: string,
  postId: string,
  likedById: string
) {
  try {
    let reply = await db.reply.create({
      data: {
        id,
        parentPost: {
          connect: {
            id: postId,
          },
        },
        likedBy: {
          connect: {
            id: likedById,
          },
        },
      },
      include: {
        likedBy: true,
      },
    });
    return reply;
  } catch (e) {
    throw new Error("creating reply Error " + e.message);
  }
}

export async function findReply(id: string, likedBy: string) {
  try {
    let data = await db.reply.findFirst({
      where: {
        id,
        likedBy: {
          some: {
            id: likedBy,
          },
        },
      },
    });
    return data;
  } catch (e) {
    throw new Error("couldnot find reply error" + e.message);
  }
}
export async function findReplyByPostId(post_id: string) {
  try {
    let res = await db.reply.findMany({
      where: {
        post_id,
      },
      include: {
        likedBy: true,
      },
    });
    return res;
  } catch (e) {
    throw new Error("finding reply by postId error" + e.message);
  }
}

export async function updateReply(id: string, likedBy: string, put: boolean) {
  try {
    await db.reply.update({
      where: {
        id,
      },
      data: {
        likedBy: put
          ? {
              connect: {
                id: likedBy,
              },
            }
          : {
              disconnect: {
                id: likedBy,
              },
            },
      },
    });
  } catch (e) {
    throw new Error("couldnot update reply error" + e.message);
  }
}

export async function findAproved(id: string) {
  try {
    let res = await db.reply.findFirst({
      where: {
        id,
      },
      select: {
        isAproved: true,
      },
    });
    return res;
  } catch (e) {
    throw new Error("error finding aproved in reply" + e.message);
  }
}

//update isAproved

export async function updateIsAproved(id: string, isAproved: boolean) {
  try {
    let res = await db.reply.update({
      where: {
        id,
      },
      data: {
        isAproved,
      },
    });
    return res;
  } catch (e) {
    throw new Error("updating approved error" + e.message);
  }
}
