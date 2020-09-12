import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import ActionButton from "components/ActionButton";
import CarLineItem from "./components/CarLineItem";

// Styles
import { CartModalContainer, CartModalTop, CarsInCartContainer } from "./style";

// Redux
import { connect } from "react-redux";

function CartModal({ carsInCart, totalPrice }) {
  const [totalCarCount, setTotalCarCount] = useState(0);

  useEffect(() => {
    let carCount = 0;

    carsInCart.forEach((carObj) => {
      carCount += carObj.quantity;
    });

    setTotalCarCount(carCount);
  }, [carsInCart]);

  return (
    <CartModalContainer>
      <CartModalTop>
        <h1>
          Your cart
          {carsInCart.length > 0
            ? ` - ${totalCarCount} car${
                totalCarCount > 1 ? "s" : ""
              } ($ ${totalPrice})`
            : ""}
        </h1>

        {carsInCart.length === 0 && <p>Uh oh! Your cart is empty.</p>}

        {carsInCart.length > 0 && (
          <CarsInCartContainer>
            {carsInCart.map((carObj, cartIndex) => (
              <CarLineItem
                key={`car-${carObj.carId}`}
                carObj={carObj}
                cartIndex={cartIndex}
              />
            ))}
          </CarsInCartContainer>
        )}
      </CartModalTop>

      <ActionButton
        inverse
        style={{ width: "100%", marginTop: "24px" }}
        disabled={carsInCart.length === 0}
      >
        View Checkout
      </ActionButton>
    </CartModalContainer>
  );
}

CartModal.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  carsInCart: PropTypes.array.isRequired,
};

export default connect((state) => {
  const store = state.cart;

  return {
    totalPrice: store.total,
    carsInCart: store.carsInCart,
  };
}, {})(CartModal);
