import React, { Suspense } from "react";
import { getUserSession } from "~/services/session.server";
import {
  ActionFunction,
  json,
  MetaFunction,
  redirect,
} from "@remix-run/server-runtime";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "@remix-run/react";
import { findUserByUsername } from "~/model/user";
import { findPostByTextId } from "~/model/post";
import { findTextByTextId } from "~/model/text";
import Editor from "~/component/Editor";
export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await getUserSession(request);

  const textId = parseInt(params.textId);
  if (!textId) throw new Error("not valid textId");
  let userInfo = null;
  if (user?.email) {
    try {
      let findUserInDatabase = await findUserByUsername(user.username);
      userInfo = { ...findUserInDatabase, ...user };
    } catch (e) {
      console.log(e);
    }
  }

  const [posts, text] = await Promise.all([
    findPostByTextId(textId),
    findTextByTextId(textId, true),
  ]);

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
        <Editor />
      </main>
    </>
  );
}
