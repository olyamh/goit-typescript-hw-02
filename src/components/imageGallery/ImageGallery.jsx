import ImageCard from "../imageCard/ImageCard";
import s from "./ImageGallery..module.css"

const ImageGallery =({images, onImageClick}) =>{
    return (
        
        <ul className={s.ul}>
         {images.map(item => (
                 <ImageCard data={item}  key={item.id} onImageClick={onImageClick} />
       
         ))}
      </ul>
    )

}

export default ImageGallery;