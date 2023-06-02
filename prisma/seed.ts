import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import datas from "../data/data.json";

let textId = 100;
let textName = "སྙིང་པོའི་ཡི་གེ་བརྒྱ་པའི་བསྲུང་བ་དང་སྡིག་པ་བཤགས་པའི་";
let userId = "7da4392a-bd7e-4f9b-b991-a53d15a3a57a";

function getUserId(name: string) {
  if (name === "narthang") {
    return "08a6a7bb-6877-4fe9-b95a-ba0b3c27c204";
  } else if (name === "chone") {
    return "4d39fbf2-a229-443f-9041-f68ed6353362";
  } else if (name === "peking") {
    return "7da4392a-bd7e-4f9b-b991-a53d15a3a57a";
  } else if (name === "derge") {
    return "a3e238db-65b1-45a7-825b-1fb3f2bbf2ab";
  }
}

async function seedUser() {
  const defaultUsers = [
    {
      id: "7da4392a-bd7e-4f9b-b991-a53d15a3a57a",
      email: "peking@example.com",
      avatarUrl: "https://example.com/avatar1.png",
      isAdmin: false,
      name: "peking",
      username: "peking",
    },
    {
      id: "08a6a7bb-6877-4fe9-b95a-ba0b3c27c204",
      email: "narthang@example.com",
      avatarUrl: "https://example.com/avatar2.png",
      isAdmin: false,
      name: "narthang",
      username: "narthang",
    },
    {
      id: "a3e238db-65b1-45a7-825b-1fb3f2bbf2ab",
      email: "derge@example.com",
      avatarUrl: "https://example.com/avatar2.png",
      isAdmin: false,
      name: "derge",
      username: "derge",
    },
    {
      id: "4d39fbf2-a229-443f-9041-f68ed6353362",
      email: "chone@example.com",
      avatarUrl: "https://example.com/avatar2.png",
      isAdmin: false,
      name: "chone",
      username: "chone",
    },
  ];

  try {
    await prisma.user.createMany({
      data: defaultUsers,
    });
    console.log("Seeding complete!");
  } catch (error) {
    console.error("Error while seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedText() {
  let textData = {
    name: textName,
    id: textId,
    userId: userId,
  };
  try {
    await prisma.text.create({
      data: textData,
    });
    console.log("textData insert success");
  } catch (e) {
    console.log(e);
  }
}

async function seedPage(content: string, order: number) {
  let page = {
    content: content,
    imageUrl: "",
    order: order,
    textId: textId,
  };
  let pageDB = await prisma.page.create({
    data: page,
  });
  console.log("page updated");
  return pageDB.id;
}

async function seedSuggestion() {
  try {
    for (const data of datas) {
      let pageId = await seedPage(data.content, data.order);
      for (let annotation of data["annotation"])
        for (let version of annotation?.versions) {
          let keys = Object.keys(version);
          let values = Object.values(version);
          let key = keys[0];
          let value = values[0];
          let userId = getUserId(key);
          await prisma.suggestion.create({
            data: {
              threadId: annotation.id,
              newValue: value,
              userId: userId!,
              pageId: pageId,
              textId: textId,
            },
          });
          console.log("suggestion update done ");
        }
    }
  } catch (e) {
    console.log(e);
  }
}

seedSuggestion();
// seedUser();
// seedData();
// seedPage();
