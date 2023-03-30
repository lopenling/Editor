import { useActionData, Form } from "@remix-run/react";
export default function FileUpload() {
  const actionData = useActionData();

  return (
    <div className="flex flex-col justify-center items-center mt-3">
      {actionData?.error && (
        <span className="text-red-600">{actionData.error}</span>
      )}
      <Form method="post" encType="multipart/form-data">
        <label>
          Select file: <input type="file" name="file" />
        </label>
        <input hidden name="type" defaultValue="composer" />
        <button type="submit">Upload</button>
      </Form>
      {actionData?.data && (
        <span className="text-green-500">{actionData?.data?.url}</span>
      )}
    </div>
  );
}
