import React from "react";
import PropTypes from "prop-types";

// Styles
import { CarLineItemContainer, CarMetaData, Row } from "./style";

// Redux
import { connect } from "react-redux";
import { updateQuantityOfCartItem, removeFromCart } from "store/cart";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function CarLineItem({
  carObj,
  cartIndex,

  // Redux
  updateQuantityOfCartItem,
  removeFromCart,
}) {
  const handleUpdateQuantity = (e) => {
    const quantity = Number(e.target.value);
    updateQuantityOfCartItem(cartIndex, quantity);
  };

  const handleRemove = () => {
    removeFromCart(cartIndex);
  };

  return (
    <CarLineItemContainer>
      <img src="https://via.placeholder.com/100" alt="car" />

      <CarMetaData>
        <Row style={{ justifyContent: "space-between" }}>
          <p>
            {carObj.carModelYear} {carObj.carMake} - {carObj.carModel}
          </p>

          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={faTrashAlt}
            onClick={handleRemove}
          />
        </Row>

        <p>Color: {carObj.carColor}</p>

        <Row style={{ marginTop: "16px" }}>
          <p style={{ marginRight: "8px" }}>Quantity: </p>

          <select onChange={handleUpdateQuantity}>
            {new Array(10).fill(null).map((nothing, index) => (
              <option key={`select-option-${index}`} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>

          <p style={{ marginLeft: "4px" }}>x $ {carObj.carPrice}</p>
        </Row>
      </CarMetaData>
    </CarLineItemContainer>
  );
}

CarLineItem.propTypes = {
  carObj: PropTypes.object.isRequired,
  cartIndex: PropTypes.number.isRequired,

  // Redux,
  updateQuantityOfCartItem: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default connect(
  (state) => {
    return {};
  },
  { updateQuantityOfCartItem, removeFromCart }
)(CarLineItem);
