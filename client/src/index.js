import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import { reducers } from './reducers';
import App from './App';
import './index.css';



// const store = createStore(reducers, compose(applyMiddleware(thunk)));

const store = configureStore({
    reducer: reducers,
    // compose(applyMiddleware(thunk))
    middleware: [(thunk)]

})

ReactDOM.render(
    <>

        <Provider store={store}>
            <App />
        </Provider>

    </>,
    document.getElementById('root'),
);