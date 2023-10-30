import { LoaderFunction, json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { Editor, EditorContent } from '@tiptap/react';
import Tools from '~/features/Editor/tiptap/component/Tools';
import useEditorInstance from '~/features/Editor/tiptap/useEditorInstance';
import { getTranslation } from '~/model/translation';
import { getUserPage } from '~/model/userText';

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

function TranslationsRoute() {
  let { translation, userText, textId, order } = useLoaderData();
  let source_editor = useEditorInstance(userText.content, true, false);
  let translation_editor = useEditorInstance(translation.content, true, false);

  return (
    <>
      <div>
        <Link to={`/text/${textId}/page/${order}`}>Go to Main Text</Link>
      </div>
      <div className="flex max-w-6xl gap-3 w-full mx-auto mt-10">
        <div className="flex-1 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-[80vh] overflow-y-scroll">
          <h2>Source Text</h2>
          <Tools editor={source_editor} />
          <EditorContent editor={source_editor} />
        </div>
        <div className="flex-1 block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-[80vh] overflow-y-scroll">
          <h2>Translation Text</h2>
          <Tools editor={translation_editor} />
          <EditorContent editor={translation_editor} />
        </div>
      </div>
    </>
  );
}

export default TranslationsRoute;
