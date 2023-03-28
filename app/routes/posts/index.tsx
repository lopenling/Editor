import type { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData, Link, Await } from "@remix-run/react";
import { redirect } from "@remix-run/cloudflare";
import { findPostByUser } from "~/model/post";
import { findUserByUsername } from "~/model/user";
import { getUserSession } from "~/services/session.server";
import { timeAgo } from "~/utility/getFormatedDate";
import { SolvedLogo } from "~/component/PostContainer/Reply";
import { defer } from "@remix-run/cloudflare";
import { Suspense } from "react";
import { Spinner } from "flowbite-react";
export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);
  if (!user) redirect("/");
  let userData = await findUserByUsername(user.username);
  let posts = findPostByUser(userData.id);
  return defer({ posts, userData }, { status: 202 });
};

export default function Posts() {
  let data = useLoaderData();
  console.log(data);
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center mt-36">
          <Spinner /> Loading...
        </div>
      }
    >
      <Await resolve={data.posts}>
        {(posts) => <Component posts={posts} user={data.userData} />}
      </Await>
    </Suspense>
  );
}

const Component = ({ posts, user }) => {
  let postCount = posts?.length;
  let likedCount = user?.likedPost.length;
  let answeredCount = posts?.filter((d) => d.Reply.length > 0)?.length;
  let solvedPostCount = posts?.filter((d) =>
    d.Reply.some((d) => d.isAproved)
  )?.length;
  return (
    <div
      style={{ maxWidth: "80vw" }}
      className="container relative flex flex-col md:flex-row  mx-auto bg-white dark:bg-gray-800 xl:px-10"
    >
      <section className="flex-1  self-start relative lg:sticky  top-20">
        <div className="gap-8  items-center px-4 mx-auto max-w-screen-xl  ">
          <div className="text-gray-500 max-h-[80vh] mt-10 sm:text-lg ">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl dark:text-white">
              Your Contribution on Lopenling
            </h2>
            <p className="mb-8 font-light lg:text-xl dark:text-gray-400">
              list of all the post created by you
            </p>
            <div className="grid gap-6 lg:grid-cols-1 dark:border-gray-700 sm:grid-cols-2">
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {postCount}
                  </p>
                  <p className="font-light text-gray-500 dark:text-gray-400">
                    Total Post
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {answeredCount}
                  </p>
                  <p className="font-light text-gray-500 dark:text-gray-400">
                    Number of liked replies on your post
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {likedCount}
                  </p>
                  <p className="font-light text-gray-500 dark:text-gray-400">
                    Number of post Liked by you
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {solvedPostCount}
                  </p>
                  <p className="font-light text-gray-500 dark:text-gray-400">
                    Solved question raised by you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex-1 relative mt-10 h-[200vh]">
        <div className=" mx-auto min-h-screen ">
          <div className="grid grid-cols-1   gap-y-12 gap-x-16 ">
            <div className="space-y-8">
              <h3
                className="text-2xl fixed top-32 right-0 md:inset-auto font-bold text-center text-gray-900 dark:text-white "
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                All your questions and Comments across Lopenling
              </h3>

              <div>
                {posts.map((post) => {
                  return (
                    <div
                      key={post.id}
                      className="flex flex-col gap-4 sm:flex-row sm:items-stretch"
                    >
                      <p className="w-auto text-sm font-medium text-gray-500 sm:text-right sm:w-32 dark:text-gray-400 shrink-0">
                        {timeAgo(post.created_at)}
                      </p>
                      <div className="hidden w-px bg-gray-200 sm:shrink-0 dark:bg-gray-700 sm:block"></div>
                      <div className="flex-1 pb-8 space-y-4 sm:pb-12">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white flex space-x-2">
                          <Link
                            to={`/texts/${post.text_id}/posts/?post=${post.id}`}
                            className="hover:underline"
                          >
                            {post.content}
                          </Link>
                          {post.Reply.some((l) => l.isAproved) && (
                            <SolvedLogo isSolved={true} />
                          )}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
                          {post.type}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
