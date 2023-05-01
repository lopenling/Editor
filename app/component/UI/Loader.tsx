import { useState, useEffect } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress === 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const width = Math.log10(progress + 1) * 20;

  return (
    <div className="bg-gray-200 rounded-full w-64">
      <div
        className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full"
        style={{ width: `${width}%` }}
      >
        {`${Math.floor(progress)}%`}
      </div>
    </div>
  );
}

export default Loader;
