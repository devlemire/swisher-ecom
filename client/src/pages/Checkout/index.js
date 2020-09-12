import React from "react";
import PropTypes from "prop-types";

// Components
import CarLineItem from "components/CarLineItem";
import ActionButton from "components/ActionButton";

// Styles
import { CheckoutContainer, CarsContainer } from "./style";

// Redux
import { connect } from "react-redux";
import { checkout } from "store/cart";

function Checkout({
  // Redux
  cart,
  cartInitialized,
  checkout,
}) {
  return (
    cartInitialized && (
      <CheckoutContainer>
        <h1>Checkout</h1>

        {cart.carsInCart.length === 0 && (
          <p style={{ marginTop: "24px" }}>Uh oh! Your cart is empty</p>
        )}

        {cart.carsInCart.length > 0 && (
          <CarsContainer>
            {cart.carsInCart.map((carObj) => (
              <CarLineItem key={`car-${carObj.carId}`} carObj={carObj} />
            ))}
          </CarsContainer>
        )}

        <p style={{ marginTop: "24px" }}>Total: $ {cart.total}</p>

        <ActionButton
          disabled={cart.carsInCart.length === 0}
          style={{ marginTop: "24px" }}
          onClick={(e) => checkout()}
        >
          Checkout
        </ActionButton>
      </CheckoutContainer>
    )
  );
}

Checkout.propTypes = {
  // Redux
  cartInitialized: PropTypes.bool.isRequired,
  cart: PropTypes.object.isRequired,
  checkout: PropTypes.func.isRequired,
};

export default connect(
  (state) => {
    const store = state.cart;

    return {
      cartInitialized: store.initialized,
      cart: store.cart,
    };
  },
  { checkout }
)(Checkout);
