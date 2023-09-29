import { db } from '~/services/db.server';

export const updateAnnotations = async (pageId: string, annotations: string) => {
  let parsedAnnotations;
  try {
    parsedAnnotations = JSON.parse(annotations);
  } catch (e) {
    throw new Error('Invalid JSON format');
  }

  const transactions = parsedAnnotations.map((a) => {
    const { id, ...otherData } = a;
    return db.annotations.upsert({
      where: { id },
      update: { ...otherData, pageId },
      create: { id, ...otherData, pageId },
    });
  });

  try {
    const annotationsRes = await db.$transaction(transactions);
    return annotationsRes;
  } catch (e) {
    throw new Error(`Error processing annotations: ${e.message}`);
  }
};

export const getAnnotations = async (pageId: string) => {
  try {
    let annotationsRes = await db.annotations.findMany({
      where: {
        pageId: pageId,
      },
    });
    return annotationsRes;
  } catch (e) {
    throw new Error(e);
  }
};
