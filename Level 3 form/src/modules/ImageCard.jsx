import React, { Component } from "react";

class ImageCard extends Component {
    state = {};

    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    //wait for element loaded then run setSpan function
    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    };

    render() {
        //destruct object
        const { alt_description, urls } = this.props.image;

        return (
            <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
        );
    }
}

export default ImageCard;
