import s from "./imageCard.module.css";
import clsx from "clsx";

const ImageCard = ({ data, onImageClick }) => {
  return (
    <li>
      <div className={clsx(s.imgContaner)}>
        <img
          src={data.urls.small}
          alt={data.alt_description}
          onClick={() => onImageClick(data.urls.regular)}
        ></img>{" "}
      </div>
    </li>
  );
};

export default ImageCard;
