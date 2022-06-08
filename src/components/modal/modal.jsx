import "./modal.css";
import Overlay from "../overlay/overlay";

function Modal({ children, closeModal }) {
  const handleClick = (e, canClose) => {
    e.stopPropagation();
    if (canClose) closeModal();
  };

  return (
    <Overlay overlayClick={closeModal}>
      <div className="Modal" onClick={handleClick}>
        <span className="Modal_close" onClick={(e) => handleClick(e, true)}>
          +
        </span>
        <div className="Modal_body">{children}</div>
      </div>
    </Overlay>
  );
}

export default Modal;
