import React, { Component } from "react";
import reactDOM from "react-dom";
import SeasonDisplay from "./seasonDisplay";

class App extends Component {
    state = { lat: null, season: "" };

    //will activate if page loading up
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            success => this.setState({ lat: success.coords.latitude }),
            err => this.setState({ errMess: err.message })
        );

        //get current season
        let date = new Date().getMonth();
        date <= 6
            ? this.setState({ season: "Summer" })
            : this.setState({ season: "Cold" });
    }

    //passing state to child component
    render() {
        return (
            <SeasonDisplay lat={this.state.lat} season={this.state.season} />
        );
    }
}

reactDOM.render(<App />, document.querySelector("#root"));
