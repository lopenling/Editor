import { db } from "~/services/db.server";

//find all user
export async function getAllUser() {
  try {
    let user = await db.user.findMany();
    return user;
  } catch (e) {
    return e;
  }
}
export async function isUserPresent(username: string) {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    include: {
      likedPost: true,
      preference: true,
    },
  });

  return user;
}

export async function getUser(username: string) {
  if (!username) return null;
  try {
    let user = await db.user.findUnique({
      where: {
        username,
      },
      include: {
        likedPost: true,
        preference: true,
      },
    });
    return user;
  } catch (e) {
    return e;
  }
}

export async function createUserInDB(
  username: string,
  name: string,
  email: string,
  isAdmin: boolean,
  avatarUrl: string
) {
  try {
    const newUser = await db.user.create({
      data: {
        username,
        name,
        email,
        isAdmin,
        avatarUrl,
        preference: {
          create: {
            theme: "light",
            language: "en",
          },
        },
      },
    });
    return newUser;
  } catch (e) {
    return "user Cannot be created" + e;
  }
}
