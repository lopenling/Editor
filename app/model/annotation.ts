import { db } from '~/services/db.server';

export const updateAnnotations = async (pageId: string, annotations: string) => {
  let parsedAnnotations;
  try {
    parsedAnnotations = JSON.parse(annotations);
  } catch (e) {
    throw new Error('Invalid JSON format');
  }

  // Fetch existing annotations from the database for the given pageId
  const existingAnnotations = await db.annotations.findMany({
    where: { pageId },
  });

  // Prepare transactions for upserting annotations
  const upsertTransactions = parsedAnnotations.map((a) => {
    const { id, ...otherData } = a;
    return db.annotations.upsert({
      where: { id },
      update: { ...otherData, pageId },
      create: { id, ...otherData, pageId },
    });
  });

  // Find annotations to be deleted
  const deleteTransactions = existingAnnotations
    .filter((ea) => !parsedAnnotations.some((pa) => pa.id === ea.id))
    .map((a) => db.annotations.delete({ where: { id: a.id } }));

  // Combine upsert and delete transactions
  const transactions = [...upsertTransactions, ...deleteTransactions];

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
