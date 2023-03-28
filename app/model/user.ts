import { db } from "~/db.server";

//find all user
export async function getAllUser() {
  try {
    let user = await db.user.findMany();
    return user;
  } catch (e) {
    return e;
  }
}

// find user in database

export async function findUserByUsername(username: string) {
  if (!username) return null;
  try {
    let user = await db.user.findUnique({
      where: {
        username,
      },
      include: {
        likedPost: true,
      },
    });
    return user;
  } catch (e) {
    return e;
  }
}

// create new User

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
      },
    });
    return newUser;
  } catch (e) {
    return "user Cannot be created" + e;
  }
}
