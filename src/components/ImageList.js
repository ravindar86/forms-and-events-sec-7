import React from "react";
import { ImageCard } from "./ImageCard";
import './ImageList.css';

const ImageList = (props) => {
  /*    const images = props.images.map((image)=>{
        return <img src={image.urls.regular} key={image.id} alt={image.description} />;
    });
*/
  const images = props.images.map((image) => {
    //return <img src={urls.regular} key={id} alt={description} />;
    return <ImageCard image={image} key={image.id} />
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;