import React, { Suspense } from "react";
import { getUserSession } from "~/services/session.server";
import { defer, MetaFunction } from "@remix-run/server-runtime";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData, useFetcher, Link } from "@remix-run/react";
import { findPostByTextId } from "~/model/post";
import { findTextByTextId } from "~/model/text";
import Editor from "~/component/EditorContainer/Editor";
export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const selectedPost = url.searchParams.get("post");
  let user = await getUserSession(request);
  const textId = parseInt(params.textId);

  if (!textId) throw new Error("not valid textId");

  const domain = new URL(request.url).origin;
  const posts = findPostByTextId(textId, domain);
  const text = await findTextByTextId(textId, false);

  return defer({ user, text: text, posts, selectedPost });
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

  if (data.text === null)
    return (
      <div className="text-red-700 flex gap-2 items-center justify-center capitalize">
        <p>text not available</p>
        <Link className="text-blue-600 underline" to="/">
          go back
        </Link>
      </div>
    );

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
