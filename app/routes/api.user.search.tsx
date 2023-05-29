import { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { UserType } from "~/model/type";
import { getAllUser } from "~/model/user";

export let loader: LoaderFunction = async ({ request }) => {
  const userName = new URL(request.url).searchParams.get("filterUser") ?? "";

  if (userName === "") return json([]);
  const userList: UserType[] = await getAllUser();

  const fetchData = userList.filter((user: UserType) =>
    user?.username.toLowerCase().includes(userName.toLowerCase())
  );
  return json(fetchData);
};
