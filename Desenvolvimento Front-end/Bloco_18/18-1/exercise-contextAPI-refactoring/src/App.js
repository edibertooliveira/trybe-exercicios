import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import { CarContextProvider } from './contexts/carContext';
import { SignalContextProvider } from './contexts/signalContext';

function App() {
  return (
    <div>
      <SignalContextProvider>
        <TrafficSignal />
      </SignalContextProvider>
      <CarContextProvider>
        <Cars />
      </CarContextProvider>
    </div>
  );
}

export default App;
