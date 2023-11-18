import { useEffect } from "react";
import { StyledOverlay } from "./Modal.styled";
import { createPortal } from "react-dom";


const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, modalClose }) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");

    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        document.body.classList.remove("no-scroll");
        modalClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [modalClose]);

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      document.body.classList.remove("no-scroll");
      modalClose();
    }
  };

  return createPortal(
    <StyledOverlay onClick={handleClickOverlay}>{children}</StyledOverlay>,
    modalRoot
  );
};

export default Modal;
