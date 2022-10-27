import React from "react";
import { useNavigate } from "react-router-dom";
import MAIN_PAGE_CATEGORY_BOX_CONST_DATA from "./MainConstData";
import "./Main.scss";

function Main() {
  const navigate = useNavigate();
  const goToListPage = categoryId => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="main-page">
      <div className="main-all-image-frame">
        {MAIN_PAGE_CATEGORY_BOX_CONST_DATA.map(categoryInfo => {
          return (
            <div
              className="main-image-wrapper desk-image-wrapper"
              onClick={() => {
                goToListPage(categoryInfo.id);
              }}
              key={categoryInfo.id}
            >
              <img
                alt={categoryInfo.alt}
                className="main-desk-img main-page-4image"
                src={categoryInfo.imgSrc}
              />
              <div className="category-text desk-category-text">
                {categoryInfo.category}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
