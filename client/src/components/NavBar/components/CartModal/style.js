import styled from "styled-components";

export const CartModalContainer = styled.div`
  width: 400px;
  padding: 24px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: black;
  border-radius: 4px;
  height: 500px;

  position: fixed;
  right: 24px;
  top: 55px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-size: 21px;
  }
`;

export const CartModalTop = styled.div`
  width: 100%;
  flex: 1;
  max-height: 386px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CarsInCartContainer = styled.div`
  overflow: auto;
  width: 100%;
  margin-top: 24px;
  padding-right: 16px;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
