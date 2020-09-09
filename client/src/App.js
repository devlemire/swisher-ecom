import React from "react";

// Router
import router from "./utils/router";

// Styles
import { AppContainer } from "./appStyles";

export default function App() {
  return (
    <AppContainer>
      <p>I am App</p>
      {router}
    </AppContainer>
  );
}
