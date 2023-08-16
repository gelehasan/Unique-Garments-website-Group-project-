import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { CartShopProvider } from './Context/cartShopContext';
import { UserContextProvider } from './Context/userContext';
import { Provider } from 'react-redux';
import { Store } from './Store/Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}> 
    <BrowserRouter> 
    <CartShopProvider> 
  
    <App />

    </CartShopProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
