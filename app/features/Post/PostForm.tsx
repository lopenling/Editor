import { Fetcher, useFetcher, useOutletContext } from "@remix-run/react";
import { useState, useEffect, useRef } from "react";
import Post from "./Post.client";
import { selectedTextOnEditor } from "~/states";
import { useRecoilState } from "recoil";
import { Editor } from "@tiptap/react";
import AudioRecorder from "../Media/AudioRecorder.client";
import { AudioPlayer } from "../Media";
import { Button, TextArea, MustLoggedIn as LogInMessage } from "~/component/UI";
import { useFetcherWithPromise } from "~/lib";
import { FormWithAudio } from "./component/FormWithAudio";

const PostForm = () => {
  const createPost = useFetcherWithPromise();
  const { user }: { user: any } = useOutletContext();
  const [selection, setSelection] = useRecoilState(selectedTextOnEditor);
  let isPosting = createPost.formData && createPost.formData.get("body") !== "";
  if (isPosting) {
    return (
      <Post
        post={{
          audioUrl: "",
          creatorUser: user,
          created_at: new Date(Date.now()),
          likedBy: [],
          replyCount: 0,
          id: "random",
          isSolved: false,
          content: createPost?.formData?.get("body") as string,
          topic_id: 0,
          type: createPost?.formData?.get("type") as "question" | "comment",
          threadId: "",
        }}
        isOptimistic={true}
      />
    );
  }
  if (selection.type === "") return null;
  return (
    <section className=" shadow rounded p-3 mb-3">
      <div className="flex items-start justify-between">
        <div className="text-base font-medium leading-tight text-gray-900 dark:text-gray-300 mb-3 capitalize">
          {selection.type === "question" ? "ask question" : "new comment"}
        </div>
        <div className="font-bold text-gray-400 text-sm">{0}</div>
      </div>

      {user ? (
        <div aria-label="Default tabs ">
          <FormWithAudio fetcher={createPost} type="post" post={null} />
        </div>
      ) : (
        <LogInMessage />
      )}
    </section>
  );
};

export default PostForm;
