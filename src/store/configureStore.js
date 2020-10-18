import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    initialState,
    applyMiddleware(thunk),
  );
}
