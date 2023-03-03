// create post

import { db } from "~/db.server";

export async function createPostOnDB(
  id: string,
  type: string,
  avatar: string,
  topic_id: number,
  post_id: number,
  start: number,
  end: number,
  text_id: number,
  content: string,
  creatorUser_id: string
) {
  try {
    let createdPost = await db.post.create({
      data: {
        id,
        type,
        avatar,
        topic_id,
        post_id,
        start,
        end,
        text_id,
        content,
        creatorUser_id,
      },
    });
    return createdPost;
  } catch (e) {
    throw new Error("post couldnot be created " + e);
  }
}

//find post
export async function findPostByTopicId(TopicId: number) {
  try {
    let posts = await db.post.findFirst({
      where: {
        topic_id: TopicId,
      },
    });
    return posts;
  } catch (e) {
    return "couldnot find the post with error" + e.message;
  }
}
export async function findPostByTextId(textId: number, domain = "") {
  try {
    let posts = await db.post.findMany({
      include: {
        creatorUser: true,
        likedBy: true,
      },
      where: {
        text_id: textId,
      },
    });
    let postWithReply = await Promise.all(
      posts.map(async (post) => {
        let url = `${domain}/api/replies/${post?.topic_id}`;
        let replies = await (await fetch(url)).json();
        // replies.posts.shift();
        return { ...post, replies: replies };
      })
    );
    return postWithReply;
  } catch (e) {
    return "couldnot find the post with error" + e.message;
  }
}

export async function findPostByUserLiked(id: string, userId: string) {
  try {
    let f = await db.post.findFirst({
      where: {
        id: id,
        likedBy: {
          some: {
            id: userId,
          },
        },
      },
    });
    return f;
  } catch (e) {
    throw new Error("could not find post by userliked" + e.message);
  }
}
//update post

export async function updatePostLike(
  id: string,
  userId: string,
  payload: boolean
) {
  try {
    let response = await db.post.update({
      data: {
        likedBy: payload
          ? {
              connect: {
                id: userId,
              },
            }
          : {
              disconnect: {
                id: userId,
              },
            },
      },
      where: {
        id: id,
      },
      select: {
        likedBy: true,
      },
    });
    return response;
  } catch (e) {
    throw new Error("update post like error: " + e.message);
  }
}
