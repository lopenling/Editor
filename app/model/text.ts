// find text by textId

import { db } from '~/services/db.server';
// get all text
export async function getText(id: string) {
  try {
    let text = await db.text.findUnique({
      where: {
        id:parseInt(id),
      },
      select: {
        id: true,
        name: true,
        allow_post:true
      }
    });
    return text;
  }
  catch (e: any) { 
    throw new Error('fetching text error' + e.message);
  }
}
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
    throw new Error('fetching text error' + e.message);
  }
}
export async function findLatestText() {
  try {
    let text = await db.text.findMany({
      select: {
        id: true,
        name: true,
        Page: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return {
      count: text.length,
      latestTexts: text.slice(0, 4),
    };
  } catch (e) {
    throw new Error('fetching text error' + e.message);
  };
}
export async function findAllTextWithDetail() {
  try {
    let text = await db.text.findMany({
      include:{
        author: true,
        Page:true
      }
    });
    return text;
  } catch (e: any) {
    throw new Error('fetching text error' + e.message);
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
    if (text === null) throw new Error('text not available');
    return text;
  } catch (e: any) {
    throw new Error('cannot find text with error ' + e.message);
  }
}


//delete text
export async function deleteText(id: string) {
  try {
    let res =await db.text.delete({
      where: {
        id: parseInt(id),
      },
    });
    return res;
  } catch (e: any) {
    throw new Error('delete text error' + e.message);
  }
}
