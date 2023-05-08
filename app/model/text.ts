// find text by textId

import { db } from "~/db.server";

// get all text

export async function findAllText(id = true, name = true, content = false) {
  try {
    let text = await db.text.findMany({
      select: {
        id,
        name,
        content,
        userId: true,
      },
    });
    return text;
  } catch (e) {
    throw new Error("fetching text error" + e.message);
  }
}
export async function searchTextWithName(
  search_term = "",
  id = true,
  name = true,
  content = true
) {
  try {
    const textList = await db.text.findMany({
      where: {
        name: {
          contains: search_term,
          mode: "insensitive",
        },

        content: {
          contains: search_term,
          mode: "insensitive",
        },
      },
      select: {
        content,
        id,
        name,
      },
    });
    let results = {};
    const extract_length = 60;
    const left = parseInt((extract_length - search_term.length) / 2);
    const delimiters = "།་ ";

    let delimiter_regex = new RegExp(`[${delimiters}]`, "g");
    const max_results = 0;
    for (let text of textList) {
      const content_length = text.content.length;
      const textWithNewlines = text.content.replace(
        /<br\s*\/?\s*(class\s*=\s*['"]\S*['"])?\s*>/gi,
        "\n"
      );
      let content = textWithNewlines.replace(/(<([^>]+)>)/gi, "");
      let title = text.name;
      let contentMatch = content.matchAll(new RegExp(search_term, "g"));
      let titleMatch = title.matchAll(new RegExp(search_term, "g"));
      for (let m of titleMatch)
        if (!results[text.id]) {
          results[text.id] = {
            name: text.name,
            results: [],
            total: 0,
            extra: false,
          };
        }
      for (let m of contentMatch) {
        if (!results[text.id]) {
          results[text.id] = {
            name: text.name,
            results: [],
            total: 0,
            extra: false,
          };
        }
        if (
          max_results == 0 ||
          (max_results > 0 && results[text.id]["total"] < max_results)
        ) {
          let start = m.index - left;
          if (start < 0) {
            start = 0;
          }
          let end = start + extract_length;
          if (end > content_length) {
            end = content_length;
          }
          let extract = content.substring(start, end);
          let delimter_matches = Array.from(
            extract.matchAll(delimiter_regex),
            (m) => m.index
          );

          if (delimter_matches.length > 0) {
            const first_match = delimter_matches[0];
            start += first_match;
          }

          if (delimter_matches.length > 1) {
            const last_match = delimter_matches[delimter_matches.length - 1];
            end = start + last_match - delimter_matches[0];
          } else {
            end = extract.length;
          }

          extract = extract.substring(0, end);
          results[text.id]["results"].push([m.index, extract]);
          results[text.id]["total"] += 1;
        }

        if (results[text.id]["total"] == max_results) {
          results[text.id]["extra"] = true;
          break;
        }
      }
    }
    return results;
  } catch (e) {
    throw new Error("error finding text with name" + e.message);
  }
}
// find text by textId
export async function findTextByTextId(id: number, content: boolean = false) {
  try {
    const text = await db.text.findUnique({
      where: {
        id,
      },
      select: {
        content,
        id: true,
        name: true,
        userId: true,
      },
    });
    return text;
  } catch (e) {
    return "cannot find text with error " + e.message;
  }
}
export async function getTextContent(id: number) {
  try {
    const text = await db.text.findUnique({
      where: {
        id,
      },
      select: {
        content: true,
      },
    });
    return text;
  } catch (e) {
    return "cannot find text with error " + e.message;
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
  } catch (e) {
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
  } catch (e) {
    throw new Error("delete text error" + e.message);
  }
}

//update text
export async function updateText(id: number, content: string) {
  try {
    let res = db.text.update({
      data: {
        content,
      },
      where: {
        id,
      },
    });
    return res;
  } catch (e) {
    throw new Error("update text error" + e.message);
  }
}
