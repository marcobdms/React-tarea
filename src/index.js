import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';

import reportWebVitals from './reportWebVitals';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './components/styles/Header.css'
import './components/styles/Main.css'
import './components/styles/Footer.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
