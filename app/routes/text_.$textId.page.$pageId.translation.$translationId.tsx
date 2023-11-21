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
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { getUserSession } from '~/services/session.server';
export const loader: LoaderFunction = async ({ request, params }) => {
  let textId = params.textId;
  let order = params.pageId;
  let translationId = params.translationId as string;
  let translation = await getTranslation(parseInt(translationId));
  let userText = await getUserPage(translation?.userTextId);
  let user = await getUserSession(request);
  return json({
    user,
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
  let { translation, userText, textId, order, user } = useLoaderData();
  let source_editor = useEditorInstance(userText.content, true, false);
  let translation_editor = useEditorInstance(translation.content, true, false);

  let sourceRef = useRef<HTMLDivElement>(null);
  let translationRef = useRef<HTMLDivElement>(null);
  let fetcher = useFetcher();
  useEffect(() => {
    if (fetcher.data?.userText) {
      toast('Saved!', {
        icon: '👏',
      });
    }
  }, [fetcher.data]);
  function save() {
    if (userText?.userId === user?.id) {
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
    } else {
      toast.error('You are not the owner of this text');
    }
  }
  function share() {
    navigator.clipboard.writeText(window.location.href);

    toast.success('text url copied', {
      icon: '👏',
    });
  }
  const [prevVisibleIndex, setPrevVisibleIndex] = useState(null);
  const [prevVisibleElement] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (element: HTMLDivElement) => {
      const h1Elements = element.querySelectorAll('h1');

      // Find the index and element of the first visible h1 element
      const firstVisibleH1 = Array.from(h1Elements).find((h1) => {
        const h1Rect = h1.getBoundingClientRect();
        const parentRect = element?.getBoundingClientRect();

        // Check if the h1 element is fully or partially visible within its parent div
        return h1Rect.top >= parentRect.top && h1Rect.bottom <= parentRect.bottom;
      });

      // Log the index and element of the first visible h1 if they change
      if (firstVisibleH1) {
        const firstVisibleIndex = Array.from(h1Elements).indexOf(firstVisibleH1);

        if (firstVisibleIndex !== prevVisibleIndex || firstVisibleH1 !== prevVisibleElement) {
          setCurrentIndex(firstVisibleIndex);
          // Update the previous values
          setPrevVisibleIndex(firstVisibleIndex);
        }
      }
    };

    // Add scroll event listener to the sourceRef
    sourceRef.current?.addEventListener('scroll', () => handleScroll(sourceRef.current));
    translationRef.current?.addEventListener('scroll', () => handleScroll(translationRef.current));
    // Clean up the event listener on component unmount
    return () => {
      sourceRef.current?.removeEventListener('scroll', () => handleScroll(sourceRef.current));
      translationRef.current?.removeEventListener('scroll', () => handleScroll(translationRef.current));
    };
  }, [prevVisibleIndex]);

  useEffect(() => {
    let transElement = translationRef.current?.querySelectorAll('h1')[currentIndex];
    let sourceElement = sourceRef.current?.querySelectorAll('h1')[currentIndex];

    if (translationRef.current !== currentDiv.current) {
      transElement?.scrollIntoView({ block: 'center' });
    }
    if (sourceRef.current !== currentDiv.current) {
      sourceElement?.scrollIntoView({ block: 'center' });
    }
  }, [currentIndex]);
  function handleChangeCurrentDiv(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    currentDiv.current = e.currentTarget;
  }
  const isSaving = fetcher.state !== 'idle';
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
          <Button size={'sm'} className="text-white bg-slate-500" onClick={save} isProcessing={isSaving}>
            {isSaving ? null : <AiFillSave />}
          </Button>
        </div>
      </div>
      <div className="flex max-w-6xl gap-3 w-full mx-auto mt-3">
        <div
          ref={sourceRef}
          onMouseOver={handleChangeCurrentDiv}
          className="flex-1 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-[80vh] overflow-y-scroll"
        >
          <h2 className="text-gray-400">Source Text</h2>
          <Tools editor={source_editor} />
          <EditorContent editor={source_editor} />
        </div>
        <div
          ref={translationRef}
          onMouseOver={handleChangeCurrentDiv}
          className="flex-1 block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-[80vh] overflow-y-scroll"
        >
          <h2 className="text-gray-400">Translation Text</h2>
          <Tools editor={translation_editor} />
          <EditorContent editor={translation_editor} />
        </div>
      </div>
    </>
  );
}

export default TranslationsRoute;
