import React from "react";
import Button from "@mui/material/Button";
import { RButtonProps } from "./Button.types";

export const RButton: React.FC<RButtonProps> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default RButton;
