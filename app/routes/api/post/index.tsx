import {
  ActionFunction,
  LoaderFunction,
  redirect,
} from "@remix-run/server-runtime";
import {
  createThread,
  deleteDiscourseTopic,
  updateDiscoursePost,
} from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";

import {
  createPost as createPostOnDB,
  deletePost,
  findPostByUserLiked,
  updatePostContentandAudio,
  updatePostLike,
} from "~/model/post";
import { uploadAudio } from "~/services/uploadAudio.server";
import {
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from "@remix-run/node";
import type { ActionArgs, UploadHandler } from "@remix-run/node";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const uploadHandler: UploadHandler = composeUploadHandlers(
    uploadAudio,
    createMemoryUploadHandler()
  );
  const user = await getUserSession(request);
  if (request.method === "POST") {
    const formData = await parseMultipartFormData(request, uploadHandler);
    let Obj = Object.fromEntries(formData);
    let DiscourseUrl = process.env.DISCOURSE_SITE;
    let api = process.env.DISCOURSE_API_KEY;
    let parent_category_id = process.env.DISCOURSE_QA_CATEGORY_ID;
    if (!user) throw new Error("user not logged in");
    if (!DiscourseUrl || !api || !parent_category_id) {
      throw new Error("set a DISCOURSE_SITE/DISCOURSE_API_KEY in env");
    }
    let audioUrl = Obj.file as string;
    let textId = parseInt(Obj.textId as string);

    try {
      const data = await createThread(
        user.username,
        Obj.topic as string,
        Obj.selectionSegment as string,
        Obj.body as string,
        parent_category_id,
        textId,
        audioUrl,
        Obj.threadId as string
      );
      if (data["topic_id"] && user) {
        const createPost = await createPostOnDB(
          Obj.type as string,
          data["avatar_template"],
          data["topic_id"],
          data["id"],
          Obj.threadId as string,
          textId,
          Obj.body as string,
          user.id,
          audioUrl
        );

        return createPost;
      }
    } catch (error) {
      console.error("Failed to create question:", error);
      return { message: error };
    }
  }
  if (request.method === "DELETE") {
    let formData = await request.formData();
    let Obj = Object.fromEntries(formData);

    let id = Obj.id as string;
    let res = await deletePost(id);
    let deleteDiscourse = await deleteDiscourseTopic(
      user.username,
      res.topic_id
    );
    return {
      deleted: res,
    };
  }
  if (request.method === "PATCH") {
    const formData = await parseMultipartFormData(request, uploadHandler);
    let action = formData.get("action") as string;
    if (action === "like") {
      let postId = formData.get("id") as string;
      let userId = formData.get("userId") as string;
      const likedUsers = await findPostByUserLiked(postId, userId);
      try {
        let response = await updatePostLike(
          postId,
          userId,
          likedUsers === null
        );
        return response.likedBy;
      } catch (e) {
        console.log(e);
      }

      return { success: true };
    }
    if (action === "update") {
      let newContent = formData.get("body") as string;
      let postId = formData.get("postId") as string;
      let audioUrl = formData.get("file") as string;
      if (!audioUrl) {
        audioUrl = formData.get("audioUrl") as string;
      }

      let res = await updatePostContentandAudio(postId, newContent, audioUrl);
      if (res?.post_id)
        await updateDiscoursePost(
          res.post_id,
          newContent,
          audioUrl,
          user.username
        );
      return res;
    }
  }
  return null;
};
