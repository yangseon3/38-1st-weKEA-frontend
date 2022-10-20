import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "./MenuBar/MenuBar";
import Logo from "../Logo";
import LoginModal from "../LoginModal/LoginModal";
import "./Nav.scss";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const navigate = useNavigate();
  const openMenu = () => {
    setToggleMenu(true);
  };
  const openModal = () => {
    setToggleModal(true);
  };
  return (
    <div className="nav">
      <aside className="sidebar">
        <div className="menu">
          <div className="menu-icon">
            <span className="material-symbols-outlined" onClick={openMenu}>
              menu
            </span>
          </div>
          <span className="menu-text">메뉴</span>
        </div>
      </aside>
      <div className="nav-bar">
        <Logo />
        <div className="search">
          <input type="text" placeholder="검색어 입력" />
          <span className="material-symbols-outlined">search</span>
        </div>
        <div className="nav-members">
          <div className="login-or-signup" onClick={openModal}>
            <span className="material-symbols-outlined">person</span>
            <span className="text">Hi! 로그인 또는 가입하기</span>
          </div>
          <div className="wishlist">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <div className="cart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        </div>
      </div>
      {toggleMenu && (
        <MenuBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      )}
      {toggleModal && <LoginModal setToggleModal={setToggleModal} />}
    </div>
  );
}

export default Nav;
