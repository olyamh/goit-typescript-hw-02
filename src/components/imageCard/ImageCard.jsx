import s from "./imageCard.module.css";
import clsx from "clsx";

const ImageCard = ({ data, onImageClick }) => {
  return (
    <li>
      <div className={clsx(s.imgContaner)}>
        <img
          src={data.urls.full}
          alt={data.alt_dscription}
          onClick={() => onImageClick(data.urls.full)}
        ></img>{" "}
      </div>
    </li>
  );
};

export default ImageCard;
