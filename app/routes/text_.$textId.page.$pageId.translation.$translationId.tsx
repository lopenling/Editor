import { ActionFunction, LoaderFunction, json } from '@remix-run/node';
import { Link, useFetcher, useLoaderData, useSearchParams } from '@remix-run/react';
import { EditorContent, BubbleMenu } from '@tiptap/react';
import Header from '~/component/Layout/Header';
import Tools from '~/features/Editor/tiptap/component/Tools';
import useEditorInstance from '~/features/Editor/tiptap/useEditorInstance';
import { getTranslation, updateSourceAndTranslation } from '~/model/translation';
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
import { FaEdit, FaTruckLoading } from 'react-icons/fa';
import copy from '~/lib/copy.client';
import ExportButton from '~/features/Editor/component/ExportButton';
import { constructHTML, processHTML } from '~/lib/translationhtmlparser';
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
  let sourceAnnotation = JSON.parse(formdata.get('sourceAnnotation') as string);
  let translationAnnotation = JSON.parse(formdata.get('translationAnnotation') as string);

  let sourceId = formdata.get('sourceId') as string;
  let translationId = formdata.get('translationId') as string;
  //text should be longer than 1000 characters
  try {
    const [userText, translation] = await updateSourceAndTranslation({
      sourceContent,
      sourceAnnotation,
      sourceId,
      translationContent,
      translationAnnotation,
      translationId,
    });

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
    content: constructHTML(userText.content, userText.Annotation),
    isEditable: true,
    paramUpdate: false,
  });
  let translation_editor = useEditorInstance({
    name: 'translation' + translation.id,
    content: constructHTML(translation.content, translation.annotation),
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
    if (!source_editor || !translation_editor) {
      toast.error('cannot save!');
      console.log(source_editor, translation_editor);
      return;
    }
    let sourceContent = source_editor.getHTML();
    let translationContent = translation_editor.getHTML();

    let source = processHTML(sourceContent);
    let translationHTML = processHTML(translationContent);
    // let html = constructHTML(text, annotations);
    let sourceText = source.text;
    let sourceAnnotation = source.annotations;

    let translationText = translationHTML.text;
    let translationAnnotation = translationHTML.annotations;

    if (userText?.userId === user?.id) {
      fetcher.submit(
        {
          sourceContent: sourceText,
          sourceAnnotation: JSON.stringify(sourceAnnotation),
          translationContent: translationText,
          translationAnnotation: JSON.stringify(translationAnnotation),
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
        save();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [source_editor, translation_editor]);

  const isSaving = fetcher.state !== 'idle';
  if (source_editor === null || translation_editor === null) return <div>loading</div>;
  return (
    <div className="flex flex-col h-screen overflow-y-hidden">
      <Header editor={null} />

      <div className="flex flex-1 gap-2 w-full  font-monlam">
        <div className="flex flex-col gap-3 max-w-6xl m-auto my-4 mx-2">
          <Tooltip content="go back" placement="bottom">
            <Button
              as={Link}
              size={'sm'}
              to={`/text/${textId}/page/${order}?with=Translations`}
              className="text-white bg-slate-500"
            >
              <IoMdArrowRoundBack />
            </Button>
          </Tooltip>
          <div className="flex flex-col gap-4">
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
                size="xs"
                dismissOnClick={false}
                renderTrigger={() => (
                  <Button size="sm" className="text-white bg-slate-500">
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
              <Button size={'sm'} className="text-white bg-slate-500" onClick={save} disabled={isSaving}>
                {isSaving ? <FaTruckLoading /> : <AiFillSave />}
              </Button>
            </Tooltip>
          </div>
        </div>
        <div
          ref={sourceRef}
          onMouseOver={handleChangeCurrentDiv}
          className="relative flex-1 block max-h-[90vh] p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  overflow-y-scroll"
        >
          <h2 className="absolute top-2 right-2 text-gray-400">{userText.name}</h2>
          <EditorContent editor={source_editor} />
          <BubbleMenu editor={source_editor!} shouldShow={({ editor }) => editor?.isFocused && editor.isEditable}>
            <Tools editor={source_editor} />
          </BubbleMenu>
        </div>
        <div
          ref={translationRef}
          onMouseOver={handleChangeCurrentDiv}
          className="relative flex-1 block max-h-[90vh]  p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 overflow-y-scroll"
        >
          <h2 className="absolute top-2 right-2 text-gray-400">
            <div className="text-sm"> {translation.language + ' ' + 'translation'}</div>
          </h2>
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
