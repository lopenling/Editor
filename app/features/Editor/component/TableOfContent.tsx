import { useLoaderData,Link, useLocation } from '@remix-run/react';
import { Editor } from '@tiptap/react';
import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import uselitteraTranlation from '~/locales/useLitteraTranslations';

type tableProps = {
  onClose: () => void;
  editor: Editor | null;
}

const TableOfContents = ({ onClose,editor }:tableProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVersionOpen, setIsVersionOpen] = useState(true);
  const data = useLoaderData();
   const translation: any = uselitteraTranlation();
  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleVersionToggle = () => {
    setIsVersionOpen(!isVersionOpen);
   }

  const handleClose = () => {
    onClose();
  };
  const handleJump = (start: number) => { 
    editor?.chain().setTextSelection(start).focus().scrollIntoView().run();
  }
  return (
    <div className="z-50 w-full bg-gray-100 p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold">Table of Contents</h2>

        <button onClick={handleClose} className="mr-2">
          <GrClose size={14} className="cursor-pointer text-gray-500" />
        </button>
      </div>
      <div className="relative">
        <button
          className="mb-1 flex w-full items-center justify-between rounded-lg bg-white px-4 py-2 shadow"
          onClick={handleDropdownToggle}
        >
          Chapter 1
          <svg
            className={`ml-2 h-4 w-4 transform ${!isOpen ? 'rotate-90' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isOpen && (
          <ul className="ml-4 cursor-pointer">
            <li onClick={() => handleJump(45)}>Section 1.1</li>
            <li onClick={() => handleJump(1845)}>Section 1.2</li>
            <li onClick={() => handleJump(4445)}>Section 1.3</li>
          </ul>
        )}
      </div>
      {
     data.versions.length > 0 && <div className="relative" >
        <button
          className="mb-1 flex w-full items-center justify-between rounded-lg bg-white px-4 py-2 shadow"
          onClick={handleVersionToggle}
        >
          versions
          <svg
            className={`ml-2 h-4 w-4 transform ${!isVersionOpen ? 'rotate-90' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isVersionOpen && data.versions.map(({ version, count }: any,index:number) => {
        return (
          <div className='mr-3' key={version+index}>
            {translation[version]}
            <div className='flex gap-2'>

            {new Array(count).fill(0).map((_, index) => {
              let location = useLocation();
              let textId = location.pathname.split('/')[2];
              let page = index + 1;
              return (
                <div key={index + 'pages'} className="rounded-sm bg-slate-100 p-1 shadow hover:bg-yellow-200">
                  <Link to={`/text/${textId}/page/${page}/?version=${version}`}>{page}</Link>
                </div>
              );
            })}
              </div>
          </div>
        );
      }
        )}
      </div>}
      {/* Add more chapters here */}
     
    </div>
  );
};

export default TableOfContents;

