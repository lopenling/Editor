import { fullSearch } from '~/lib';
import { db } from '~/services/db.server';
import {  Version } from '@prisma/client';
export async function getPageWithId(id: string) {
  try {
    let page = db.page.findFirst({
      where: {
        id,
      },
      include: {
        text: {
          include: {
            Page: true,
          },
        },
      },
    });
    return page;
  } catch (e) {
    console.log(e);
  }
}
export async function getVersions(textId: number, order: number) {
  try {
    const pages = await db.page.findMany({
      where: {
        textId,
      },
      select: {
        version: true,
      },
    });
    const versionCountMap: Record<string, number> = {};

    pages.forEach((page) => {
      if(!page.version) return;
      if (versionCountMap.hasOwnProperty(page.version)) {
        versionCountMap[page.version]++;
      } else {
        versionCountMap[page.version] = 1;
      }
    });

    const versionsWithCount = Object.entries(versionCountMap).map(([version, count]) => ({ version, count }));
    return versionsWithCount;
  } catch (e) {
    console.log(e);
    return []; // Return an empty array if an error occurs
  }
}

export async function getPage(textId: number, order: number,version:Version|null) {
  try {
    let where = typeof version==='string' ? { textId, order, version } : { textId, order };
    let pageWhere = version ? { version } : {};
    let page = db.page.findFirst({
      where,
      include: {
        text: {
          include: {
            Page: {
              where: pageWhere,
             select: {
                id: true,
               order: true,
                version:true
             }
            },
          },
        },
        Post: {
          select: {
           id: true,
          }
        },
      },
    });
    return page;
  } catch (e) {
    console.log(e);
  }
}
export async function getPageId(textId: number, order: number) {
  try {
    let page = await db.page.findFirst({
      where: {
        textId,
        order,
      },
    });
    return page?.id;
  } catch (e) {
    console.log(e);
  }
}



export async function searchPages(search_term = '') {
  try {
    const textList = await db.page.findMany({
      include: {
        text: true,
      },
    });
    let results = fullSearch(textList, search_term);
    let groupedData = [];

    for (const item of results) {
      const { textId } = item;
      const existingGroup = groupedData.find((group) => group.textId === textId);
      if (existingGroup) {
        existingGroup.results.push(item);
      } else {
        groupedData.push({
          textId: textId,
          results: [item],
          textName:item.name
        });
      }
    }
    return Object.values(groupedData).map((value) => ({
      results: value.results,
      textId: value.textId,
    }));
  } catch (e: any) {
    throw new Error('error finding text with name' + e.message);
  }
}
export async function updatePage(pageId: string, content: string) {
  try {
    let res = db.page.update({
      data: {
        content,
      },
      where: {
        id: pageId,
      },
    });
    return res;
  } catch (e: any) {
    throw new Error('update text error' + e.message);
  }
}
