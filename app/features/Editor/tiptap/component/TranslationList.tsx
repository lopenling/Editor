import React from 'react';

function TranslationList({ translation, fetcher }: { translation: string | null }) {
  let loading = fetcher.state !== 'idle';
  return (
    <>
      {loading && <div className="p-2 text-gray-400">translating...</div>}
      {translation && (
        <div className="p-2 font-Inter text-sm text-gray-500 w-full">
          monlam translation:<span className="text-slate-700">{translation}</span>
        </div>
      )}
    </>
  );
}

export default TranslationList;
