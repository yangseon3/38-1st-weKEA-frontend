import React from "react";
import "./Modal.scss";

const Modal = ({ modalClose }) => {
  const onCloseModal = e => {
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };
  return (
    <div className="modal__container">
      {/* onClick={onCloseModal} 화면 어디를 클릭해도 모달창이 없어짐 */}
      <div className="modal">
        {"가입하지 않은 아이디이거나, 잘못된 비밀번호입니다."}
        <button className="modal__button" onClick={modalClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
