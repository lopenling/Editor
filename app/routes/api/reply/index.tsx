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

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const user = await getUserSession(request);
  try {
    if (request.method === "DELETE") {
      const formData = await request.formData();
      const postId = formData.get("postId");
      await deletePost(postId, user.username);
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
      let audioUrl = Obj.file as string;
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
  } catch (e) {
    return {
      post: e.message,
    };
  }
};
