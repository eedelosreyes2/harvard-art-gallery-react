import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Redux
import { createStore } from "redux";

// STORE

// ACTIONS
const getWorks = () => {
    return {
        type: "GETWORKS",
    };
};
const getList = () => {
    return {
        type: "GETLIST",
    };
};

// REDUCERS
const works = (state = [], action) => {
    switch (action.type) {
        case "GETWORKS":
            return []; // get data from api
    }
};
const list = (state = [], action) => {
    switch (action.type) {
        case "GETLIST":
            return []; // get list from api
    }
};

// STORE
let store = createStore(works);

// Display store to console
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(getWorks());

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
