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
  // console.log(posts);
  posts = combineArrays(replyList, posts)
    .slice(1)
    .sort((a, b) => {
      if (a.isAproved === b.isAproved) {
        return 0;
      }
      return a.isAproved ? -1 : 1;
    });
  console.log(posts);
  return json({
    posts,
  });
};
function combineArrays(array1: [], array2: []) {
  return array2.reduce((acc, val) => {
    const matchingObject = array1.find((obj) => val.id == obj.id);
    if (matchingObject) {
      acc.push({ ...val, ...matchingObject });
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}
