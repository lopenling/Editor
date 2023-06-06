import React, { useState } from 'react';

const TableOfContents = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="w-64 bg-gray-100 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">Table of Contents</h2>
        <button className="text-gray-600 hover:text-gray-900" onClick={handleClose}>
          Close
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
              <li>Section 1.1</li>
              <li>Section 1.2</li>
              <li>Section 1.3</li>
            </ul>
          )}
        </li>

        {/* Add more chapters here */}
      </ul>
    </div>
  );
};

export default TableOfContents;
