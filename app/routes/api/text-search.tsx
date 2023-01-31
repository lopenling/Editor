import { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { db } from "~/db.server";

export let loader: LoaderFunction = async ({ request }) => {
  const searchText = new URL(request.url).searchParams.get("textSearch") ?? "";

  if (searchText === "") return json([]);
  try {
    const textList = await db.text.findMany({
      where: {
        name: {
          contains: searchText,
        },
      },
      select: {
        content: false,
        id: true,
        name: true,
      },
    });

    return json(textList);
  } catch (e) {
    return e;
  }
};
