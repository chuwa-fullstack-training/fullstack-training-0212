import React from 'react';
import TodoApp from './hw1';
import { Provider } from 'react-redux';
import store from './store'; // Import the store from Redux Toolkit

const App = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

export default App;
