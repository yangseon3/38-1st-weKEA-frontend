import React, { useState } from "react";
import Logo from "../../Logo";
import MENUS from "./MENUS";
import CategoryBox from "./CategoryBox";
import "./MenuBar.scss";

function MenuBar({ setToggleMenu }) {
  const [unmount, setUnmount] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const closeMenu = e => {
    const { area } = e.target.dataset;
    if (area === "close-modal") {
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
      onClick={closeMenu}
      data-area="close-modal"
    >
      <div className={`menu-bar ${unmount ? "menu-bar-unmount" : ""}`}>
        <header>
          <div className="close-btn">
            <span className="material-symbols-outlined" data-area="close-modal">
              close
            </span>
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
          {MENUS.map(menu => {
            const { id, title, type } = menu;
            return (
              <li className={type} key={id}>
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default MenuBar;
