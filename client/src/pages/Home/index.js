import React from "react";

// Styles
import { HomeContainer } from "./style";

// Components
import CarShowCase from "./components/CarShowCase";

export const showCaseTypes = {
  featured: "featured",
  nearYou: "nearYou",
  hotDeal: "hotDeal",
};

export default function Home() {
  return (
    <HomeContainer>
      <h1>Featured Cars</h1>
      <CarShowCase type={showCaseTypes.featured} />

      <h1>Cars near you</h1>
      <CarShowCase type={showCaseTypes.nearYou} />

      <h1>Hot Deals</h1>
      <CarShowCase type={showCaseTypes.hotDeal} />
    </HomeContainer>
  );
}
