import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import rootReducers from './modules';

const configureStore = (reducers = {}, preLoadedState = {}, middlewares = []) => createStore(
  combineReducers(
    ...rootReducers,
    ...reducers
  )
);

export default configureStore;
