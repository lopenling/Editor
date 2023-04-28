import {
  ActionFunction,
  LoaderFunction,
  redirect,
} from "@remix-run/server-runtime";
import { createThread, deleteDiscourseTopic } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";
export const loader: LoaderFunction = () => {
  return redirect("/");
};
import { createPost as createPostOnDB, deletePost } from "~/model/post";
import { findUserByUsername } from "~/model/user";
import { uploadAudio } from "~/services/uploadAudio.server";
import {
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from "@remix-run/node";
import type { ActionArgs, UploadHandler } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const uploadHandler: UploadHandler = composeUploadHandlers(
    uploadAudio,
    createMemoryUploadHandler()
  );
  const user = await getUserSession(request);
  if (request.method === "POST") {
    const formData = await parseMultipartFormData(request, uploadHandler);
    let Obj = Object.fromEntries(formData);
    const userData = await findUserByUsername(user.username);
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
        Obj.topic,
        Obj.selectionSegment,
        Obj.body,
        parent_category_id,
        textId,
        audioUrl,
        Obj.threadId
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
          userData.id,
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
  return null;
};
