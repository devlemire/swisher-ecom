import React from "react";

// Styles
import { NavBarContainer, RightSide } from "./style";

export default function NavBar() {
  return (
    <NavBarContainer>
      <p>Catch A Ride!</p>

      <RightSide>
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
      </RightSide>
    </NavBarContainer>
  );
}
