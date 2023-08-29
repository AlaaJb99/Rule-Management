import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MultiSelect from './MainPage';
import SecondPage from './SecondPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SecondPage  />
  </React.StrictMode>
);


reportWebVitals();
