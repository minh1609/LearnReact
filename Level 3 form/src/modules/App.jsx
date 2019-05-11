import React, { Component } from "react";
import unsplash from "../api/splash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
    state = { images: [] };

    //async syntax to wait for axios finish get data from server
    onSearchSubmit = async searchTerm => {
        const response = await unsplash.get("/search/photos", {
            params: { query: searchTerm }
        });

        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "20px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
