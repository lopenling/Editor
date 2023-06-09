import React, { FC } from 'react';
interface FCButton extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: true | false | undefined;
  type: 'submit' | 'button' | 'reset';
}

export const Button: FC<FCButton> = ({ label = '', ...props }) => {
  let color = props.type === 'submit' ? 'bg-green-400' : 'bg-transparent';
  let disabled = props.disabled === null ? false : props.disabled;
  let textColor = props.type === 'submit' ? 'text-white' : 'text-black';
  return (
        <button
          className={`${color} ${textColor} cursor-pointer rounded-lg px-3 py-2 text-center text-xs  font-medium  focus:outline-none focus:ring-4 `}
      disabled={disabled}
          {...props}
        >
          {label}
        </button>
  );
};
