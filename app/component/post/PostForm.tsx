import { useFetcher, useOutletContext } from "@remix-run/react";
import { useState, useEffect } from "react";
import Post from "./Post";
import { selectedTextOnEditor } from "~/states";
import { useRecoilState } from "recoil";
import { Editor } from "@tiptap/react";
import { v4 as uuidv4 } from "uuid";
import AudioRecorder from "../media/AudioRecorder";
import AudioPlayer from "../media/AudioPlayer";
import { Button } from "../UI/Button";
import TextArea from "../UI/TextArea";

const PostForm = () => {
  const [selection, setSelection] = useRecoilState(selectedTextOnEditor);
  const [audio, setAudio] = useState({ tempUrl: "", blob: null });
  const [error, setError] = useState("");
  const data = useOutletContext();
  const createPost = useFetcher();
  const [body, setBody] = useState("");
  const { user }: { user: any } = useOutletContext();
  let isFormEmpty = body.length < 5;
  useEffect(() => {
    setBody("");
    setAudio({ tempUrl: "", blob: null });
    setError("");
  }, [selection]);
  let isPosting = createPost.formData && createPost.formData.get("body") !== "";
  const { editor }: { editor: Editor } = useOutletContext();
  function validator() {
    let lengthOfSelection = selection.end - selection?.start;
    let errormessage = "";
    if (audio.tempUrl !== "" && isFormEmpty) {
      errormessage = "ERROR : describe the audio";
    } else if (isFormEmpty) {
      errormessage = "ERROR : write more than 5 character";
    } else if (lengthOfSelection > 254) {
      errormessage = "ERROR : selecting more than 255 letter not allowed";
    } else if (body.length > 250) {
      errormessage = "ERROR : content more than 255 letter not allowed";
    } else {
      errormessage = "";
    }
    return errormessage;
  }
  function handleSubmit(e) {
    e.preventDefault();
    let errormessage = validator();
    if (errormessage && errormessage !== "") {
      setError(errormessage);
      return null;
    }
    let id = null;
    if (!editor.isActive("post")) {
      id = uuidv4();
    } else {
      id = editor.getAttributes("post")?.id;
    }
    let item = {
      threadId: id,
      selectionSegment: selection.content,
      textId: data?.text?.id,
      topic: data?.text?.name,
      body: body,
      type: selection.type,
    };
    let blob = audio.blob;
    var form_data = new FormData();
    if (blob) {
      form_data.append("file", blob, `text-${data?.text?.id}-${uuidv4()}.wav`);
    }
    for (var key in item) {
      form_data.append(key, item[key]);
    }
    if (selection)
      createPost.submit(form_data, {
        method: "post",
        action: "/api/post",
        encType: "multipart/form-data",
      });
    setSelection({ ...selection, type: "" });
    editor.commands.setPost({
      id,
    });
  }
  if (isPosting) {
    return (
      <Post
        creatorUser={user}
        time="now"
        likedBy={[]}
        replyCount={0}
        id={"random"}
        isSolved={false}
        postContent={createPost?.formData.get("body") as string}
        topicId={0}
        type={createPost.formData.get("type") as "question" | "comment"}
        isOptimistic={true}
        threadId={""}
      />
    );
  }

  if (createPost.data?.error && !selection)
    return <div className="text-red-800">{createPost.data.error.message} </div>;
  if (selection.type === "") return null;

  return (
    <section className=" shadow rounded p-3">
      <div className="flex items-start justify-between">
        <div className="text-base font-medium leading-tight text-gray-900 dark:text-gray-300 mb-3 capitalize">
          {selection.type === "question" ? "ask question" : "new comment"}
        </div>
        <div className="font-bold text-gray-400 text-sm">{body?.length}</div>
      </div>

      {user ? (
        <div aria-label="Default tabs ">
          <createPost.Form className="flex flex-col gap-3">
            <>
              <TextArea
                placeholder="what are your thoughts?"
                autoFocus
                name="body"
                onChange={(e) => setBody(e.target.value)}
                style={{ height: 108 }}
              />
              {audio.tempUrl !== "" ? (
                <>
                  <div className="w-full flex items-center gap-3 ">
                    <AudioPlayer src={audio.tempUrl} />
                    <div onClick={() => setAudio({ tempUrl: "", blob: null })}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z"
                          className="fill-gray-200"
                        />
                      </svg>
                    </div>
                  </div>
                </>
              ) : null}
              {error && error !== "" && (
                <div className="font-sm text-red-500">{error}</div>
              )}
              <div className="flex justify-between items-center">
                {audio.tempUrl === "" ? (
                  <AudioRecorder setAudio={setAudio} />
                ) : (
                  <div />
                )}

                <div className="flex justify-end gap-2">
                  <Button
                    type="reset"
                    onClick={() => {
                      setSelection({ ...selection, type: "" });
                      setAudio({ tempUrl: "", blob: null });
                    }}
                    label="cancel"
                  />
                  <Button onClick={handleSubmit} type="submit" label="post" />
                </div>
              </div>
            </>
          </createPost.Form>
        </div>
      ) : (
        <div className="text-red-600">You must login first !</div>
      )}
    </section>
  );
};

export default PostForm;
