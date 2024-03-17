import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import App from './App.jsx';

const appElement = document.getElementById('root');

Modal.setAppElement(appElement);

ReactDOM.createRoot(appElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

