import { IconX } from "@tabler/icons-react";
import ReactModal from "react-modal";
import styles from "./modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  children: React.ReactNode;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "35%",
  },
  overlay: {
    backgroundColor: "rgba(26, 24, 37, 0.95)",
  },
};

ReactModal.setAppElement("#next-app");

function Modal({ isOpen, onRequestClose, title, children }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel={title}
      closeTimeoutMS={200}
      ariaHideApp={!isOpen}
    >
      <div className={styles.modalHeader}>
        <h2>{title}</h2>
        <IconX
          className={styles.close}
          onClick={onRequestClose}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") onRequestClose();
          }}
          role="button"
          aria-label="Close button"
          tabIndex={0}
        />
      </div>
      <>{children}</>
    </ReactModal>
  );
}

export default Modal;
