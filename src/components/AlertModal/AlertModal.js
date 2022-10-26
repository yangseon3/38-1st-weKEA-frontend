import React from "react";
import "./AlertModal.scss";

const AlertModal = ({ alertModalContent }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">{alertModalContent}</div>
    </div>
  );
};

export default AlertModal;
