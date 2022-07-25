import "./styles.css";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ReactPortal from "../ReactPortal";
import Card from "../Card";

function Modal({ children, isOpen, onClose }) {
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? onClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <Card onClick={onClose} className="modal-card">
            {children}
          </Card>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}
export default Modal;
