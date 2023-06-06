import { useState, useEffect } from 'react';

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 98) {
          const newProgress = prevProgress + 1;
          if (newProgress === 100) {
            clearInterval(interval);
          }
          return newProgress;
        }
        return prevProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const width = (progress / 100) * 100;

  return (
    <div className="w-64 rounded-full bg-gray-200">
      <div
        className="rounded-full bg-blue-500 py-1 text-center text-xs leading-none text-white"
        style={{ width: `${width}%` }}
      >
        {`${Math.floor(progress)}%`}
      </div>
    </div>
  );
}

export default Loader;
