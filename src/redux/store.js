import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import rootReducers from './modules';

const configureStore = (reducers = {}, preLoadedState = {}, middlewares = []) => createStore(
  combineReducers(
    ...rootReducers,
    ...reducers
  ),
  preLoadedState,
  compose(
    applyMiddleware(
      ...middlewares,
      thunk,
      ReduxLogger
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default configureStore;
