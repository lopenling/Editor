import { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { getAllUser } from "~/model/user";

export let loader: LoaderFunction = async ({ request }) => {
  const username = new URL(request.url).searchParams.get("username") ?? "";

  if (username === "") return json([]);
  const userList = await getAllUser();
  const fetchData = userList.filter((user) =>
    user.username.toLowerCase().includes(username.toLowerCase())
  );
  return json(fetchData);
};
