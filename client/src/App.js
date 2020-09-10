import React, { useState } from "react";

// Components
import AgeVerification from "components/AgeVerification";
import NavBar from "components/NavBar";

// Router
import router from "./utils/router";

// Styles
import { AppContainer, PageContainer } from "./appStyles";

export default function App() {
  const handleGetVerified = () => {
    if (window.sessionStorage) {
      if (window.sessionStorage.getItem("verified") === "true") {
        return true;
      }

      return false;
    }

    return false;
  };

  const [ageVerified, setAgeVerified] = useState(handleGetVerified());

  return (
    <AppContainer>
      {!ageVerified && <AgeVerification setAgeVerified={setAgeVerified} />}

      <NavBar />

      <PageContainer>{router}</PageContainer>
    </AppContainer>
  );
}
