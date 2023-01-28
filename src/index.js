import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./state";


const root = ReactDOM.createRoot(document.getElementById('root'));
const renderTree = (state) => {
    root.render(
        <App  state={state}
        dispatch={store.dispatch.bind(store)}
        />
    );
}

renderTree(store.getState());
store.subscribe(renderTree);