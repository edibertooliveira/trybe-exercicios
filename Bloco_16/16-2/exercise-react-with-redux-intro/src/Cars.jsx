import React from 'react';
import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { moveCar } from './redux/actionCreators';

function Cars({
  redCar, blueCar, yellowCar, moveCar,
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => moveCar('red', !redCar)} type="button">move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => moveCar('blue', !blueCar)} type="button">move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => moveCar('yellow', !yellowCar)} type="button">move</button>
      </div>
    </div>
  );

}
  const mapDispatchToProps = (dispatch) => ({
    moveCar: (color, bool) => dispatch(moveCar(color, bool))
  })

  const mapStateToProps = (state) => ({
    redCar: state.carReducer.cars.red, 
    blueCar: state.carReducer.cars.blue, 
    yellowCar: state.carReducer.cars.yellow
  })

  export default connect(mapStateToProps, mapDispatchToProps)(Cars)
