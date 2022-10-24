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
          <header>
            <span className="material-symbols-outlined" onClick={closeModal}>
              close
            </span>
          </header>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default SideModal;
