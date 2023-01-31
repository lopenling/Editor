import { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { getposts } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";
import { db } from "~/db.server";

export const loader: LoaderFunction = async ({ params, request }) => {
  const user = await getUserSession(request);
  const topicId = params.topicId;
  const post = await db.post.findFirst({
    where: {
      topic_id: parseInt(topicId),
    },
  });
  let posts: [] = [];
  let replyList: [] = [];
  const data = getposts(topicId, user?.username);
  const replyListPromise = db.reply.findMany({
    where: {
      post_id: post.id,
    },
    include: {
      likedBy: true,
    },
  });
  let result = await Promise.all([data, replyListPromise]);
  posts = result[0].post_stream?.posts;
  replyList = result[1];
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
