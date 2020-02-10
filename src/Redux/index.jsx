import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ReduxCounter from './ReduxCounter';

const Redux = () => (
  <Provider store={store}>
    <ReduxCounter />
  </Provider>
);

export default Redux;
