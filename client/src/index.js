import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Reducers } from './reducers/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//reactstrap


const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store = { store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)