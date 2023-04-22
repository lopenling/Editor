import { db } from "~/db.server";

// update theme data
export const updateTheme = async (userId: string, theme: string) => {
  await db.user.update({
    where: {
      id: userId,
    },
    data: {
      preference: {
        update: {
          theme: theme,
        },
      },
    },
  });
};
