import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Components
import Loader from "react-loader-spinner";

import { showCaseTypes } from "../../index";

export default function CarShowCase({ type }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      const { data } = await axios.get(`/api/v1/cars/${type}`);
      console.log("data", data);
    }

    fetchCars();
  }, []);

  return (
    <div>
      {isLoading && (
        <Loader type="Bars" color="#00BFFF" height={80} width={80} />
      )}

      {!isLoading && <p>I am CarShowCase</p>}
    </div>
  );
}

CarShowCase.propTypes = {
  type: PropTypes.string.isRequired,
};
