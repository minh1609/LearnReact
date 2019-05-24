import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
    render() {
        if (!this.props.user) {
            return <div>Loading</div>;
        }

        return <div className="header">{this.props.user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    //users is an array
    return { user: state.users.find(user => user.id === ownProps.userID) };
};

export default connect(mapStateToProps)(UserHeader);
