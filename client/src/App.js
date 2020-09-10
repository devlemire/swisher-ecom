import React from "react";

// Components
import AgeVerification from "components/AgeVerification";
import NavBar from "components/NavBar";

// Router
import router from "./utils/router";

// Styles
import { AppContainer } from "./appStyles";

export default function App() {
  return (
    <AppContainer>
      {!ageVerified && <AgeVerification setAgeVerified={setAgeVerified} />}

      <NavBar />

      {router}
    </AppContainer>
  );
}
