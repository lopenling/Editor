import { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { db } from "~/db.server";

export let loader: LoaderFunction = async ({ request }) => {
  const username = new URL(request.url).searchParams.get("username") ?? "";

  if (username === "") return json([]);
  const userList = await db.user.findMany();
  const fetchData = userList.filter((user) =>
    user.username.toLowerCase().includes(username.toLowerCase())
  );
  return json(fetchData);
};
