import React, { Suspense, useState, useEffect } from "react";
import { getUserSession } from "~/services/session.server";
import { json, MetaFunction } from "@remix-run/server-runtime";
import type { LoaderFunction, ActionFunction } from "@remix-run/server-runtime";
import { useLoaderData, useFetcher, Link } from "@remix-run/react";
import {
  createPost,
  findPostByTextId,
  findPostByTextIdDemo,
} from "~/model/post";
import { findTextByTextId } from "~/model/text";
import { Button, Textarea } from "flowbite-react";
export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const selectedPost = url.searchParams.get("post");
  let user = await getUserSession(request);
  const textId = parseInt(params.textId);

  if (!textId) throw new Error("not valid textId");

  const domain = new URL(request.url).origin;
  const posts = await findPostByTextId(textId, domain);
  const text = await findTextByTextId(textId, false);

  return json({ user, text: text, posts, selectedPost });
};
export function ErrorBoundary({ error }) {
  console.error(error);
  return <div>ohh Snap! There is an error</div>;
}
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

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let timeStart = Date.now();
  let Obj = Object.fromEntries(formData);
  let id = Math.floor(Math.random() * 2999) + "text";
  let userId = Obj.userId;
  const data = await createPost(
    id,
    "comment",
    "",
    123,
    123,
    1,
    32,
    1,
    Obj.body,
    userId
  );
  let timeEnd = Date.now();

  return {
    data,
    timedif: new Date(timeEnd).getTime() - new Date(timeStart).getTime(),
  };
};

export default function () {
  const data = useLoaderData();

  const postfetcher = useFetcher();
  const postfetcherWithDiscourse = useFetcher();
  const [value, setValue] = useState();
  let timeDif = postfetcher.data?.timedif;
  let timeDif2 = postfetcherWithDiscourse.data?.timedif;

  function handleSubmit(e) {
    e.preventDefault();

    postfetcherWithDiscourse.submit(
      {
        start: 0,
        end: 100,
        selectedTextSegment: "fasdfw fsadf " + Math.random() * 93930,
        textId: 1,
        topic: "test",
        body: value,
        type: "comment",
      },
      {
        method: "post",
        action: "/api/post",
      }
    );
  }
  useEffect(() => {
    const perfObserver = new PerformanceObserver((observedEntries) => {
      const entry: PerformanceEntry =
        observedEntries.getEntriesByType("navigation")[0];
      console.log("pageload time: ", entry.duration);
    });

    perfObserver.observe({
      type: "navigation",
      buffered: true,
    });
  }, []);
  console.log(postfetcherWithDiscourse.data);
  return (
    <>
      <main className="container items-center flex gap-3 m-auto">
        <div className="flex-1 flex items-center flex-col">
          <h1 className="bold">with Discourse</h1>

          {data.posts.map((post) => {
            return <div key={post.id}>{post.content}</div>;
          })}
          {timeDif2 && <span className="text-red-500">{timeDif2} ms</span>}
          <postfetcherWithDiscourse.Form onSubmit={handleSubmit}>
            {data.user ? (
              <>
                <Textarea
                  placeholder="what are your thoughts?"
                  autoFocus
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  name="body"
                  style={{ height: 108 }}
                  className=" w-full bg-gray-50 focus:border-0 focus:outline-0 "
                ></Textarea>
                <input hidden name="userId" defaultValue={data.user.id} />
                <div className="flex justify-end gap-2">
                  <Button color="" className="bg-gray-200 text-black" size="xs">
                    cancel
                  </Button>
                  <Button
                    type="submit"
                    color=""
                    size="xs"
                    className="bg-green-400 text-white"
                  >
                    post
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-red-600">You must login first !</div>
            )}
          </postfetcherWithDiscourse.Form>
        </div>
        <div className="flex-1 flex items-center flex-col">
          <h1 className="bold">withOut Discourse</h1>

          {data.posts.map((post) => {
            return <div key={post.id}>{post.content}</div>;
          })}
          {timeDif && <span className="text-red-500">{timeDif} ms</span>}
          <postfetcher.Form method="post">
            {data.user ? (
              <>
                <Textarea
                  placeholder="what are your thoughts?"
                  autoFocus
                  name="body"
                  style={{ height: 108 }}
                  className=" w-full bg-gray-50 focus:border-0 focus:outline-0 "
                ></Textarea>
                <input hidden name="userId" defaultValue={data.user.id} />
                <div className="flex justify-end gap-2">
                  <Button color="" className="bg-gray-200 text-black" size="xs">
                    cancel
                  </Button>
                  <Button
                    type="submit"
                    color=""
                    size="xs"
                    className="bg-green-400 text-white"
                  >
                    post
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-red-600">You must login first !</div>
            )}
          </postfetcher.Form>
        </div>
      </main>
    </>
  );
}
