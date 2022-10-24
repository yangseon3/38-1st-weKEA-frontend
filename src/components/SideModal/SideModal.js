import React from "react";
import "./SideModal.scss";

function SideModal({ className, title, content, isUnmountModal, closeModal }) {
  return (
    <div
      className={`side-modal-bg ${isUnmountModal ? "modal-bg-unmount" : ""}`}
      onClick={closeModal}
    >
      <div
        className={`${className} ${isUnmountModal ? "side-modal-unmount" : ""}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="side-modal-content">
          <header className="side-modal-header">
            <span
              className="material-symbols-outlined side-modal-close-button"
              onClick={closeModal}
            >
              close
            </span>
          </header>
          <h1 className="side-modal-title">{title}</h1>
          <p className="side-modal-body">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default SideModal;
