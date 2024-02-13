import toast from 'react-hot-toast';
import { asBlob } from 'html-docx-js-typescript';

export default async function exportAsDocs(editor: any) {
  if (!editor) {
    toast.error('cannot export!');
    return;
  }
  let htmlContent = editor.getHTML();
  const docBlob = await asBlob(htmlContent); // Convert HTML to a Word document Blob
  // Create a Blob for download
  const url = URL.createObjectURL(docBlob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'document.docx'; // Name the file

  // Append to the document and trigger the download
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Clean up
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
}
