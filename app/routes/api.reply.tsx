import { ActionFunction } from "@remix-run/server-runtime";
import { createPost, deletePost } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";
import {
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from "@remix-run/node";
import { uploadAudio } from "~/services/uploadAudio.server";
import type { ActionArgs, UploadHandler } from "@remix-run/node";
import {
  createReply,
  findReply,
  isReplyPresent,
  updateIsAproved,
  updateLikeReply,
} from "~/model/reply";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const user = await getUserSession(request);
  try {
    if (request.method === "DELETE") {
      const formData = await request.formData();
      const postId = formData.get("postId") as string;
      await deletePost(postId, user.username);
      return {
        delete: "success",
      };
    }
    if (request.method === "POST") {
      const uploadHandler: UploadHandler = composeUploadHandlers(
        uploadAudio,
        createMemoryUploadHandler()
      );
      const formData = await parseMultipartFormData(request, uploadHandler);
      let Obj = Object.fromEntries(formData);
      const postString = Obj.postString as string;
      const topicId = Obj.topicId as string;
      let audioUrl = Obj.file as string | null;
      if (audioUrl === undefined) audioUrl = null;
      let create = await createPost(
        topicId,
        audioUrl,
        postString,
        user.username
      );
      return {
        posts: await create.json(),
      };
    }
    if (request.method === "PATCH") {
      const formData = await request.formData();
      const user = await getUserSession(request);
      let Obj = Object.fromEntries(formData);
      let action = Obj.action as string;
      if (action === "like") {
        let post_id = Obj.post_id as string;
        let id = Obj.id as string;
        //check if user already like it
        let replyExist = await isReplyPresent(id);
        if (!replyExist) {
          await createReply(id, post_id, user.id);
        } else {
          const alreadyLiked = await findReply(id, user.id);
          await updateLikeReply(id, user.id, !alreadyLiked);
        }
        return { success: true };
      }
      if (action === "approve") {
        let replyId = Obj.id as string;
        let isSolved = Obj.isSolved === "false";
        try {
          await updateIsAproved(replyId, isSolved);
        } catch (e) {
          throw new Error("error on approving reply");
        }
        return null;
      }
    }
  } catch (e) {
    return {
      post: e.message,
    };
  }
};
