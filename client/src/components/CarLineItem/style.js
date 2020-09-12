import styled from "styled-components";

export const CarLineItemContainer = styled.div`
  border-bottom: 1px solid #cccccf;
  padding-bottom: 16px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  :not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const CarMetaData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
