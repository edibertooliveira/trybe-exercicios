import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

function TrafficSignal(props) {
    const { color, setColor: changeSignal } = useContext(CarsContext);
    return (
      <div>
        <div className="button-container">
          <button onClick={() => changeSignal('red')} type="button">
            Red
          </button>
          <button onClick={() => changeSignal('yellow')} type="button">
            Yellow
          </button>
          <button onClick={() => changeSignal('green')} type="button">
            Green
          </button>
        </div>
        <img className="signal" src={renderSignal(color)} alt="" />
      </div>
    );
}

TrafficSignal.contextType = CarsContext;

export default TrafficSignal;
