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

  p {
    :not(:last-of-type) {
      margin-right: 8px;
    }
  }
`;
