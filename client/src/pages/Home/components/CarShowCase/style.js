import styled from "styled-components";

export const CarsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media only screen and (max-width: 1280px) {
    justify-content: center;
  }
`;
