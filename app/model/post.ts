// create post

import { db } from "~/services/db.server";
import { fetchCategoryData } from "~/services/discourseApi";

export async function createPost(
  type: string,
  avatar: string,
  topic_id: number,
  post_id: number,
  threadId: string,
  textId: number,
  pageId: string,
  content: string,
  creatorUser_id: string,
  audioUrl: string
) {
  try {
    const createPost = await db.post.create({
      data: {
        type: type,
        avatar: avatar,
        topic_id: topic_id,
        post_id: post_id,
        content: content,
        threadId,
        creatorUser_id: creatorUser_id,
        textId: textId,
        pageId: pageId,
        audioUrl: audioUrl,
      },
    });
    console.log(createPost);
    return createPost;
  } catch (e) {
    console.log(e);
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
export async function findPostByTextIdAndPage(textId: number, pageId: string) {
  const Categories = await fetchCategoryData();
  const topicList = Categories.topic_list.topics;
  try {
    let posts = await db.post.findMany({
      include: {
        creatorUser: true,
        likedBy: true,
        reply: true,
      },
      where: {
        textId,
        pageId,
      },
    });
    const postWithReply = await Promise.all(
      posts.map(async (post) => {
        const replies = topicList.find((l) => l.id === post.topic_id);
        const isSolved =
          post.reply.filter((l) => l.is_approved === true).length > 0;

        return {
          ...post,
          replyCount: replies?.posts_count - 1, //-1 because the parent post is included here
          isSolved,
        };
      })
    );
    return postWithReply.filter(Boolean);
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
        textId: true,
      },
    });
    return response;
  } catch (e) {
    throw new Error("update post like error: " + e.message);
  }
}
export async function updatePostContentandAudio(
  id: string,
  content: string,
  audioUrl: string
) {
  try {
    let response = await db.post.update({
      data: {
        content,
        audioUrl,
      },
      where: {
        id,
      },
    });
    return response;
  } catch (e) {
    throw new Error("update post content error: " + e.message);
  }
}

//delete post
export async function deletePost(id: string) {
  try {
    let data = await db.post.delete({
      where: {
        id,
      },
    });
    return data;
  } catch (e) {
    throw new Error("cannot delete post ", e);
  }
}
