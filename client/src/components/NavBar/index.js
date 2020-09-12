import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

// Components
import CartModal from "./components/CartModal";

// Styles
import { NavBarContainer, RightSide, CartModalLink } from "./style";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// Routing
import { Link } from "react-router-dom";
import { routes } from "utils/router";
import { useHistory } from "react-router-dom";

// Redux
import { connect } from "react-redux";

function NavBar({ cartLength }) {
  const history = useHistory();
  const openCartModalRef = useRef();

  const [cartModalVisible, setCartModalVisible] = useState(false);

  const handleToggleModalVisible = () =>
    setCartModalVisible((cartModalVisible) => !cartModalVisible);

  return (
    <NavBarContainer hideBoxShadow={history.location.pathname === routes.cars}>
      <h1 style={{ fontSize: "21px" }}>Catch A Ride!</h1>

      <RightSide>
        <Link to={routes.home}>Home</Link>

        <Link to={routes.cars}>Cars</Link>

        <CartModalLink
          onClick={handleToggleModalVisible}
          ref={openCartModalRef}
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ marginRight: "4px" }}
          />
          <p>View my Cart ({cartLength})</p>
        </CartModalLink>
      </RightSide>

      {cartModalVisible && (
        <CartModal
          onClose={() => setCartModalVisible(false)}
          openCartModalRef={openCartModalRef}
        />
      )}
    </NavBarContainer>
  );
}

NavBar.propTypes = {
  cartLength: PropTypes.number,
};

export default connect((state) => {
  const store = state.cart;

  return {
    cartLength: store.cart.carsInCart.reduce((total, next) => {
      return total + next.quantity;
    }, 0),
  };
}, {})(NavBar);
