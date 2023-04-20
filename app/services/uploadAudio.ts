import { json } from "@remix-run/node";
import * as AWS from "aws-sdk";
import { S3 } from "aws-sdk";
import { Readable } from "stream";
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

export let uploadAudio = async (formData) => {
  const file = formData.get("file");

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

    return url;
  } catch (error) {
    throw new Error("Error uploading file");
  }
};
