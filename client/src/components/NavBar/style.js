import styled from "styled-components";

export const NavBarContainer = styled.div`
  z-index: 2;
  width: 100%;
  background-color: #0d47a1;
  padding: 8px 16px;
  color: white;
  box-shadow: ${(p) =>
    p.hideBoxShadow
      ? "none"
      : "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    color: white;
    font-size: 18px;
    cursor: pointer;
    text-decoration: underline;
    margin-right: 8px;
  }
`;
