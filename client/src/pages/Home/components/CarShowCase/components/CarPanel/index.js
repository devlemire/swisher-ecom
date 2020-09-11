import React from "react";
import PropTypes from "prop-types";

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

export default function CarPanel({ carObj }) {
  console.log("carObj", carObj);

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

      <ActionButton style={{ width: "100%", marginTop: "16px" }}>
        Add to cart
      </ActionButton>

      <ActionButton style={{ width: "100%", marginTop: "8px" }} inverse>
        More Details
      </ActionButton>
    </CarPanelContainer>
  );
}

CarPanel.propTypes = {
  carObj: PropTypes.object.isRequired,
};
