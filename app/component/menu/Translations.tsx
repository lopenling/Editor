import { Link, useFetcher, useLoaderData } from '@remix-run/react';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import TranslationUploader from './TranslationUploader';
function Translations() {
  let { text, page, translations } = useLoaderData();
  const [upload, setUpload] = useState(false);

  let fetcher = useFetcher();
  useEffect(() => {
    if (fetcher.data) {
      setUpload(false);
    }
  }, [fetcher?.data]);

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
        <TranslationUploader fetcher={fetcher} />
      ) : (
        <Button
          onClick={() => setUpload(true)}
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
