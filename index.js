import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App.jsx';
import todoReducer from './todo/reducer';
import { reducer as reduxFormReducer } from 'redux-form';

const combineReducer = combineReducers({
    todos: todoReducer,
    form: reduxFormReducer, // mounted under "form"
  });

const store = createStore(
    combineReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <App/>    
    </Provider>,
    document.getElementById("root")
)