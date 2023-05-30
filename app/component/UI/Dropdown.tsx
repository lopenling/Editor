import React, { useState } from "react";

interface DropdownProps {
  label: any;
  size: string;
  color: string;
  children: any;
}

const Dropdown = ({ label, size, color, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`relative inline-block ${
        size === "sm" ? "text-sm" : "text-base"
      } `}
    >
      <button
        type="button"
        className={` flex items-center justify-center space-x-2 rounded-lg border border-gray-200 px-3 py-2`}
        onClick={toggleDropdown}
      >
        {label}
      </button>
      {isOpen && (
        <div className="absolute mt-2 space-y-1 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 z-10">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onClick: () => {
                child.props.onClick();
                handleItemClick();
              },
              active: child.props.active,
            })
          )}
        </div>
      )}
    </div>
  );
};

interface DropdownItemProps {
  onClick: () => void;
  active: boolean;
  children: any;
}

const DropdownItem = ({ onClick, active, children }: DropdownItemProps) => {
  const itemClasses = `block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-700 dark:hover:text-white ${
    active ? "bg-green-300 dark:bg-gray-300 text-white" : ""
  }`;

  return (
    <button type="button" className={itemClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export { Dropdown, DropdownItem };
