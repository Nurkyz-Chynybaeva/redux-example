import React from 'react';
import { createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import counterReducers from '../src/redux/counterReducer';
import colorReduser from '../src/redux/colorReducer';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'redux';
import textReduser from './redux/textReducer';

const rootReduser = combineReducers({
   counter: counterReducers, 
   color: colorReduser,
   text: textReduser,
  })
const store = createStore(rootReduser)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();