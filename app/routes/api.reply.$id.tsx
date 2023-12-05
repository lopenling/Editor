import { LoaderFunction } from '@remix-run/server-runtime';
import { json } from 'react-router';
import { getposts } from '~/services/discourseApi';
import { findPostByTopicId } from '~/model/post';
import { findReplyByPostId } from '~/model/reply';

export const loader: LoaderFunction = async ({ params }) => {
  const id = parseInt(params?.id!);
  const post = await findPostByTopicId(id);
  let posts: any[] = [];
  const postsData = await getposts(id);
  const replyList = await findReplyByPostId(post?.id);

  let postsList = postsData?.post_stream?.posts;
  if (!replyList[0]?.post_id) {
    postsList?.shift();
  }
  posts = combineArrays(replyList, postsList);

  return json({
    posts,
  });
};

function combineArrays(array1: any[], array2: any[]): any[] {
  if (array1.length < 1 || array2.length < 1) return array2 || [];
  const idMap = new Map(array1?.map((obj) => [String(obj.id), obj]));
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
