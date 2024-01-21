import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './modules/rootReducer';
import { thunk } from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
