import React, { Component } from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

//props: images: array of image

class ImageList extends Component {
    //render list using array.map, each list element must have key
    render() {
        if (this.props.images.length === 0) {
            return <div>Find 0 Image</div>;
        }

        const image = this.props.images.map(e => {
            //console.log(e);
            return <ImageCard image={e} key={e.id} />;
        });

        return <div className="image-list">{image}</div>;
    }
}

export default ImageList;
