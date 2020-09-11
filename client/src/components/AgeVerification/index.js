import React from "react";
import PropTypes from "prop-types";

// Styles
import {
  AgeVerificationContainer,
  Backdrop,
  Modal,
  ActionsContainer,
  GlobalStyle,
} from "./style";

// Components
import ActionButton from "components/ActionButton";
import ActionSpan from "components/ActionSpan";

export default function AgeVerification({ setAgeVerified }) {
  const handleVerify = () => {
    setAgeVerified(true);
    window.sessionStorage.setItem("verified", "true");
  };

  const handleUnderAge = () => {
    window.history.back();
  };

  return (
    <AgeVerificationContainer>
      <GlobalStyle />
      <Backdrop />

      <Modal>
        <h1>Age Verification</h1>

        <p>
          Whoa there! Before we can continue, please verify that you are at
          least 21 years of age.
        </p>

        <ActionsContainer>
          <ActionButton onClick={handleVerify}>Verify</ActionButton>

          <ActionSpan style={{ marginLeft: "8px" }} onClick={handleUnderAge}>
            Go back
          </ActionSpan>
        </ActionsContainer>
      </Modal>
    </AgeVerificationContainer>
  );
}

AgeVerification.propTypes = {
  setAgeVerified: PropTypes.func.isRequired,
};
