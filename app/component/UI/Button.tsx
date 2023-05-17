import React, { FC } from "react";
interface FCButton extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  type: "submit" | "button" | "reset";
}

export const Button: FC<FCButton> = ({ label = "", ...props }) => {
  let color = props.type === "submit" ? "bg-green-400" : "bg-gray-300";
  let textColor = props.type === "submit" ? "text-white" : "text-black";
  return (
    <button
      className={`${color} ${textColor} cursor-pointer px-3 py-2 text-xs font-medium text-center  rounded-lg  focus:ring-4 focus:outline-none`}
      {...props}
    >
      {label}
    </button>
  );
};
