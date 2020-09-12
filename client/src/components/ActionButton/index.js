import React from "react";

// Styles
import { StyledActionButton } from "./style";

export default function ActionButton({
  children,
  onClick,
  disabled,
  ...other
}) {
  return (
    <StyledActionButton
      disabled={disabled}
      onClick={disabled ? () => {} : onClick}
      {...other}
    >
      {children}
    </StyledActionButton>
  );
}
