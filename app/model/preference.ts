import { db } from '~/services/db.server';

// update theme data
export const updateTheme = async (userId: string, theme: string) => {
  try {
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
    return theme;
  } catch (e) {
    console.log(e);
  }
};
