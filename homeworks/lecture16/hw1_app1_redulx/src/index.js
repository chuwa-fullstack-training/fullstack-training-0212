
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './Todo';
import { Provider } from 'react-redux';
import { store } from './Todo'; // Import the store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>
);

