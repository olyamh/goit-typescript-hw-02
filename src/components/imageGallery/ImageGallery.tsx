import React from "react";
import ImageCard from "../imageCard/ImageCard";
import s from "./ImageGallery..module.css";
import { ImageResult } from "../../types";

interface ImageGalleryProp {
    images: ImageResult[];
    onImageClick: (modalImage: string) => void;
}



const ImageGallery: React.FC<ImageGalleryProp> =({images, onImageClick}) =>{
    return (
        
        <ul className={s.ul}>
         {images.map(item => (
                 <ImageCard data={item}  key={item.id} onImageClick={onImageClick} />
       
         ))}
      </ul>
    )

}

export default ImageGallery;