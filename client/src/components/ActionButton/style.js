import styled from "styled-components";

export const StyledActionButton = styled.button`
  background-color: ${(p) => (p.inverse ? "white" : "#0d47a1")};
  color: ${(p) => (p.inverse ? "#0d47a1" : "white")};
  border: ${(p) => (p.inverse ? "1px solid #0d47a1" : "none")};

  border-radius: 4px;
  padding: 8px;
  user-select: none;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;
