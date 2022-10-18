import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ModalRight.scss";

function ModalRight({ setToggleModal }) {
  const [unmount, setUnmount] = useState(false);
  const navigate = useNavigate();
  const movePage = url => {
    navigate(url);
  };
  const closeModal = e => {
    if (
      e.target.className === "material-symbols-outlined" ||
      e.target.className === "modal-right-bg"
    ) {
      setUnmount(true);
      setTimeout(() => {
        setToggleModal(false);
      }, 300);
    }
  };
  return (
    <div
      className={`modal-right-bg${unmount ? " menu-bar-bg-unmount" : ""}`}
      onClick={closeModal}
    >
      <div className={`modal-right ${unmount ? "modal-right-unmount" : ""}`}>
        <header>
          <div className="close-btn">
            <span className="material-symbols-outlined">close</span>
          </div>
        </header>
        <div className="modal-login">
          <h1>Hello!</h1>
          <span onClick={() => movePage("/login")}>로그인</span>
        </div>
        <div className="modal-signup" onClick={() => movePage("/signup")}>
          <span>weKEA 계정 생성하기</span>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
        <ul>
          {MODAL_RIGHT_DATA.map(el => {
            const { id, content, url } = el;
            return (
              <li
                className="modal-right-menu"
                key={id}
                onClick={() => movePage(url)}
              >
                {content}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const MODAL_RIGHT_DATA = [
  { id: 1, content: "로그인", url: "/login" },
  { id: 2, content: "구매 내역", url: "/" },
  { id: 3, content: "위시리스트", url: "/" },
  { id: 4, content: "배송 조회", url: "/" },
];
export default ModalRight;
