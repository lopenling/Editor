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
  let userListWithAvatar = await Promise.all(
    fetchData.map(async (l) => {
      let url = DISCOURSE_SITE + `/u/${l.username}.json`;
      let result = await fetch(url);
      let res = await result.json();
      let avatar = res?.user?.avatar_template;
      return { ...l, avatar };
    })
  );
  return json(userListWithAvatar);
};
