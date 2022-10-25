import React from "react";
import "./Modal.scss";

const Modal = ({ modalClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.
        <button className="modal-button" onClick={modalClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
