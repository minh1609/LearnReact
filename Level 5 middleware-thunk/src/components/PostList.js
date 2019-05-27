import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchPostAndUser } from "../actions";

import UserHeader from "./UserHeader";

class PostList extends Component {
    //fetch data, store in reducer
    componentDidMount() {
        //class doennt hold any state, all state is stored in combineReducer
        this.props.fetchPostAndUser();
    }

    renderList() {
        console.log(this.props);

        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <div>
                                <UserHeader userID={post.userId} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    }
}

//this component will have 1 props is posts:...

//pull state from reducer, convert it to this component props
const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

export default connect(
    mapStateToProps,
    //fetchPostAndUser is prop of this function is props of this component
    { fetchPostAndUser: fetchPostAndUser }
)(PostList);
