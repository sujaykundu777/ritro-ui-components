import React from "react";
import { CircularProgress } from "@mui/material";
import { RButton } from "../../Button/Button";
import { ButtonWithLoadingSpinnerProps } from "./ButtonWithLoadingSpinner.types";

export const ButtonWithLoadingSpinner: React.FC<
  ButtonWithLoadingSpinnerProps
> = ({ onClick, loading, children, disabled, className }) => {
  return (
    <RButton
      onClick={onClick}
      variant="contained"
      color="primary"
      disabled={disabled || loading}
      className={className}
    >
      {loading ? (
        <CircularProgress size="20px" sx={{ marginLeft: "10px" }} />
      ) : (
        children
      )}
    </RButton>
  );
};

export default ButtonWithLoadingSpinner;
