import { combineReducers, createStore } from 'redux';
import { MOVE_CAR, CHANGE_SIGNAL } from './actionCreators';

const initialStateCar = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};
const initialStateSignal = {
  signal: {
    color: 'red',
  },
}
function carReducer(state = initialStateCar, action) {
  switch (action.type) {
    case MOVE_CAR:
      return { ...state, cars: { ...state.cars, [action.car]: action.side } };
    default:
      return state;
  }
}


function signalReducer(state = initialStateSignal, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  signalReducer,
  carReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
