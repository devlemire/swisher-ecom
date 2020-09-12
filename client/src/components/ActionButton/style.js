import styled from "styled-components";

export const StyledActionButton = styled.button`
  background-color: ${(p) => (p.inverse ? "white" : "#0d47a1")};
  color: ${(p) => (p.inverse ? "#0d47a1" : "white")};
  border: ${(p) => (p.inverse ? "1px solid #0d47a1" : "none")};
  opacity: ${(p) => (p.disabled ? "0.5" : "1")};
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};

  border-radius: 4px;
  padding: 8px;
  user-select: none;
  outline: none;

  :hover {
    opacity: ${(p) => (p.disabled ? "0.5" : "0.9")};
  }
`;
