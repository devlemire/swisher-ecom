import React, { memo } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

// Components
import ActionButton from "components/ActionButton";

// Styles
import {
  CarPanelContainer,
  CarPreview,
  CarHeader,
  CarDescription,
  CarColor,
} from "./style";

// Routes
import { routes } from "utils/router";

// Redux
import { connect } from "react-redux";
import { addToCart } from "store/cart";

let CarPanel = ({
  carObj,

  // Redux
  addToCart,
  inCartLookup,
}) => {
  const history = useHistory();

  const handleAddToCart = () => {
    addToCart(carObj);
  };

  const handleMoreDetail = () => {
    const routeWithParam = routes.carDetail.replace(":carId", carObj.carId);
    history.push(routeWithParam);
  };

  return (
    <CarPanelContainer>
      <CarPreview>
        <img src="https://via.placeholder.com/150" alt="car" />
      </CarPreview>

      <CarHeader>
        <p>
          {carObj.carModelYear} {carObj.carMake} - {carObj.carModel}
        </p>

        <p>$ {carObj.carPrice}</p>
      </CarHeader>

      <CarDescription>{carObj.carDescription}</CarDescription>

      <CarColor>Car Color: {carObj.carColor}</CarColor>

      <ActionButton
        style={{ width: "100%", marginTop: "16px" }}
        onClick={handleAddToCart}
        disabled={!!inCartLookup[carObj.carId]}
      >
        Add to cart
      </ActionButton>

      <ActionButton
        style={{ width: "100%", marginTop: "8px" }}
        inverse
        onClick={handleMoreDetail}
      >
        More Details
      </ActionButton>
    </CarPanelContainer>
  );
};

CarPanel = memo(CarPanel, (prevProps, nextProps) => {
  return nextProps.carObj.carId !== nextProps.reRenderCarId;
});

CarPanel.propTypes = {
  carObj: PropTypes.object.isRequired,

  // Redux
  addToCart: PropTypes.func.isRequired,
  inCartLookup: PropTypes.object.isRequired,
};

export default connect(
  (state) => {
    const store = state.cart;

    return {
      inCartLookup: store.inCartLookup,
      reRenderCarId: store.reRenderCarId,
    };
  },
  { addToCart }
)(CarPanel);
