import React from "react";
import { useNavigate } from "react-router-dom";
import CATEGORY_DATA from "./CATEGORY_DATA";
import "./CategoryBox.scss";

function CategoryBox({ showCategory }) {
  const navigate = useNavigate();
  const movePage = url => {
    navigate(url);
  };
  const categoryHeight = {
    height: showCategory ? "210px" : "0px",
  };
  return (
    <div className="category-box-wrapper" style={categoryHeight}>
      <ul className="category-box">
        {CATEGORY_DATA.map(category => {
          const { id, name, url } = category;
          return (
            <li className="bold-text" key={id} onClick={() => movePage(url)}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default CategoryBox;
