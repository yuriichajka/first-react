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

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': {
            return {...state, counterValue: state.counterValue + 1};
        }
        case 'DEC': {
            return {...state, counterValue: state.counterValue - 1};
        }
        case 'RESET': {
            return {...state, counterValue: 0};
        }
        case  'USER-CHOICE': {
            return {...state, counterValue: state.counterValue + Number(action.payload)}
        }
        default:
            return state;
    }
}

const store = createStore(counterReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
