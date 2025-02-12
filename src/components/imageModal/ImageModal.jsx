import Modal from "react-modal";
import s from "./ImageModal.module.css";
import clsx from "clsx";

Modal.setAppElement("#root");

const ImageModal = ({ openModal, modalImage, isClose }) => {
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
