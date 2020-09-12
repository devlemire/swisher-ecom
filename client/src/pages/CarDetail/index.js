import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Components
import Loader from "react-loader-spinner";
import ActionButton from "components/ActionButton";
import ActionSpan from "components/ActionSpan";

// Styles
import {
  CarDetailContainer,
  Row,
  CarPreview,
  CarMetaData,
  CarDescription,
  CarColor,
  ActionsContainer,
} from "./style";

// Routes
import { routes } from "utils/router";
import { useHistory } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { addToCart } from "store/cart";

function CarDetail({
  match,

  // Redux
  inCartLookup,
  addToCart,
}) {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [carObj, setCarObj] = useState({});

  useEffect(() => {
    async function fetchCar() {
      try {
        const carId = match.params.carId;
        const { data } = await axios.get(`/api/v1/cars/${carId}`);

        setCarObj(data);
      } catch (err) {
        console.error("Failed to fetch the car:", err);
      } finally {
        setIsLoading(false);
      }
    }

    if (isLoading) {
      fetchCar();
    }
  }, [isLoading, match.params.carId]);

  const handleBrowseOther = () => {
    history.push(routes.home);
  };

  const handleAddToCart = () => {
    addToCart(carObj);
  };

  return (
    <CarDetailContainer>
      {isLoading && (
        <Loader type="Bars" color="#00BFFF" height={80} width={80} />
      )}

      {!isLoading && Object.keys(carObj).length === 0 && (
        <p>Uh oh! We could not find this car!</p>
      )}

      {!isLoading && Object.keys(carObj).length > 0 && (
        <Row>
          <CarPreview src="https://via.placeholder.com/350" alt="car" />

          <CarMetaData>
            <Row style={{ fontSize: "21px" }}>
              <p>
                {carObj.carModelYear} {carObj.carMake} - {carObj.carModel}
              </p>

              <p style={{ marginLeft: "24px" }}>$ {carObj.carPrice}</p>
            </Row>

            <CarDescription>{carObj.carDescription}</CarDescription>

            <CarColor>Car Color: {carObj.carColor}</CarColor>

            <ActionsContainer>
              <ActionButton
                disabled={!!inCartLookup[carObj.carId]}
                onClick={handleAddToCart}
              >
                Add to cart
              </ActionButton>

              <ActionSpan
                style={{ marginLeft: "8px" }}
                onClick={handleBrowseOther}
              >
                Browse other cars
              </ActionSpan>
            </ActionsContainer>
          </CarMetaData>
        </Row>
      )}
    </CarDetailContainer>
  );
}

CarDetail.propTypes = {
  match: PropTypes.object.isRequired,

  // Redux
  inCartLookup: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default connect(
  (state) => {
    const store = state.cart;

    return {
      inCartLookup: store.cart.inCartLookup,
    };
  },
  { addToCart }
)(CarDetail);
