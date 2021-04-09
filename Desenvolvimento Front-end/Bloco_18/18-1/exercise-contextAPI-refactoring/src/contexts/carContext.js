import React, { createContext } from 'react';

export const CarContext = createContext();

// export function CarContextProvider({ children }, ...restProps) {
//   const [red, setRed] = React.useState(false);
//   const [blue, setBlue] = React.useState(false);
//   const [yellow, setYellow] = React.useState(false);

//   function moveCar(color, bool) {
//     switch (color) {
//       case 'red':
//         setRed(bool);
//         break;
//       case 'blue':
//         setBlue(bool);
//         break;
//       default:
//         setYellow(bool);
//         break;
//     }
//   }

//   return (
//     <CarContext.Provider
//       value={{
//         red,
//         blue,
//         yellow,
//         moveCar,
//       }}
//     >
//       {children}
//     </CarContext.Provider>
//   );
// }

const initialState = {
  cars: {
    red: false,
    blue: true,
    yellow: false,
  },
};

export class CarContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(color, bool) {
    this.setState((state) => ({
      ...state,
      [color]: bool,
    }));
  }

  render() {
    const { children } = this.props;
    return (
      <CarContext.Provider
        value={{
          ...this.state,
          moveCar: this.moveCar,
        }}
      >
        {children}
      </CarContext.Provider>
    );
  }
}
