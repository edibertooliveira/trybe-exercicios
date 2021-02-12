import { createStore } from 'redux';
import rootReducer from '../reducers/index.reducer';

const store = createStore(rootReducer)

export default store;