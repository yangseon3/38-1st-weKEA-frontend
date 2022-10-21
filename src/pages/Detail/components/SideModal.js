import React from "react";
import "./SideModal.scss";

function SideModal({ className, title, content, isUnmountModal, closeModal }) {
  return (
    <div
      className={`side-modal-bg ${isUnmountModal ? "modal-bg-unmount" : ""}`}
      data-id="close-modal"
      onClick={closeModal}
    >
      <div
        className={`side-modal ${isUnmountModal ? "side-modal-unmount" : ""}`}
      >
        <div className={className}>
          <header>
            <span className="material-symbols-outlined" data-id="close-modal">
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
