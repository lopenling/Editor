import React, { ReactElement } from 'react';

interface ButtonGroupProps {
  children: ReactElement[] | ReactElement;
  className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className }) => {
  return (
    <div className={'inline-flex ' + className ?? ''}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          // Clone the child element, adding additional props or modifying existing ones
          return React.cloneElement(child, {
            className: `${child.props.className} ${
              index !== React.Children.count(children) - 1 ? 'rounded-r-none' : ''
            } ${index !== 0 ? 'rounded-l-none' : ''} `,
            // Add other props or logic as necessary
          });
        }
        return child;
      })}
    </div>
  );
};

export default ButtonGroup;
