import React from "react";
import { getUserSession } from "~/services/session.server";
import {
  ActionFunction,
  json,
  MetaFunction,
  redirect,
} from "@remix-run/server-runtime";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { db } from "~/db.server";
import { useLoaderData } from "@remix-run/react";
const Editor = React.lazy(() => import("~/component/Editor"));
export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await getUserSession(request);
  const textId = params.textId;
  if (!textId) throw new Error("not valid textId");
  let userInfo = null;
  if (user?.email) {
    try {
      let findUserInDatabase = await db.user.findUnique({
        where: { email: user.email },
      });
      userInfo = { ...findUserInDatabase, ...user };
    } catch (e) {
      console.log(e);
    }
  }

  const posts = await db.post.findMany({
    include: {
      creatorUser: true,
      likedBy: true,
    },
    where: {
      text_id: parseInt(textId),
    },
  });
  const text = await db.text.findUnique({
    where: {
      id: parseInt(textId),
    },
  });
  const data = {
    user: userInfo,
    text,
    posts,
  };
  return json(data, { status: 200 });
};

export const meta: MetaFunction = ({ data }) => {
  let dataName = data?.text?.name;
  let title = dataName ? dataName : "text";
  return {
    title,
  };
};

export default function () {
  const data = useLoaderData();
  if (!data.text) return <div>no Text Available </div>;

  return (
    <>
      <main className="container m-auto">
        <section>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Editor />
          </React.Suspense>
        </section>
      </main>
    </>
  );
}
