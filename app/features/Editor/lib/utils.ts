import { annotationType } from './htmlParser';

export const saveData = async (
  textContent: string,
  annotations: annotationType[],
  pageId: string,
  saveTextFetcher: any,
) => {
  const formData = new FormData();
  formData.append('pageId', pageId);
  formData.append('content', textContent);
  formData.append('annotations', JSON.stringify(annotations));
  saveTextFetcher.submit(formData, {
    method: 'POST',
    action: '/api/text',
  });
};
