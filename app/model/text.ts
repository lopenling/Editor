// find text by textId

import { db } from "~/services/db.server";
// get all text

export async function findAllText(id = true, name = true, content = false) {
  try {
    let text = await db.text.findMany({
      select: {
        id,
        name,
        userId: true,
        author: true,
      },
    });
    return text;
  } catch (e: any) {
    throw new Error("fetching text error" + e.message);
  }
}

// find text by textId
export async function findTextByPageId(pageId: string) {
  try {
    const text = await db.page.findFirst({
      where: {
        id: pageId,
      },
      select: {
        content: true,
      },
    });
    if (text === null) throw new Error("text not available");
    return text;
  } catch (e: any) {
    throw new Error("cannot find text with error " + e.message);
  }
}

//create text
export async function createText(name: string, content: string, id: string) {
  try {
    let res = await db.text.create({
      data: {
        name,
        content,
        userId: id,
      },
    });
    return res;
  } catch (e: any) {
    throw new Error("create text error" + e.message);
  }
}
//delete text
export async function deleteText(id: string) {
  try {
    let res = db.text.delete({
      where: {
        id: parseInt(id),
      },
    });
    return res;
  } catch (e: any) {
    throw new Error("delete text error" + e.message);
  }
}
