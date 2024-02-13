import React from 'react';

function TranslationList({ translation, fetcher }: { translation: string | null; fetcher: any }) {
  let loading = fetcher.state !== 'idle';
  if (!translation && !loading) return null;
  return (
    <>
      <div className="p-2 font-Inter text-sm text-gray-500 w-full shadow-md">
        monlam translation :{loading && <span className="p-2 text-gray-400">translating...</span>}
        {translation && <span className="text-slate-700">{translation}</span>}
      </div>
    </>
  );
}

export default TranslationList;
