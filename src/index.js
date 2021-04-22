import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore , combineReducers} from "redux"
import counterReducer from './redux';
import colorReducer from './redux/ColorReducer';


const rootReducer = combineReducers(counterReducer , colorReducer );
const store = createStore();


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store} >
 <App />
</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

