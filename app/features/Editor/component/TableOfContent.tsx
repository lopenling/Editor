import { Editor } from '@tiptap/react';
import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';

type tableProps = {
  onClose: () => void;
  editor: Editor | null;
}

const TableOfContents = ({ onClose,editor }:tableProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    onClose();
  };
  const handleJump = (start: number) => { 
    editor?.chain().setTextSelection(start).focus().scrollIntoView().run();
  }
  return (
    <div className="w-full bg-gray-100 p-4 z-50">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">Table of Contents</h2>

        <button onClick={handleClose} className="mr-2">
          <GrClose size={14} className="cursor-pointer text-gray-500" />
        </button>
      </div>
      <ul>
        <li className="relative">
          <button
            className="mb-1 flex w-full items-center justify-between rounded-lg bg-white px-4 py-2 shadow"
            onClick={handleDropdownToggle}
          >
            Chapter 1
            <svg
              className={`ml-2 h-4 w-4 transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
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
        </li>

        {/* Add more chapters here */}
      </ul>
    </div>
  );
};

export default TableOfContents;
