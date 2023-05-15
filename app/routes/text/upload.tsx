import {
  ActionFunction,
  LoaderFunction,
  redirect,
} from "@remix-run/server-runtime";
import {
  Form,
  useActionData,
  useFetcher,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { useRef, useState } from "react";
import { getUserSession } from "~/services/session.server";
import { createText, deleteText, findAllText } from "~/model/text";
import { useId } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Tabs } from "flowbite-react";
import Header from "~/component/Layout/Header";
import { useRecoilValue } from "recoil";
import { UserState } from "~/states";
export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUserSession(request);
  if (!user) return redirect("/");
  let textList = await findAllText();
  if (user.admin !== "true")
    textList = textList.filter((text) => text.userId == user.id);
  return { textList, user };
};
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const textName = formData.get("text-name") as string;
  const textContent = formData.get("text-content") as string;
  const user = await getUserSession(request);
  let res = null;
  if (request.method === "DELETE") {
    const textId = formData.get("textId") as string;
    res = await deleteText(textId);
  }
  if (request.method === "POST") {
    if (!textName || !textContent) return null;
    res = await createText(textName, textContent, user?.id);
  }
  return res;
};

export default function UploadText() {
  const formRef = useRef();
  const data = useLoaderData();
  const user = useRecoilValue(UserState);
  const navigation = useNavigation();
  const [textContent, setTextContent] = useState("");
  const uploadId = useId();
  if (navigation.state !== "idle") {
    formRef.current.reset();
  }
  const [file, setFile] = useState(null);

  const handleChange = async (file) => {
    setFile(file);
    let text: string = await readFileContent(file);
    setTextContent(text);
  };
  function readFileContent(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }
  const fileTypes = ["TXT"];
  if (!user) return <div>login first</div>;
  return (
    <>
      {" "}
      <Header editor={null} />
      <Form method="post" ref={formRef} className="max-w-2xl m-auto pt-20">
        <div className="mb-6">
          <label
            htmlFor={uploadId + "textName"}
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Text name
          </label>
          <input
            type="text"
            id={uploadId + "textName"}
            name="text-name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="title"
            required
          />
        </div>

        <Tabs.Group aria-label="Default tabs" style="default">
          <Tabs.Item title="Type text">
            <div className="mb-6">
              <label
                htmlFor={uploadId + "textContent"}
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Text Content
              </label>
              <textarea
                id={uploadId + "textContent"}
                name="text-content"
                rows={4}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Content"
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
              ></textarea>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Upload Txt">
            <FileUploader handleChange={handleChange} types={fileTypes} />
          </Tabs.Item>
        </Tabs.Group>
        <button
          type="submit"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {navigation.state !== "idle" && navigation.formMethod === "POST"
            ? " Text uploading"
            : "Upload"}
        </button>
      </Form>
      <div className="flex flex-col space-y-3 w-max mx-auto text-lg">
        {data.textList.map((text: { id: number; name: string }) => (
          <EachText text={text} key={text.id} />
        ))}
      </div>
    </>
  );
}

type PropsType = { text: { id: number; name: string } };

function EachText({ text }: PropsType) {
  const deleteFetcher = useFetcher();

  function handleDeleteText(textId: string) {
    let check = confirm("do you wish to delete the text");
    if (check)
      deleteFetcher.submit(
        {
          textId,
        },
        {
          method: "delete",
        }
      );
  }
  return (
    <>
      {" "}
      <div
        className={` py-1 px-2 relative bg-white rounded-lg border-slate-600 border-2
      ${deleteFetcher.formData && " hidden"} dark:text-slate-700`}
      >
        {text.name}
        <button
          type="submit"
          onClick={() => handleDeleteText(text.id)}
          className="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-gray-900"
        >
          x
        </button>
      </div>
    </>
  );
}
