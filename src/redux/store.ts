import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = [thunk];
const appliedMiddlewares = applyMiddleware(...middlewares);

export const createReduxStore = (preloadedState = {}) => {
  return createStore(
    reducers,
    preloadedState,
    appliedMiddlewares,
  );
};
