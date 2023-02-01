import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/server-runtime";
import {
  createThread,
  deletePost,
  getpostreplies,
  getposts,
} from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";

export const loader: LoaderFunction = () => {
  return redirect("/");
};

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  const user = await getUserSession(request);
  let DiscourseUrl = DISCOURSE_SITE;
  let api = DISCOURSE_API_KEY;
  let parent_category_id = DISCOURSE_QA_CATEGORY_ID;
  if (!user) throw new Error("user not logged in");
  if (!DiscourseUrl || !api || !parent_category_id) {
    throw new Error("set a DISCOURSE_SITE/DISCOURSE_API_KEY in env");
  }
  let Obj = Object.fromEntries(formData);

  if (request.method === "POST") {
    try {
      await createThread(
        user.username,
        Obj.topic,
        Obj.selectedTextSegment,
        Obj.body,
        Obj.start,
        Obj.end,
        parent_category_id,
        parseInt(Obj.textId),
        Obj.type
      );
    } catch (e) {
      throw new Error(e.message);
    }
    return { message: "success" };
  }
  return null;
};
