import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Weather from './Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Weather Application</h1>
    <Weather/>
    <br/>
    <footer>
          This project was coded by Faith and is <a href="https://github.com/faithndlovu/react-week4"> 
            open-sourced on GitHub</a> and hosted on <a href="https://lucky-tapioca-7e2bfb.netlify.app/">Netlify</a>
        </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
