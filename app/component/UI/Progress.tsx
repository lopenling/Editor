import { useEffect, useState } from 'react';
import { HEADER_HEIGHT } from '~/constants';

export default function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const container = document?.getElementById('textEditorContainer');
    if (container) {
      let fullHeight = container.scrollHeight - window.innerHeight;
      let viewHeight = container.scrollTop + container.clientHeight - window.innerHeight + HEADER_HEIGHT;
      const progress = (viewHeight / fullHeight) * 100;
      setScrollPercentage(() => Math.floor(progress));
    }
  };

  useEffect(() => {
    const container = document?.getElementById('textEditorContainer');
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="h-1.5 w-full rounded-full  ">
      <div
        style={{ width: `${scrollPercentage}%`, height: 2 }}
        className="rounded-full bg-blue-600 dark:bg-blue-500"
      ></div>
    </div>
  );
}
