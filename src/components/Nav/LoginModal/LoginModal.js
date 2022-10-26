import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginModal.scss";

function LoginModal({ setToggleModal, userName }) {
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
  const logOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <div
      className={`login-modal-bg${unmount ? " modal-bg-unmount" : ""}`}
      onClick={closeModal}
    >
      <div
        className={`login-modal ${unmount ? "side-modal-unmount" : ""}`}
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
          <h1>Hello{userName !== null && ` ${userName.firstName}`}!</h1>
          {userName !== null ? (
            <span onClick={logOut}>로그아웃</span>
          ) : (
            <span onClick={() => movePage("/login")}>로그인</span>
          )}
        </div>
        {userName !== null ? (
          <div className="modal-mypage" onClick={() => movePage("/mypage")}>
            <span>My weKEA</span>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        ) : (
          <div className="modal-signup" onClick={() => movePage("/signup")}>
            <span>weKEA 계정 생성하기</span>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        )}
        <ul>
          {userName !== null ? (
            <li className="login-modal-menu" onClick={logOut}>
              로그아웃
            </li>
          ) : (
            <li className="login-modal-menu" onClick={() => movePage("/login")}>
              로그인
            </li>
          )}
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
  { id: 1, title: "구매 내역", url: "/purchasehistory" },
  { id: 2, title: "위시리스트", url: "/wishlist" },
  { id: 3, title: "배송 조회", url: "/" },
];
export default LoginModal;
