import Cypress from 'cypress';
import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

declare global {
  interface Window {
    Cypress?: Cypress.Cypress;
    store: ReturnType<typeof createStore>;
  }
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if (window.Cypress) {
  window.store = store;
}

export default store;
