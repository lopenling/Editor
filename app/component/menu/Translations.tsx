import { Link, useFetcher, useLoaderData } from '@remix-run/react';
import { Button, Card } from 'flowbite-react';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { LANGUAGE_OPTION_TRANSLATION } from '~/constants';

function Translations() {
  let { text, page, translations, user } = useLoaderData();
  const [fileContent, setFileContent] = useState('');

  const [upload, setUpload] = useState(false);
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('english');
  let fetcher = useFetcher();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const text = event.target.result;
        setFileContent(text);
      };

      reader.readAsText(file);
    }
  };
  let handleSubmit = () => {
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
    <div>
      <div className="fixed bottom-5 right-10">
        {upload ? (
          <div className="flex flex-col">
            <input type="file" accept=".txt" onChange={handleFileUpload}></input>
            {fileContent !== '' && (
              <>
                <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <div className="flex flex-col  gap-3">
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
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-green-400 rounded shadow-sm p-2 text-white hover:bg-green-500"
                >
                  upload translation
                </button>
              </>
            )}
          </div>
        ) : (
          <Button
            onClick={handleToggleUpdate}
            size={'sm'}
            className="bg-green-400 rounded shadow-sm text-white hover:bg-green-500"
          >
            + upload
          </Button>
        )}
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {translations.length === 0 && <div className="text-red-500 mx-3">No translation yet</div>}
        {translations?.map((translation, index) => {
          let url = `/text/${text.id}/page/${page.order}/translation/${translation.id}`;
          return (
            <Link to={url} key={'translation-' + index}>
              <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col w-full p-1">
                <div className="w-full flex justify-between">
                  <div>
                    {translation?.language} - {translation.userText.name}
                    <div className="text-sm font-light ">{translation.userText.user.username}</div>
                  </div>
                  <Button onClick={() => handleDelete(translation.id)} className="bg-red-400">
                    <AiFillDelete />
                  </Button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Translations;
