import React, { Component } from "react";

//no () when pass a function to jsx
class SearchBar extends Component {
    state = { searchTerm: "" };
    //Prefer way in React CONTROLL Element
    //whenever user input in the search box => state will be update =>
    //value of search box will be updated
    //WHY: Because we want store all the info in React Component(state)

    //turn into arrow function to auto bind function
    onFormSubmit = event => {
        //prevent form submit while press enter
        event.preventDefault();

        //onFormSubmit is a function pass down from App.js, whenever user submit form
        //onFormSubmit from SearchBar run, then onSearchSubmit from App.js run
        this.props.onSubmit(this.state.searchTerm);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <p>Search</p>
                        <input
                            type="text"
                            onChange={event => {
                                this.setState({
                                    searchTerm: event.target.value
                                });
                            }}
                            value={this.state.searchTerm}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
