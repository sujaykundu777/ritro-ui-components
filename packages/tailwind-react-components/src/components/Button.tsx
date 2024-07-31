import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  primary?: boolean;
  secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, primary, secondary }) => {
  let className = 'px-4 py-2 rounded';

  if (primary) {
    className += ' bg-blue-500 text-white';
  } else if (secondary) {
    className += ' bg-gray-500 text-white';
  } else {
    className += ' bg-gray-200 text-black';
  }

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
