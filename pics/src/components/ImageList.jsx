import React from "react";

export default function ImageList({ images }) {
  const imageList = images.map(({ urls, alt_description, id }) => {
    return <img src={urls.regular} alt={alt_description} key={id} />;
  });
  return <div>{imageList}</div>;
}
