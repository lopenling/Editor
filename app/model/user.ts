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
  isAdmin: boolean
) {
  try {
    const newUser = await db.user.create({
      data: {
        username,
        name,
        email,
        isAdmin,
      },
    });
    return newUser;
  } catch (e) {
    throw new Error("error " + e.message);
  }
}
