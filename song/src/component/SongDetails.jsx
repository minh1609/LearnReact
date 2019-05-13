import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../action";

class SongDetail extends Component {
    state = {};

    renderList = () => {
        console.log("Props" + this.props);

        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    };

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
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
)(SongDetail);
