import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import appReducer from '../reducers';

export default function configureStore(initialState) {
  const middleware = [thunk];
  return createStore(
    appReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
}
