import React, { Suspense } from "react";
import { getUserSession } from "~/services/session.server";
import {
  ActionFunction,
  json,
  MetaFunction,
  redirect,
} from "@remix-run/server-runtime";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { findUserByUsername } from "~/model/user";
import { findPostByTextId } from "~/model/post";
import { findTextByTextId } from "~/model/text";
import Editor from "~/component/EditorContainer/Editor";
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
  const domain = new URL(request.url).origin;
  const [posts, text] = await Promise.all([
    findPostByTextId(textId, domain),
    findTextByTextId(textId, false),
  ]);
  const data = {
    user: userInfo,
    text: text,
    posts,
  };
  return json(data, {
    status: 200,
  });
};

export const meta: MetaFunction = ({ data }) => {
  let dataName = data?.text?.name;
  let title = dataName ? dataName : "text";
  return {
    title,
  };
};
export function links() {
  return [
    {
      rel: "icon",
      href: "https://lopenling-app.openpecha.workers.dev/favicon.png",
      type: "image/png",
    },
  ];
}
export default function () {
  const data = useLoaderData();
  const textFetcher = useFetcher();
  React.useEffect(() => {
    if (textFetcher.type === "init")
      textFetcher.load(`/api/text?textId=${data.text?.id}`);
  }, []);
  let content = React.useMemo(() => {
    return textFetcher.data?.content.replace(/\n/g, "<br>");
  }, [textFetcher.data]);
  return (
    <>
      <main className="container m-auto">
        <Editor content={content} />
      </main>
    </>
  );
}
