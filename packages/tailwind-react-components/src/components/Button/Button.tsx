import React from "react";
import { RButtonProps } from "./Button.types";

export const RButton: React.FC<RButtonProps> = ({
  label,
  onClick,
  primary,
  secondary,
  styles,
}) => {
  let className = "px-4 py-2 rounded";
  if (styles) {
    className += ` ${styles}`;
  } else {
    className += " text-sm";
  }
  if (primary) {
    className += " bg-blue-500 text-white";
  } else if (secondary) {
    className += " bg-gray-500 text-white";
  } else {
    className += " bg-gray-200 text-black";
  }

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default RButton;
