import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../action";

class SongList extends Component {
    state = {};

    render() {
        return <div>Heelo</div>;
    }
}

//by convention, this function get sate from store, put it in the
//prop of this component
//re run when state change
const mapStatetoProps = state => {
    console.log(state);
    return {
        //return a props of this Component
        songs: state.songs
    };
};

//connect to Redux Store
//2nd arg is action creator, become prop of this Component
export default connect(
    mapStatetoProps,
    {
        selectSong: selectSong
    }
)(SongList);
