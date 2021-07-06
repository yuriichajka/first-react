import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    counterValue: 0
}

const counterReduser = (state = initialState, action) => {

    console.log({action, state})

    switch (action.type) {
        case 'INC': {
            return {...state, counterValue: state.counterValue + 1};
        }
        case 'DEC': {
            return {...state, counterValue: state.counterValue - 1};
        }
        case 'RES': {
            return {...state, counterValue: 0};
        }
        case 'X2': {
            return {...state, counterValue: state.counterValue * 2};
        }
        case 'CUSTOM': {
            return {...state, counterValue: state.counterValue + action.payload};
        }
        default: return state;
    }
}

const store = createStore(counterReduser)

// console.log(store)
//
// console.log(store.getState())

// store.subscribe(() => {
//     console.log('from subscribe', store.getState())
// })
//
// store.dispatch({
//     type: 'INC'
// })



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
