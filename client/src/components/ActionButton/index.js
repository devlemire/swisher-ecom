import React from "react";

// Styles
import { StyledActionButton } from "./style";

export default function ActionButton({ children, ...other }) {
  return <StyledActionButton {...other}>{children}</StyledActionButton>;
}
