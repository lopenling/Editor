import { Link, useLoaderData, useLocation } from '@remix-run/react';
import { HEADER_HEIGHT } from '~/constants';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosOptions } from 'react-icons/io';
function TextHeader() {
  const { text } = useLoaderData();
  let loc = useLocation();
  return (
    <div className="bg-gray-50 dark:bg-gray-500 flex justify-between items-center border-t py-3" style={{ height: 60 }}>
      <div className="flex justify-between gap-4 items-center lg:px-9 px-3 max-w-3xl w-full mx-auto">
        <Link to="/">
          <AiOutlineClose size={30} className="text-gray-500 dark:text-white" />
        </Link>
        <div className="relative md:-top-1 font-bold" style={{ fontSize: 'clamp(18px, 24px, 2.2vw)' }}>
          {text.name}
        </div>
        <Link to={loc.pathname + '?with=all'}>
          <IoIosOptions size={30} className="text-gray-500 dark:text-white" />
        </Link>
      </div>
    </div>
  );
}

export default TextHeader;
