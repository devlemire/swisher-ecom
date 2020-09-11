import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Components
import Loader from "react-loader-spinner";
import CarPanel from "./components/CarPanel";

// Styles
import { CarsContainer } from "./style";

export default function CarShowCase({ type }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      const { data } = await axios.get(`/api/v1/cars/${type}`);
      setCars(data);
      setIsLoading(false);
    }

    if (isLoading) {
      fetchCars();
    }
  }, [type, isLoading]);

  return (
    <div>
      {isLoading && (
        <Loader type="Bars" color="#00BFFF" height={80} width={80} />
      )}

      {!isLoading && cars.length === 0 && (
        <p>Nothing here yet... check back later!</p>
      )}

      {!isLoading && cars.length > 0 && (
        <CarsContainer>
          {cars.map((carObj, carIndex) => (
            <CarPanel key={`car-${type}-${carIndex}`} carObj={carObj} />
          ))}
        </CarsContainer>
      )}
    </div>
  );
}

CarShowCase.propTypes = {
  type: PropTypes.string.isRequired,
};
