import { ActionFunction, LoaderFunction, json } from '@remix-run/node';
import { Link, useFetcher, useLoaderData } from '@remix-run/react';
import { EditorContent } from '@tiptap/react';
import Header from '~/component/Layout/Header';
import Tools from '~/features/Editor/tiptap/component/Tools';
import useEditorInstance from '~/features/Editor/tiptap/useEditorInstance';
import { getTranslation } from '~/model/translation';
import { getUserPage, updateSource } from '~/model/userText';
import { BsShare } from 'react-icons/bs';
import { AiFillSave } from 'react-icons/ai';
import { Button } from 'flowbite-react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { db } from '~/services/db.server';
export const loader: LoaderFunction = async ({ request, params }) => {
  let textId = params.textId;
  let order = params.pageId;
  let translationId = params.translationId as string;
  let translation = await getTranslation(parseInt(translationId));
  let userText = await getUserPage(translation?.userTextId);
  return json({
    textId,
    order,
    translation,
    userText,
  });
};

export const action: ActionFunction = async ({ request }) => {
  let formdata = await request.formData();
  let sourceContent = formdata.get('sourceContent') as string;
  let translationContent = formdata.get('translationContent') as string;
  let sourceId = formdata.get('sourceId') as string;
  let translationId = formdata.get('translationId') as string;
  //text should be longer than 1000 characters
  try {
    const [userText, translation] = await db.$transaction([
      db.userText.update({
        where: { id: parseInt(sourceId) },
        data: {
          content: sourceContent,
        },
      }),
      db.translation.update({
        where: { id: parseInt(translationId) },
        data: {
          content: translationContent,
        },
      }),
    ]);

    return {
      userText,
      translation,
    };
  } catch (e) {
    throw new Error('error ' + e);
  }
};

function TranslationsRoute() {
  let { translation, userText, textId, order } = useLoaderData();
  let source_editor = useEditorInstance(userText.content, true, false);
  let translation_editor = useEditorInstance(translation.content, true, false);
  let fetcher = useFetcher();
  function save() {
    fetcher.submit(
      {
        sourceContent: source_editor.getHTML(),
        translationContent: translation_editor.getHTML(),
        translationId: translation.id,
        sourceId: userText.id,
      },
      {
        method: 'POST',
      },
    );
  }
  function share() {
    navigator.clipboard.writeText(window.location.href);
    alert('text url copied');
  }
  return (
    <>
      <Header editor={null} />
      <div className="flex justify-between max-w-6xl m-auto">
        <Button as={Link} to={`/text/${textId}/page/${order}`} className="text-white bg-slate-500">
          <IoMdArrowRoundBack />
          Go to Main Text
        </Button>
        <div className="flex gap-4">
          <Button size={'sm'} className="text-white bg-slate-500" onClick={share}>
            <BsShare />
          </Button>
          <Button
            size={'sm'}
            className="text-white bg-slate-500"
            onClick={save}
            isProcessing={fetcher.state !== 'idle'}
          >
            <AiFillSave />
          </Button>
        </div>
      </div>
      <div className="flex max-w-6xl gap-3 w-full mx-auto mt-3">
        <div className="flex-1 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-[80vh] overflow-y-scroll">
          <h2 className="text-gray-400">Source Text</h2>
          <Tools editor={source_editor} />
          <EditorContent editor={source_editor} />
        </div>
        <div className="flex-1 block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-[80vh] overflow-y-scroll">
          <h2 className="text-gray-400">Translation Text</h2>
          <Tools editor={translation_editor} />
          <EditorContent editor={translation_editor} />
        </div>
      </div>
    </>
  );
}

export default TranslationsRoute;
