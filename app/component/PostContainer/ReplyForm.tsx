import { useFetcher, useLoaderData } from "@remix-run/react";
import { useRef, useEffect, useState } from "react";
import TextArea from "../UI/TextArea";
import { Button } from "../UI/Button";

type ReplyFormPropsType = {
  closeReply: () => void;
  topicId: number;
  updateReplyCount: () => void;
};

export default function ReplyForm({
  closeReply,
  topicId,
  updateReplyCount,
}: ReplyFormPropsType) {
  const postFetcher = useFetcher();
  const textareaRef = useRef(null);
  const loaderData = useLoaderData();
  const [textArea, setTextArea] = useState("");
  useEffect(() => {
    if (postFetcher.type === "done") {
      updateReplyCount();
      closeReply();
    }
  }, [postFetcher.formData, loaderData.posts, topicId]);
  if (postFetcher.formData) {
    if (textareaRef.current) textareaRef.current.value = "";
  }
  return (
    <div className="flex justify-between mt-1">
      <div
        style={{
          borderLeft: "4px solid #e5e7eb",
          height: 180,
        }}
      ></div>
      <postFetcher.Form
        action="/api/reply"
        method="post"
        className="flex w-11/12 flex-col justify-center"
        style={{
          opacity: postFetcher.state !== "idle" ? 0.5 : 1,
          cursor: postFetcher.state !== "idle" ? "not-allowed" : "auto",
        }}
      >
        <input hidden defaultValue={topicId} name="topicId" />
        <TextArea
          name="postString"
          required={true}
          placeholder="Write your reply here ..."
          style={{ maxHeight: 108 }}
          autoFocus
          id="textArea"
          ref={(ref) => (textareaRef.current = ref)}
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        />
        <div className="flex justify-end gap-2 mt-2">
          <Button onClick={closeReply} type="reset" label="close" />
          <Button
            type="submit"
            disabled={textArea === "" || postFetcher.state !== "idle"}
            label={
              postFetcher.state === "submitting"
                ? "submiting"
                : postFetcher.state === "loading"
                ? "post created"
                : "respond"
            }
          />
        </div>
      </postFetcher.Form>
    </div>
  );
}
