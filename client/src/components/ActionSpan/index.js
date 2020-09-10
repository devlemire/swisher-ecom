import React from "react";

// Styles
import { StyledActionSpan } from "./style";

export default function ActionSpan({ children, ...other }) {
  return <StyledActionSpan {...other}>{children}</StyledActionSpan>;
}
