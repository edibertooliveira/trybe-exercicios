import { createStore, combineReducers } from 'redux';
import { CHANGE_SIGNAL, MOVE_CAR } from './actionCreators';

const inicialStateCar = {
  cars: {
    red: false,
    blue: false,
    yellow: false
  }
}

const inicialStateSignal = {
  color: 'red'
}

const carReducer = (state = inicialStateCar, action) => {
  switch (action.type) {
    case MOVE_CAR:
      return {...state, cars: {...state.cars,[action.car]: action.bool}}       
    default:
      return state
  }
}

const signalReducer = (state = inicialStateSignal, action) => {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return {...state, color: action.color}       
    default:
      return state
  }
}

const rootReducer = combineReducers({
  carReducer,
  signalReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
