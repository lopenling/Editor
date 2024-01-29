import { ActionFunction, LoaderFunction, json } from '@remix-run/node';
import { Link, useFetcher, useLoaderData, useSearchParams } from '@remix-run/react';
import { EditorContent, BubbleMenu } from '@tiptap/react';
import Header from '~/component/Layout/Header';
import Tools from '~/features/Editor/tiptap/component/Tools';
import useEditorInstance from '~/features/Editor/tiptap/useEditorInstance';
import { getTranslation } from '~/model/translation';
import { getUserPage } from '~/model/userText';
import { BsShare } from 'react-icons/bs';
import { AiFillSave, AiOutlineExport } from 'react-icons/ai';
import { Button, Tooltip, Dropdown } from 'flowbite-react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { db } from '~/services/db.server';
import { useEffect, useRef, useState, useCallback } from 'react';
import toast from 'react-hot-toast';
import { getUserSession } from '~/services/session.server';
import { CiRead } from 'react-icons/ci';
import { useDebounce } from '~/component/hooks/useDebounce';
import { FaEdit } from 'react-icons/fa';
import copy from '~/lib/copy.client';
import ExportButton from '~/features/Editor/component/ExportButton';
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

  let source_editor = useEditorInstance({
    name: 'userText' + userText.id,
    content: userText.content,
    isEditable: true,
    paramUpdate: false,
  });
  let translation_editor = useEditorInstance({
    name: 'translation' + translation.id,
    content: translation.content,
    isEditable: true,
    paramUpdate: false,
  });

  let fetcher = useFetcher();
  let [params, setParams] = useSearchParams();
  let sectionIndex = params.get('section');
  let subsectionIndex = params.get('subsection');

  const [prevVisibleIndex, setPrevVisibleIndex] = useState(null);
  const [prevVisibleElement] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEditable, setIsEditable] = useState(true);

  let sourceRef = useRef<HTMLDivElement>(null);
  let translationRef = useRef<HTMLDivElement>(null);
  let currentDiv = useRef<HTMLDivElement>(null);

  let debounced_Index = useDebounce(currentIndex, 500);

  //  handle scrolling of both divs

  let handleScroll = useCallback(
    (element) => {
      const h1Elements = element.querySelectorAll('h1');
      if (params.get('section') || params.get('subsection')) {
        setParams((p) => {
          p.delete('section');
          p.delete('subsection');
          return p;
        });
      }
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
    },
    [sourceRef.current],
  );

  useEffect(() => {
    let timer;
    // Add scroll event listener to the sourceRef
    timer = setTimeout(() => {
      sourceRef.current?.addEventListener('scroll', () => handleScroll(sourceRef.current));
      translationRef.current?.addEventListener('scroll', () => handleScroll(translationRef.current));
    }, 2000);
    // Clean up the event listener on component unmount
    return () => {
      sourceRef.current?.removeEventListener('scroll', () => handleScroll(sourceRef.current));
      translationRef.current?.removeEventListener('scroll', () => handleScroll(translationRef.current));
      if (timer) clearTimeout(timer);
    };
  }, []);

  // Scroll to the current h1 element when the currentIndex changes
  useEffect(() => {
    let transElement = translationRef.current?.querySelectorAll('h1')[currentIndex];
    let sourceElement = sourceRef.current?.querySelectorAll('h1')[currentIndex];
    if (transElement && translationRef.current !== currentDiv.current) {
      transElement?.scrollIntoView({ block: 'center' });
    }

    if (sourceElement && sourceRef.current !== currentDiv.current) {
      sourceElement?.scrollIntoView({ block: 'center' });
    }
  }, [debounced_Index]);

  // Set the editor to editable or not
  useEffect(() => {
    source_editor?.setEditable(isEditable);
    translation_editor?.setEditable(isEditable);
  }, [isEditable]);

  // Toast a message when the text is saved
  useEffect(() => {
    if (fetcher.data?.userText) {
      toast('Saved!', {
        icon: '👏',
      });
    }
  }, [fetcher.data]);

  // Scroll to the section and subsection if the url has the query params
  useEffect(() => {
    if (sectionIndex !== null) {
      currentDiv.current = sourceRef.current;
      const sections = sourceRef.current?.getElementsByTagName('h1');
      setTimeout(() => {
        if (sections && sections.length > 0) {
          const section = sections[parseInt(sectionIndex) - 1];
          // Assuming sectionIndex is 1-based

          if (section) {
            section.scrollIntoView();

            if (subsectionIndex !== null) {
              const subsections = section.querySelectorAll('li');
              const subsection = subsections[parseInt(subsectionIndex) - 1]; // Assuming subsectionIndex is 1-based
              if (subsection) {
                subsection.scrollIntoView();
              }
            }
          }
        }
      }, 3000);
    }
  }, [sectionIndex, subsectionIndex, sourceRef.current?.innerHTML]);

  function save() {
    // let data = parseHeadings(source_editor.getHTML());
    // console.log(data);

    if (!source_editor || !translation_editor) {
      toast.error('cannot save!');
      return;
    }
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
  function handleChangeCurrentDiv(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    currentDiv.current = e.currentTarget;
  }

  const isSaving = fetcher.state !== 'idle';
  if (source_editor === null || translation_editor === null) return <div>loading</div>;
  return (
    <div className="max-h-screen overflow-y-hidden">
      <Header editor={null} />
      <div className="flex justify-between max-w-6xl m-auto">
        <Button as={Link} to={`/text/${textId}/page/${order}`} className="text-white bg-slate-500">
          <IoMdArrowRoundBack />
          Go to Main Text
        </Button>
        <div className="flex gap-4">
          <Tooltip content="share link" placement="bottom">
            <Button size={'sm'} className="text-white bg-slate-500" onClick={() => copy(window.location.href)}>
              <BsShare />
            </Button>
          </Tooltip>
          <Tooltip content="edit" placement="bottom">
            <Button size={'sm'} className="text-white bg-slate-500" onClick={() => setIsEditable((prev) => !prev)}>
              {isEditable ? <CiRead /> : <FaEdit />}
            </Button>
          </Tooltip>
          <Tooltip content="export as docx" placement="top">
            <Dropdown
              label=""
              size="sm"
              dismissOnClick={false}
              renderTrigger={() => (
                <Button className="text-white bg-slate-500">
                  <AiOutlineExport />
                </Button>
              )}
            >
              <Dropdown.Item>
                <ExportButton editor={source_editor} name="Source" />
              </Dropdown.Item>
              <Dropdown.Item>
                <ExportButton editor={translation_editor} name="Translation" />
              </Dropdown.Item>
            </Dropdown>
          </Tooltip>
          <Tooltip content="save" placement="bottom">
            <Button size={'sm'} className="text-white bg-slate-500" onClick={save} isProcessing={isSaving}>
              {isSaving ? null : <AiFillSave />}
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="flex max-w-6xl gap-3 w-full mx-auto mt-3 font-monlam">
        <div
          ref={sourceRef}
          onMouseOver={handleChangeCurrentDiv}
          className="relative flex-1 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-[80vh] overflow-y-scroll"
        >
          <h2 className="text-gray-400">Source Text</h2>
          <EditorContent editor={source_editor} />
          <BubbleMenu editor={source_editor!} shouldShow={({ editor }) => editor?.isFocused && editor.isEditable}>
            <Tools editor={source_editor} />
          </BubbleMenu>
        </div>
        <div
          ref={translationRef}
          onMouseOver={handleChangeCurrentDiv}
          className="relative flex-1 block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-[80vh] overflow-y-scroll"
        >
          <h2 className="text-gray-400">Translation Text</h2>
          <EditorContent editor={translation_editor} />
          <BubbleMenu editor={translation_editor!} shouldShow={({ editor }) => editor.isFocused && editor.isEditable}>
            <Tools editor={translation_editor} />
          </BubbleMenu>
        </div>
      </div>
    </div>
  );
}

export default TranslationsRoute;
