import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { ButtonWithLoadingSpinnerProps } from "./ButtonWithLoadingSpinner.types";

export const ButtonWithLoadingSpinner: React.FC<
  ButtonWithLoadingSpinnerProps
> = ({ onClick, loading, children, disabled, className }) => {
  return (
    <Button
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
    </Button>
  );
};

export default ButtonWithLoadingSpinner;
