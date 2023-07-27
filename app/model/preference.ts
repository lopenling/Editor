import { db } from '~/services/db.server';

export const updateTheme = async (userId: string, theme: string) => {
  try {
    // Check if the user already has a preference
    const existingPreference = await db.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        preference: true,
      },
    });

    if (existingPreference && existingPreference.preference) {
      // If the preference exists, update the theme
      await db.userPreference.update({
        where: {
          id: existingPreference.preference.id,
        },
        data: {
          theme: theme,
        },
      });
    } else {
      // If the preference doesn't exist, create a new one for the user
      await db.userPreference.create({
        data: {
          theme: theme,
          User: {
            connect: {
              id: userId,
            },
          },
        },
      });
    }

    return theme;
  } catch (e) {
    console.log(e);
  }
};
