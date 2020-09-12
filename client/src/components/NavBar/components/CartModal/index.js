import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Components
import ActionButton from "components/ActionButton";
import CarLineItem from "components/CarLineItem";

// Styles
import {
  CartModalContainer,
  CartModalTop,
  CarsInCartContainer,
  Row,
} from "./style";

// Redux
import { connect } from "react-redux";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// Routing
import { useHistory } from "react-router-dom";
import { routes } from "utils/router";

function CartModal({
  onClose,
  openCartModalRef,

  // Redux
  carsInCart,
  totalPrice,
}) {
  const history = useHistory();
  const [totalCarCount, setTotalCarCount] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    let carCount = 0;

    carsInCart.forEach((carObj) => {
      carCount += carObj.quantity;
    });

    setTotalCarCount(carCount);
  }, [carsInCart]);

  useEffect(() => {
    function handleMouseDown(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        !openCartModalRef.current.contains(event.target)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [onClose, openCartModalRef]);

  const handleViewCheckout = () => {
    history.push(routes.checkout);
    onClose();
  };

  return (
    <CartModalContainer ref={containerRef}>
      <CartModalTop>
        <Row>
          <h1>
            Your cart
            {carsInCart.length > 0
              ? ` - ${totalCarCount} car${
                  totalCarCount > 1 ? "s" : ""
                } ($ ${totalPrice})`
              : ""}
          </h1>

          <FontAwesomeIcon
            icon={faTimes}
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </Row>

        {carsInCart.length === 0 && <p>Uh oh! Your cart is empty.</p>}

        {carsInCart.length > 0 && (
          <CarsInCartContainer>
            {carsInCart.map((carObj, cartIndex) => (
              <CarLineItem key={`car-${carObj.carId}`} carObj={carObj} />
            ))}
          </CarsInCartContainer>
        )}
      </CartModalTop>

      <ActionButton
        inverse
        style={{ width: "100%", marginTop: "24px" }}
        disabled={carsInCart.length === 0}
        onClick={handleViewCheckout}
      >
        View Checkout
      </ActionButton>
    </CartModalContainer>
  );
}

CartModal.propTypes = {
  totalPrice: PropTypes.string.isRequired,
  carsInCart: PropTypes.array.isRequired,
  openCartModalRef: PropTypes.object.isRequired,
};

export default connect((state) => {
  const store = state.cart;

  return {
    totalPrice: store.cart.total,
    carsInCart: store.cart.carsInCart,
  };
}, {})(CartModal);
