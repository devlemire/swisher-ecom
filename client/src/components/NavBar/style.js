import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100%;
  background-color: #53b3cb;
  padding: 8px 16px;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
