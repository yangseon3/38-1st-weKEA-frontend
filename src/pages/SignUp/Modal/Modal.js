import React from "react";
import "./Modal.scss";

const Modal = ({ modalClose }) => {
  return (
    <div className="modal__container">
      <p>가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.</p>
    </div>
  );
};

export default Modal;
