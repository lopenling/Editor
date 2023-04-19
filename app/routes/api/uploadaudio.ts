import { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import * as AWS from "aws-sdk";
import { S3 } from "aws-sdk";
import { Readable } from "stream";
import { createPost } from "~/model/post";
import { findTextByTextId } from "~/model/text";
import { createThread } from "~/services/discourseApi";
import { getUserSession } from "~/services/session.server";

// Replace these values with your own
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const BUCKET_NAME = process.env.BUCKET_NAME;

// Set up the S3 client with your AWS credentials
const s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

export let action: ActionFunction = async ({ request }) => {
  const contentType = request.headers.get("content-type");
  let user = await getUserSession(request);
  if (!contentType || !contentType.includes("multipart/form-data")) {
    return json({ error: "Invalid content type" }, { status: 400 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const threadId = formData.get("threadId") as string;
  const textId = formData.get("textId") as string;
  const selectionSegment = formData.get("selectionSegment") as string;
  const type = formData.get("type") as string;
  const textName = formData.get("textName") as string;
  let parent_category_id = process.env.DISCOURSE_QA_CATEGORY_ID;

  const name = file?._name;
  if (!file) {
    return json({ error: "No file found" }, { status: 400 });
  }

  const KEY_NAME = `comments/audio/${name}`;

  const uploadParams: S3.Types.PutObjectRequest = {
    Bucket: BUCKET_NAME,
    Key: KEY_NAME,
    Body: Readable.from(file.stream()),
  };

  try {
    await s3.upload(uploadParams).promise();
    let url = `https://lopenling.s3.amazonaws.com/${KEY_NAME}`;
    let text = await findTextByTextId(parseInt(textId));
    const data = await createThread(
      user.username,
      text.name,
      selectionSegment,
      url,
      parent_category_id,
      text.id
    );
    const createPosts = await createPost(
      type,
      user.avatarUrl,
      data["topic_id"],
      data["id"],
      threadId,
      parseInt(textId),
      url,
      user.id
    );
    console.log(createPosts);
    return json({
      message: `Successfully uploaded ${name} file to ${BUCKET_NAME}/${KEY_NAME}`,
    });
  } catch (error) {
    return json({ error: "Error uploading file" }, { status: 500 });
  }
};
