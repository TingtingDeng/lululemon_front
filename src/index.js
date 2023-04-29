import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reducers from './reducers'
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)

)

const reduxStore = createStore(reducers, composedEnhancer)
console.log('reduxStore-getState--->',reduxStore.getState())



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>

        <Provider store={reduxStore}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>

    </React.StrictMode>
);