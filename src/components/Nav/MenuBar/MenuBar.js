import React, { useState } from "react";
import Logo from "../../Logo";
import MENUS from "./MENUS";
import "./MenuBar.scss";
import CategoryBox from "./CategoryBox";

function MenuBar({ setToggleMenu }) {
  const [unmount, setUnmount] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const closeMenu = e => {
    if (
      e.target.className === "material-symbols-outlined" ||
      e.target.className === "menu-bar-bg"
    ) {
      setUnmount(true);
      setTimeout(() => {
        setToggleMenu(false);
      }, 300);
    }
  };
  const categoryHandler = () => {
    showCategory ? setShowCategory(false) : setShowCategory(true);
  };
  return (
    <div
      className={`menu-bar-bg${unmount ? " menu-bar-bg-unmount" : ""}`}
      onClick={e => {
        closeMenu(e);
      }}
    >
      <div className={`menu-bar ${unmount ? "menu-bar-unmount" : ""}`}>
        <header>
          <div className="close-btn">
            <span className="material-symbols-outlined">close</span>
          </div>
          <div className="logo-wrapper">
            <Logo />
          </div>
        </header>
        <ul className="menu-list">
          <li className="big-text" onClick={categoryHandler}>
            모든 제품
          </li>
          <CategoryBox showCategory={showCategory} />
          {MENUS.map(el => {
            const { id, menu, type } = el;
            return (
              <li className={type} key={id}>
                {menu}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default MenuBar;
