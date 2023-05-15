import { LoaderFunction, LoaderArgs } from "@remix-run/server-runtime";
import { json } from "react-router";
import { getposts } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";
import { findPostByTopicId } from "~/model/post";
import { findReplyByPostId } from "~/model/reply";

export const loader: LoaderFunction = async ({
  params,
  request,
}: LoaderArgs) => {
  const id = parseInt(params.id);
  const post = await findPostByTopicId(id);
  let posts: [] = [];
  const data = getposts(id);
  const replyListPromise = findReplyByPostId(post.id);
  let [postsData, replyList] = await Promise.all([data, replyListPromise]);
  let postsList = postsData.post_stream?.posts;
  posts = combineArrays(replyList, postsList);

  return json({
    posts,
  });
};

function combineArrays(array1: any[], array2: any[]): any[] {
  const idMap = new Map(array1.map((obj) => [String(obj.id), obj]));
  return array2
    .map((obj) => {
      const matchingObject = idMap.get(String(obj.id));
      return matchingObject ? { ...obj, ...matchingObject } : obj;
    })
    .slice(1)
    .sort((a, b) => {
      if (a.is_approved === b.is_approved) {
        return 0;
      }
      return a.is_approved ? -1 : 1;
    });
}
