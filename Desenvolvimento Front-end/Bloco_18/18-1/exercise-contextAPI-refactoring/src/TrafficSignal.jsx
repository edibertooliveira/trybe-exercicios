// src/TrafficSignal.jsx

import React from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import { SignalContext } from './contexts/signalContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = (props) => {
  return (
    <div>
      <SignalContext.Consumer>
        {({ color, changeSignal }) => (
          <div className="button-container">
            <div className="control">
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
        )}
      </SignalContext.Consumer>
    </div>
  );
};

export default TrafficSignal;
