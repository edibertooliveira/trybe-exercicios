import React, { createContext } from 'react';

export const SignalContext = createContext();

const initialState = { color: 'red' }

export class SignalContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(color) {
    this.setState((state) => ({
      ...state,
      color
    }));
  }

  render() {
    const { children } = this.props;
    return (
      <SignalContext.Provider
        value={{
          ...this.state,
          changeSignal: this.changeSignal,
        }}
      >
        {children}
      </SignalContext.Provider>
    );
  }
}