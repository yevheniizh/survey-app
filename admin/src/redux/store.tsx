import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import firebaseAPI from './middlewares/firebaseAPI';
import rootReducer from './reducers';

const enhancer = applyMiddleware(thunk, firebaseAPI);

export default createStore(rootReducer, composeWithDevTools(enhancer));
