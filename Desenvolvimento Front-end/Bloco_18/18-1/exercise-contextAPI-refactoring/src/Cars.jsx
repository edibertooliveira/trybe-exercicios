// src/Cars.jsx

import React, { useContext } from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { CarContext } from './contexts/carContext';

function Cars(props) {
  // const {
  // red: redCar, blue: blueCar, yellow: yellowCar, moveCar
  // } = useContext(CarContext);
  return (
    <CarContext.Consumer>
      {({red: redCar, blue: blueCar, yellow: yellowCar, moveCar}) => {
        return (
          <div>
            <div>
              <img
                className={redCar ? 'car-right' : 'car-left'}
                src={carRed}
                alt="red car"
              />
              <button onClick={() => moveCar('red', !redCar)} type="button">
                Move
              </button>
            </div>
            <div>
              <img
                className={blueCar ? 'car-right' : 'car-left'}
                src={carBlue}
                alt="blue car"
              />
              <button onClick={() => moveCar('blue', !blueCar)} type="button">
                Move
              </button>
            </div>
            <div>
              <img
                className={yellowCar ? 'car-right' : 'car-left'}
                src={carYellow}
                alt="yellow car"
              />
              <button onClick={() => moveCar('yellow', !yellowCar)} type="button">
                Move
              </button>
            </div>
          </div>
        );
      }}
    </CarContext.Consumer>
  );
}

export default Cars;