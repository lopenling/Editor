import { useFetcher, useLoaderData } from "@remix-run/react";
import { Button, Textarea } from "flowbite-react";
import { useRef, useEffect, useState } from "react";

type ReplyFormPropsType = {
  closeReply: () => void;
  topicId: number;
};

export default function ReplyForm({ closeReply, topicId }: ReplyFormPropsType) {
  const postFetcher = useFetcher();
  const textareaRef = useRef(null);
  const loaderData = useLoaderData();
  const [textArea, setTextArea] = useState("");
  useEffect(() => {
    if (postFetcher.type === "done") closeReply();
  }, [postFetcher.submission, loaderData.posts, topicId]);
  if (postFetcher.submission) {
    if (textareaRef.current) textareaRef.current.value = "";
  }
  return (
    <div className="flex justify-between mb-2">
      <div style={{ borderLeft: "6px solid #e5e7eb", height: 180 }}></div>
      <postFetcher.Form
        action="/api/postReply"
        method="post"
        className="flex w-11/12 flex-col justify-center"
      >
        <input hidden defaultValue={topicId} name="topicId" />
        <Textarea
          name="postString"
          required={true}
          placeholder="Write your reply here ..."
          className="flex-1"
          style={{ maxHeight: 108 }}
          autoFocus
          id="textArea"
          ref={(ref) => (textareaRef.current = ref)}
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        />
        <div className="flex justify-end gap-2 mt-2">
          <Button
            color=""
            size="xs"
            onClick={closeReply}
            className="bg-gray-300 text-black"
            type="reset"
          >
            cancel
          </Button>
          <Button
            color=""
            size="xs"
            className="bg-green-400 text-white"
            type="submit"
            disabled={textArea === ""}
          >
            respond
          </Button>
        </div>
      </postFetcher.Form>
    </div>
  );
}
