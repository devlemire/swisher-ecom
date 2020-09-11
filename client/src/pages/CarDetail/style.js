import styled from "styled-components";

export const CarDetailContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CarPreview = styled.img`
  height: 350px;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CarMetaData = styled.div`
  width: 100%;
  margin-left: 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CarDescription = styled.p`
  margin-top: 16px;
  font-size: 16px;
`;

export const CarColor = styled.p`
  margin-top: 16px;
  margin-bottom: 0px;
  font-size: 16px;
`;

export const ActionsContainer = styled.div`
  margin-top: 24px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
