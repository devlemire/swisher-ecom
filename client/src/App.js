import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

// Components
import AgeVerification from "components/AgeVerification";
import NavBar from "components/NavBar";

// Router
import router from "./utils/router";

// Styles
import { AppContainer, PageContainer } from "./appStyles";

// Redux
import { connect } from "react-redux";
import { initializeCart } from "store/cart";

function App({
  // Redux
  cartInitialized,
  initializeCart,
}) {
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

  useEffect(() => {
    if (cartInitialized === false) {
      initializeCart();
    }
  }, [cartInitialized, initializeCart]);

  return (
    <AppContainer>
      {!ageVerified && <AgeVerification setAgeVerified={setAgeVerified} />}

      {cartInitialized && (
        <Fragment>
          <NavBar />
          <PageContainer>{router}</PageContainer>
        </Fragment>
      )}
    </AppContainer>
  );
}

App.propTypes = {
  // Redux
  cartInitialized: PropTypes.bool.isRequired,
  initializeCart: PropTypes.func.isRequired,
};

export default connect(
  (state) => {
    const cartStore = state.cart;

    return {
      cartInitialized: cartStore.initialized,
    };
  },
  { initializeCart }
)(App);
