import Modal from "react-modal";
import s from "./ImageModal.module.css";
import clsx from "clsx";

Modal.setAppElement("#root");

interface ImageModalProps {
  openModal: boolean;
  modalImage: string;
  isClose: (event: React.MouseEvent | React.KeyboardEvent)=> void;
}


const ImageModal: React.FC <ImageModalProps> = ({ openModal, modalImage, isClose }) => {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={isClose}
      contentLabel="Image Modal"
      className={clsx(s.Modal)}
      overlayClassName={clsx(s.overlay)}
    >
      <img src={modalImage} alt="Large view" className={s.modalImage} />
    </Modal>
  );
};

export default ImageModal;
