import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

export default function ImageList({ images }) {
  const imageList = images.map((image) => {
    return <ImageCard image={image} />;
  });

  return <div className="image-list">{imageList}</div>;
}
