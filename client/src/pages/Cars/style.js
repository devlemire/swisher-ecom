import styled from "styled-components";

export const CarsByMakeContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CarMake = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1 {
    font-size: 26px;
    width: 100%;
    position: sticky;
    top: 47px;
    left: 0px;
    background-color: #f4f4f4;
  }
`;

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
