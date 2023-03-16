// create post

import { db } from "~/db.server";
import { getposts as getPostsDiscourse } from "~/services/discourseApi";
import { findReplyByPostId } from "./reply";

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
export async function findPostByTopicId(TopicId: number) {
  try {
    let posts = await db.post.findFirst({
      where: {
        topic_id: TopicId,
      },
    });
    return posts;
  } catch (e) {
    return "couldnot find the by TopicId" + e.message;
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
    const postWithReply = await Promise.all(
      posts.map(async (post) => {
        const [replies, repliesFromDb] = await Promise.all([
          getPostsDiscourse(post.topic_id),
          findReplyByPostId(post.id),
        ]);

        const isSolved =
          repliesFromDb.filter((l) => l.isAproved === true).length > 0;

        const postsResponse = replies?.post_stream?.posts;
        if (!postsResponse) return null;

        return {
          ...post,
          replyCount: postsResponse?.length,
          isSolved,
        };
      })
    );
    return postWithReply.filter(Boolean);
  } catch (e) {
    console.log(e.message);
  }
}
export async function findPostByTextIdDemo(textId: number, domain = "") {
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

    return posts;
  } catch (e) {
    console.log(e.message);
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
