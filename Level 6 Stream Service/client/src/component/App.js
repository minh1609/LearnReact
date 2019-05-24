import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

import Header from "./header";

class App extends Component {
    state = {};
    render() {
        return (
            <div className="ui container">
                {/* // BrowserRouter only have one child */}
                <BrowserRouter>
                    <React.Fragment>
                        <Header />
                        {/* exact: only show component if path is EXACTLY "/" */}
                        <Route path="/" exact component={StreamList} />
                        <Route
                            path="/streams/new"
                            exact
                            component={StreamCreate}
                        />
                        <Route
                            path="/streams/edit"
                            exact
                            component={StreamEdit}
                        />
                        <Route
                            path="/streams/delete"
                            exact
                            component={StreamDelete}
                        />
                        <Route
                            path="/streams/show"
                            exact
                            component={StreamShow}
                        />
                    </React.Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
