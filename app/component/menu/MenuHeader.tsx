import { useSearchParams } from '@remix-run/react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoIosArrowRoundBack } from 'react-icons/io';

function MenuHeader() {
  let [searchParams, setSearchParams] = useSearchParams();
  let header = searchParams.get('with');
  return (
    <div className="w-full uppercase text-gray-500 h-[60px]  bg-gray-100 flex items-center justify-between px-6">
      {header === 'all' ? (
        'Resources'
      ) : (
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setSearchParams({ with: 'all' })}>
            <IoIosArrowRoundBack size={30} />
          </button>
          {header}
        </div>
      )}
      <button type="button" onClick={() => setSearchParams({})}>
        <AiOutlineCloseCircle />
      </button>
    </div>
  );
}

export default MenuHeader;
