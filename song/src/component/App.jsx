import React, { Component } from "react";

import SongList from "./SongList";

class App extends Component {
    state = {};
    render() {
        return (
            <div className="ui container grid">
                <div className="column eight wide">
                    <SongList />;
                </div>
            </div>
        );
    }
}

export default App;
