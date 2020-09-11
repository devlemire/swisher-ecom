import styled from "styled-components";

export const CarPanelContainer = styled.div`
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 24px;
  margin: 8px;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CarPreview = styled.div`
  width: 100%;

  img {
    width: 100%;
    border-radius: 4px;
  }
`;

export const CarHeader = styled.div`
  width: 100%;
  margin-top: 4px;
  font-size: 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
