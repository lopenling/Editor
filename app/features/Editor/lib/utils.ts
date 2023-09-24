export const saveData = async (newContent: string, pageId: string, saveTextFetcher: any) => {
  const formData = new FormData();
  formData.append('pageId', pageId);
  formData.append('newContent', newContent);
  saveTextFetcher.submit(formData, {
    method: 'POST',
    action: '/api/text',
  });
};
