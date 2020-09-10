import React from "react";

// Styles
import { NavBarContainer, RightSide } from "./style";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// Route Links
import { Link } from "react-router-dom";
import { routes } from "utils/router";

export default function NavBar() {
  return (
    <NavBarContainer>
      <h1 style={{ fontSize: "21px" }}>Catch A Ride!</h1>

      <RightSide>
        <Link to={routes.home}>Home</Link>

        <Link to={routes.cars}>Cars</Link>

        <FontAwesomeIcon icon={faShoppingCart} />
      </RightSide>
    </NavBarContainer>
  );
}
