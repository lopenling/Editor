import {
  ActionFunction,
  LoaderFunction,
  redirect,
} from "@remix-run/server-runtime";
import { createThread } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";
export const loader: LoaderFunction = () => {
  return redirect("/");
};
import { createPost as createPostOnDB, deletePost } from "~/model/post";
import { findUserByUsername } from "~/model/user";
import { uploadAudio } from "~/services/uploadAudio";

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let file = formData.get("file");
  let Obj = Object.fromEntries(formData);
  const user = await getUserSession(request);
  const userData = await findUserByUsername(user.username);
  let DiscourseUrl = process.env.DISCOURSE_SITE;
  let api = process.env.DISCOURSE_API_KEY;
  let parent_category_id = process.env.DISCOURSE_QA_CATEGORY_ID;
  if (!user) throw new Error("user not logged in");
  if (!DiscourseUrl || !api || !parent_category_id) {
    throw new Error("set a DISCOURSE_SITE/DISCOURSE_API_KEY in env");
  }
  let textId = parseInt(Obj.textId);
  if (request.method === "POST") {
    try {
      let audioUrl;
      if (file) {
        try {
          audioUrl = await uploadAudio(formData);
        } catch (e) {
          throw new Error(e.message);
        }
      } else {
        audioUrl = "";
      }
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
          Obj.type,
          data["avatar_template"],
          data["topic_id"],
          data["id"],
          Obj.threadId,
          textId,
          Obj.body,
          userData.id,
          audioUrl
        );
        return createPost;
      }
    } catch (error) {
      console.error("Failed to create question:", error);
      throw error;
    }
  }
  if (request.method === "DELETE") {
    let id = Obj.id as string;
    let res = await deletePost(id);
    return {
      deleted: res,
    };
  }
  return null;
};
