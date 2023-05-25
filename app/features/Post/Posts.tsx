import { Editor } from "@tiptap/react";
import { Suspense, memo } from "react";
import Post from "./Post.client";
import { useRecoilValue } from "recoil";
import { filterDataState, showLatest } from "~/states";
import { FilterType, PostType, ReplyType, UserType } from "~/model/type";
import Filter from "./Filter";
import { Skeleton } from "~/component/UI";
import { ClientOnly } from "remix-utils";
import { useAsyncValue } from "@remix-run/react";

type PostPropsType = {
  editor: Editor;
};

function Posts({ editor }: PostPropsType) {
  let filters = useRecoilValue(filterDataState);
  let isLatest = useRecoilValue(showLatest);
  let posts = useAsyncValue();
  if (!posts) {
    return <Skeleton number={4} height={80} />;
  }
  let lists = applyFilter(posts, filters, isLatest);

  return (
    <>
      <ClientOnly fallback={<></>}>{() => <Filter />}</ClientOnly>
      <div
        className=" flex flex-col relative overflow-y-auto pr-3 "
        style={{
          height: "min-content",
          maxHeight: "80vh",
          fontFamily: "sans-serif",
        }}
      >
        <Suspense fallback="loading">
          <ClientOnly>
            {() => {
              return (
                lists?.length > 0 &&
                lists?.map((post: PostType) => {
                  return (
                    <Post key={post.id} post={post} isOptimistic={false} />
                  );
                })
              );
            }}
          </ClientOnly>
        </Suspense>
      </div>
    </>
  );
}

const applyFilter = <T extends PostType>(
  list: T[],
  filter: FilterType,
  isLatest: boolean
) => {
  if (filter.type && filter.type !== "all")
    list = list.filter((l) => {
      return l.type === filter.type;
    });
  if (filter.user?.length)
    list = list.filter((l) => {
      return filter.user?.includes(l?.creatorUser?.username);
    });
  if (filter.date.startDate)
    list = list.filter((l) => {
      const startDate = filter.date.startDate
        ? new Date(filter.date.startDate)
        : null;
      const endDate = filter.date.endDate
        ? new Date(filter.date.endDate)
        : null;

      if (startDate && endDate) {
        const createdAt = new Date(l.created_at);
        return createdAt > startDate && createdAt < endDate;
      }

      return false;
    });
  if (filter.solved && filter.solved !== "both")
    list = list.filter((l) => {
      return l.isSolved === (filter.solved === "solved");
    });
  if (list.length > 0) {
    list.sort(function (a, b) {
      let c: Date = new Date(a.created_at);
      let d: Date = new Date(b.created_at);
      return !isLatest ? c.getTime() - d.getTime() : d.getTime() - c.getTime();
    });
  }
  return list;
};

export default memo(Posts);
