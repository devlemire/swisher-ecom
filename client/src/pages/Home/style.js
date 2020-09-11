import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1 {
    font-size: 21px;

    :not(:first-of-type) {
      margin-top: 60px;
    }
  }
`;
