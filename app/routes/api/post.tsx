import {
  ActionFunction,
  LoaderFunction,
  redirect,
} from "@remix-run/server-runtime";
import { createThread } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";
import { emitter } from "~/services/emitter.server";
export const loader: LoaderFunction = () => {
  return redirect("/");
};

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let Obj = Object.fromEntries(formData);
  const user = await getUserSession(request);
  const timeStart = Date.now();
  let DiscourseUrl = DISCOURSE_SITE;
  let api = DISCOURSE_API_KEY;
  let parent_category_id = DISCOURSE_QA_CATEGORY_ID;
  if (!user) throw new Error("user not logged in");
  if (!DiscourseUrl || !api || !parent_category_id) {
    throw new Error("set a DISCOURSE_SITE/DISCOURSE_API_KEY in env");
  }

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
      const timeEnd = Date.now();
      emitter.emit("newPost", { id: Obj.topic });
      return {
        message: "success",
        timedif: new Date(timeEnd).getTime() - new Date(timeStart).getTime(),
      };
    } catch (e) {
      return { error: { message: e.message } };
    }
  }
  return null;
};
