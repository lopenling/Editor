import React from 'react';

const ToolButton = ({ children, isActive, ...props }: any) => {
  return (
    <button
      {...props}
      className={`text-gray-600 shadow px-2 py-1 rounded-sm ${
        isActive ? 'bg-gray-400' : 'bg-white'
      } disabled:opacity-70`}
    >
      {children}
    </button>
  );
};

export default ToolButton;
