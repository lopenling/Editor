import { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { getposts } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";
import { findPostByTopicId } from "~/model/post";
import { findReplyByPostId } from "~/model/reply";

export const loader: LoaderFunction = async ({ params, request }) => {
  const user = await getUserSession(request);
  const topicId = parseInt(params.topicId);
  const post = await findPostByTopicId(topicId);
  let posts: [] = [];
  const data = getposts(topicId, user?.username);
  const replyListPromise = findReplyByPostId(post.id);
  let [postsData, replyList] = await Promise.all([data, replyListPromise]);
  posts = postsData.post_stream?.posts;
  posts = combineArrays(posts, replyList);
  return json({ posts, replyList });
};

function combineArrays(array1: [], array2: []) {
  return array1.reduce((acc, val) => {
    const matchingObject = array2.find((obj) => obj.id == val.id);
    if (matchingObject) {
      acc.push({ ...val, ...matchingObject });
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}
