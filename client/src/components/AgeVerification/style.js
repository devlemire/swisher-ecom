import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html body {
    overflow: hidden;
  }
`;

export const AgeVerificationContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.4;
`;

export const Modal = styled.div`
  max-width: 400px;
  padding: 24px;
  background-color: white;
  position: absolute;
  border-radius: 4px;

  h1 {
    font-size: 21px;
  }

  p {
    margin-top: 8px;
    font-size: 16px;
  }
`;

export const ActionsContainer = styled.div`
  margin-top: 24px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
