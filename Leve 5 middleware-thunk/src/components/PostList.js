import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
    //fetch data, store in reducer
    componentDidMount() {
        console.log(this.state);
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props);
        return <div>PostList</div>;
    }
}

//this component will have 1 props is posts:...
const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

export default connect(
    mapStateToProps,
    //fetchPost is props of this component
    { fetchPosts: fetchPosts }
)(PostList);
