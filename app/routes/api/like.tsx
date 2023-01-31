import { ActionFunction, json } from "@remix-run/server-runtime";
import { db } from "~/db.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let Obj = Object.fromEntries(formData);
  let _action = Obj._action as string;

  if (_action === "likeReply") {
    let post_id = Obj.post_id as string;
    let likedBy = Obj.likedBy as string;
    let id = Obj.id as string;
    let create = Obj.create as string;
    //check if user already like it

    if (create == 0) {
      await db.reply.create({
        data: {
          id,
          parentPost: {
            connect: {
              id: post_id,
            },
          },
          likedBy: {
            connect: {
              id: likedBy,
            },
          },
        },
        include: {
          likedBy: true,
        },
      });
    } else {
      const alreadyLiked = await db.reply.findFirst({
        where: {
          id,
          likedBy: {
            some: {
              id: likedBy,
            },
          },
        },
      });
      if (!alreadyLiked) {
        await db.reply.update({
          where: {
            id,
          },
          data: {
            likedBy: {
              connect: {
                id: likedBy,
              },
            },
          },
        });
      } else {
        await db.reply.update({
          where: {
            id,
          },
          data: {
            likedBy: {
              disconnect: {
                id: likedBy,
              },
            },
          },
        });
      }
    }
  }
  if (_action === "likePost") {
    let id = Obj.id as string;
    let userId = Obj.userId as string;
    const likedUsers = await db.post.findFirst({
      where: {
        id: id,
        likedBy: {
          some: {
            id: userId,
          },
        },
      },
    });
    try {
      if (!likedUsers) {
        await db.post.update({
          data: {
            likedBy: {
              connect: {
                id: userId,
              },
            },
          },
          where: {
            id: id,
          },
        });
      } else {
        await db.post.update({
          data: {
            likedBy: {
              disconnect: {
                id: userId,
              },
            },
          },
          where: {
            id: id,
          },
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  return { success: true };
};
