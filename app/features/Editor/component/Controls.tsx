import React, { useEffect } from 'react';

const Controls = ({ zoomIn, zoomOut, resetTransform, url }: any) => {
  useEffect(() => {
    resetTransform();
  }, [url]);

  return (
    <div className="absolute right-3 top-0 z-20 flex gap-3  " style={{ float: 'right' }}>
      <button className="tool-image" onClick={() => zoomIn()}>
        Zoom In +
      </button>
      <button className="tool-image" onClick={() => zoomOut()}>
        Zoom Out -
      </button>
      <button className="tool-image" onClick={() => resetTransform()}>
        reset
      </button>
    </div>
  );
};


export default Controls;