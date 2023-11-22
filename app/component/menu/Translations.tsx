import { Link, useFetcher, useLoaderData } from '@remix-run/react';
import { Button, Card, TextInput } from 'flowbite-react';
import { useCallback, useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { LANGUAGE_OPTION_TRANSLATION } from '~/constants';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
function Translations() {
  let { text, page, translations, user } = useLoaderData();
  const [fileContent, setFileContent] = useState('');
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'text/*': ['.txt'],
    },
    maxFiles: 1,
  });
  const [upload, setUpload] = useState(false);
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('english');
  let fetcher = useFetcher();

  useEffect(() => {
    let file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const text = event.target.result;
        setFileContent(text);
      };

      reader.readAsText(file);
    }
  }, [acceptedFiles[0]]);

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
    setUpload(false);
  };
  function handleToggleUpdate() {
    if (!user) return alert('please login first');
    setUpload(!upload);
  }
  let handleDelete = (id) => {
    fetcher.submit(
      { id },
      {
        method: 'DELETE',
        action: '/api/translation',
      },
    );
  };
  return (
    <div className="relative">
      {upload ? (
        <div className="flex flex-col  gap-3">
          {fileContent !== '' ? (
            <>
              <h4>
                File: {acceptedFiles[0].name} , {acceptedFiles[0].size}
              </h4>
              <TextInput placeholder="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="selectionLanguage"
              >
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
            </>
          ) : (
            <div
              {...getRootProps({
                className: 'dropzone',
              })}
            >
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          )}
        </div>
      ) : (
        <Button
          onClick={handleToggleUpdate}
          size={'sm'}
          className="bg-green-400 rounded shadow-sm text-white hover:bg-green-500 fixed bottom-5 right-5"
        >
          + upload
        </Button>
      )}
      <div className="mt-3 flex flex-col gap-2">
        {translations.length === 0 && <div className="text-red-500 mx-3">No translation yet</div>}
        {translations?.map((translation, index) => {
          let url = `/text/${text.id}/page/${page.order}/translation/${translation.id}`;
          return (
            <div
              key={'translation-' + index}
              className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col w-full p-1"
            >
              <div className="w-full flex justify-between">
                <Link to={url} className="flex-1">
                  <div>
                    {translation?.language} - {translation.userText.name}
                    <div className="text-sm font-light ">{translation.userText.user.username}</div>
                  </div>
                </Link>
                <Button onClick={() => handleDelete(translation.id)} className="bg-red-400 hover:bg-red-500">
                  <AiFillDelete />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Translations;
