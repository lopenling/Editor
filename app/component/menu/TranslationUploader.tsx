import { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { LANGUAGE_OPTION_TRANSLATION } from '~/constants';
import { useTxtUpload } from '../hooks/useTxtUpload';
import { useLoaderData } from '@remix-run/react';
import { Card, TextInput } from 'flowbite-react';
import { formatBytes } from '~/lib/formatSize';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function TranslationUploader({ fetcher }: { fetcher: any }) {
  const { acceptedFiles, fileContent, getRootProps, getInputProps, setFileContent } = useTxtUpload();
  let { text, page } = useLoaderData();
  let textInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('english');
  let handleSubmit = () => {
    if (title === '' || !title) return toast('please enter title');
    fetcher.submit(
      {
        content: fileContent,
        textId: text.id,
        pageId: page.order,
        name: title,
        language,
      },
      {
        method: 'POST',
        action: '/api/translation',
      },
    );
    setFileContent('');
    setTitle('');
  };
  useEffect(() => {
    if (fileContent !== '') {
      textInputRef.current?.focus();
    }
  }, [fileContent]);

  // when user click close button - reset the text input and file content
  const closeFileUpload = () => {
    setFileContent('');
    setTitle('');
  };
  return (
    <div className="flex flex-col  gap-3">
      {fileContent !== '' ? (
        <Card>
          <div className="flex justify-between">
            <h4>
              File: {acceptedFiles[0].name} , {formatBytes(acceptedFiles[0].size)}
            </h4>
            <button type="button" onClick={closeFileUpload}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <TextInput
            ref={textInputRef}
            placeholder="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="selectionLanguage">
            choose translation language
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="selectionLanguage"
            placeholder="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {LANGUAGE_OPTION_TRANSLATION.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-green-400 rounded shadow-sm p-2 text-white hover:bg-green-500"
          >
            upload translation
          </button>
        </Card>
      ) : (
        <div
          {...getRootProps({
            className: 'dropzone',
          })}
        >
          <input {...getInputProps()} accept=".txt" />
          <p>Drag 'n' drop a .TXT files here</p>
        </div>
      )}
    </div>
  );
}

export default TranslationUploader;
