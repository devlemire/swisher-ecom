import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Loader from "react-loader-spinner";
import CarPanel from "components/CarPanel";

// Style
import { CarsByMakeContainer, CarMake, CarsContainer } from "./style";

export default function Cars() {
  const [uniqueCarMakes, setUniqueCarMakes] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUniqueCarMakes() {
      try {
        const { data } = await axios.get("/api/v1/cars/uniqueCarMakes");
        setUniqueCarMakes(data);
      } catch (err) {
        console.error("Failed to fetch the unique car makes:", err);
      } finally {
        setIsLoading(false);
      }
    }

    if (isLoading) {
      fetchUniqueCarMakes();
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading && (
        <Loader type="Bars" color="#00BFFF" height={80} width={80} />
      )}

      {!isLoading && Object.keys(uniqueCarMakes).length === 0 && (
        <p>Uh oh! We could not load the data for this page!</p>
      )}

      {!isLoading && Object.keys(uniqueCarMakes).length > 0 && (
        <CarsByMakeContainer>
          {Object.keys(uniqueCarMakes).map((carMakeKey) => {
            const uniqueCarMakeObj = uniqueCarMakes[carMakeKey];

            return (
              <CarMake key={`carMake-${carMakeKey}`}>
                <h1>{carMakeKey}</h1>

                <CarsContainer>
                  {uniqueCarMakeObj.cars.map((carObj, carIndex) => (
                    <CarPanel
                      key={`car-${carMakeKey}-${carIndex}`}
                      carObj={carObj}
                    />
                  ))}
                </CarsContainer>
              </CarMake>
            );
          })}
        </CarsByMakeContainer>
      )}
    </div>
  );
}
