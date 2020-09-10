import React from "react";
import PropTypes from "prop-types";

// Styles
import {
  AgeVerificationContainer,
  Backdrop,
  Modal,
  ActionsContainer,
} from "./style";

// Components
import ActionButton from "components/ActionButton";
import ActionSpan from "components/ActionSpan";

export default function AgeVerification({ setAgeVerified }) {
  const handleVerify = () => {
    setAgeVerified(true);
    window.sessionStorage.setItem("verified", "true");
  };

  return (
    <AgeVerificationContainer>
      <Backdrop />

      <Modal>
        <h1>Age Verification</h1>

        <p>
          Whoa there! Before we can continue, please verify that you are at
          least 21 years of age.
        </p>

        <ActionsContainer>
          <ActionButton onClick={handleVerify}>Verify</ActionButton>
          <ActionSpan style={{ marginLeft: "8px" }}>Go back</ActionSpan>
        </ActionsContainer>
      </Modal>
    </AgeVerificationContainer>
  );
}

AgeVerification.propTypes = {
  setAgeVerified: PropTypes.func.isRequired,
};
