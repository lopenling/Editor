import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const ImageWithPlaceholder = ({ src, alt,title='',onClick=()=>{} }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      setLoading(false);
    };

    return () => {
      image.onload = null;
    };
  }, [src]);

  return (
    <div style={{ position: 'relative', height: 80, width: 80 }}>
      {loading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f2f2f2', // Placeholder background color
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spinner/>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        title={title}
        onClick={onClick}
        style={{ display: loading ? 'none' : 'block' }}
        loading="lazy"
        className="w-full cursor-pointer object-contain"
      />
    </div>
  );
};

export default ImageWithPlaceholder;
