import React from 'react';

const ToolButton = ({ children, isActive, disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`text-gray-600 shadow px-2 py-1 rounded-sm ${
        isActive ? 'bg-gray-400' : 'bg-white'
      } disabled:opacity-70`}
    >
      {children}
    </button>
  );
};

export default ToolButton;
