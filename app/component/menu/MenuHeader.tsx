import { useSearchParams } from '@remix-run/react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoIosArrowRoundBack } from 'react-icons/io';

function MenuHeader() {
  let [searchParams, setSearchParams] = useSearchParams();
  let header = searchParams.get('with');

  function handleBack() {
    setSearchParams((p) => {
      p.set('with', 'all');
      p.delete('thread');
      return p;
    });
  }
  return (
    <div className="w-full uppercase text-gray-500 h-[60px] bg-gray-100 dark:text-white dark:bg-gray-400 flex items-center justify-between px-6 py-4">
      {header === 'all' ? (
        'Resources'
      ) : (
        <div className="flex items-center gap-2">
          <button type="button" onClick={handleBack}>
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
