import React from "react";
// import Button from "@mui/material/Button";
import { RButtonProps } from "./Button.types";
import { Root, classes } from "./Button.styles";

export const RButton: React.FC<RButtonProps> = ({ children, ...rest }) => {
  return (
    <Root
      className={classes.root}
      startIcon={rest.startIcon}
      endIcon={rest.endIcon}
      size={rest.size}
      variant={rest.variant}
      color={rest.color}
      onClick={rest.onClick}
      disabled={rest.disabled}
      type={rest.type}
      href={rest.href}
      fullWidth={rest.fullWidth}
      disableElevation={rest.disableElevation}
      disableRipple={rest.disableRipple}
      {...rest}
    >
      {children}
    </Root>
  );
};

export default RButton;
