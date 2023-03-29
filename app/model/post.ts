// create post

import { db } from "~/db.server";

export async function createPost(
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
export async function findPostByUser(userId) {
  try {
    let posts = await db.post.findMany({
      where: {
        creatorUser: { id: userId },
      },
      include: {
        Reply: true,
      },
    });
    return posts;
  } catch (e) {
    return "couldnot find by userId" + e.message;
  }
}
export async function findPostByTopicId(TopicId: number) {
  try {
    let posts = await db.post.findFirst({
      where: {
        topic_id: TopicId,
      },
      include: {
        Reply: true,
      },
    });
    return posts;
  } catch (e) {
    return "couldnot find the by TopicId" + e.message;
  }
}
export async function findPostByTextId(textId: number, topicList = []) {
  try {
    let posts = await db.post.findMany({
      include: {
        creatorUser: true,
        likedBy: true,
        Reply: true,
      },
      where: {
        text_id: textId,
      },
    });
    const postWithReply = await Promise.all(
      posts.map(async (post) => {
        const replies = topicList.find((l) => l.id === post.topic_id);

        const isSolved =
          post.Reply.filter((l) => l.isAproved === true).length > 0;

        return {
          ...post,
          replyCount: replies?.posts_count,
          isSolved,
        };
      })
    );
    return postWithReply.filter(Boolean);
  } catch (e) {
    console.log(e.message);
  }
}
export async function findPostByPostId(id: string) {
  let post = await db.post.findFirst({
    where: {
      id,
    },
    select: {
      start: true,
      end: true,
      id: true,
    },
  });
  return post;
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
        id,
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
