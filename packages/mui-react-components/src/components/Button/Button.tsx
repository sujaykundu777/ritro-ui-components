"use client";

import React, { ReactNode } from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface RButtonProps extends ButtonProps {
  children: ReactNode;
}

const RButton: React.FC<RButtonProps> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default RButton;
