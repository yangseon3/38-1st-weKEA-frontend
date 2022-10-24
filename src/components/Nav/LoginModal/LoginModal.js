import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginModal.scss";

function LoginModal({ setToggleModal }) {
  const [unmount, setUnmount] = useState(false);
  const navigate = useNavigate();
  const movePage = url => {
    navigate(url);
  };
  const closeModal = () => {
    setUnmount(true);
    setTimeout(() => {
      setToggleModal(false);
    }, 300);
  };
  return (
    <div
      className={`login-modal-bg${unmount ? " menu-bar-bg-unmount" : ""}`}
      onClick={closeModal}
    >
      <div
        className={`login-modal ${unmount ? "login-modal-unmount" : ""}`}
        onClick={e => e.stopPropagation()}
      >
        <header>
          <div className="close-btn">
            <span className="material-symbols-outlined" onClick={closeModal}>
              close
            </span>
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
            const { id, title, url } = menu;
            return (
              <li
                className="login-modal-menu"
                key={id}
                onClick={() => movePage(url)}
              >
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const LOGIN_MODAL_MENU = [
  { id: 1, title: "로그인", url: "/login" },
  { id: 2, title: "구매 내역", url: "/purchasehistory" },
  { id: 3, title: "위시리스트", url: "/wishlist" },
  { id: 4, title: "배송 조회", url: "/" },
];
export default LoginModal;
