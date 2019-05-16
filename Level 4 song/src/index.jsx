import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./component/App";
import reducer from "./reducers";

//wrap Provider around App, make sure every component connect to store
ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
