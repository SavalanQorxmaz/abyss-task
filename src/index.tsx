import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss'
import App from './App';
import { Provider } from 'react-redux/es/exports';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
