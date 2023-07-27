import React from 'react';
import TableOfContents from './TableOfContent';
import { useRecoilState } from 'recoil';
import { showTableContent } from '~/states';
import { FaListUl } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Editor } from '@tiptap/react';
import { HEADER_HEIGHT, LEFT_SIDEBAR_WIDTH } from '~/constants';

interface TableContentProps {
  editor: Editor | null;
}

function TableContent({ editor }: TableContentProps) {
  const [showTable, setShowTable] = useRecoilState(showTableContent);

  return (
    <div
      style={{
        top: HEADER_HEIGHT,
        width: showTable ? LEFT_SIDEBAR_WIDTH : 50,
      }}
      id="tableContent"
      className="sticky hidden md:flex"
    >
      <button
        className="absolute rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
        style={{ top: 10, left: 10, padding: 10, height: 40, width: 40 }}
        onClick={() => setShowTable((p) => !p)}
      >
        <FaListUl size={22} className="cursor-pointer text-gray-500  " />
      </button>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: showTable ? 0 : '-100%' }}
        transition={{ duration: 0.5 }}
        className="z-10 w-full overflow-hidden rounded-2xl"
      >
        <TableOfContents editor={editor} onClose={() => setShowTable(false)} />
      </motion.div>
    </div>
  );
}

export default TableContent;
