import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginModal.scss";

function LoginModal({ setToggleModal }) {
  const [unmount, setUnmount] = useState(false);
  const navigate = useNavigate();
  const movePage = url => {
    navigate(url);
  };
  const closeModal = e => {
    const { className } = e.target;
    if (
      className === "material-symbols-outlined" ||
      className === "login-modal-bg"
    ) {
      setUnmount(true);
      setTimeout(() => {
        setToggleModal(false);
      }, 300);
    }
  };
  return (
    <div
      className={`login-modal-bg${unmount ? " menu-bar-bg-unmount" : ""}`}
      onClick={closeModal}
    >
      <div className={`login-modal ${unmount ? "login-modal-unmount" : ""}`}>
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
          {LOGIN_MODAL_MENU.map(menu => {
            const { id, content, url } = menu;
            return (
              <li
                className="login-modal-menu"
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

const LOGIN_MODAL_MENU = [
  { id: 1, content: "로그인", url: "/login" },
  { id: 2, content: "구매 내역", url: "/" },
  { id: 3, content: "위시리스트", url: "/" },
  { id: 4, content: "배송 조회", url: "/" },
];
export default LoginModal;
