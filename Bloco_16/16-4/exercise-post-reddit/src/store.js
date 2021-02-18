import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/reducers'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;