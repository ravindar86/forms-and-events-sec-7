import React from "react";

const ImageList = (props) => {
  /*    const images = props.images.map((image)=>{
        return <img src={image.urls.regular} key={image.id} alt={image.description} />;
    });
*/
  const images = props.images.map(({ urls, id, description }) => {
    return <img src={urls.regular} key={id} alt={description} />;
  });

  return <div>{images}</div>;
};

export default ImageList;