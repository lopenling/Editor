import { DiffMatchPatch } from '~/lib';

export const getQuery = (newContent: string, oldContent: string) => {
  const dmp = new DiffMatchPatch();
  if (oldContent !== newContent) {
    const changes = dmp.diff_main(oldContent, newContent);
    const patch = dmp.patch_make(changes);
    let query = dmp.patch_toText(patch);
    return query;
  }
  return null;
};

export const saveData = async (patch, pageId: string, saveTextFetcher) => {
  const formData = new FormData();
  formData.append('pageId', pageId);
  formData.append('patch', patch);
  saveTextFetcher.submit(formData, {
    method: 'POST',
    action: '/api/text',
  });
};
