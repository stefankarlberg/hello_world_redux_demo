import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../state/store/configureStore';

const store = configureStore();
window.store = store

const Test = () => {
  return (
    <Provider store={store}>
    <h1>{store}</h1>
  </Provider>
  );
}
export default Test;

