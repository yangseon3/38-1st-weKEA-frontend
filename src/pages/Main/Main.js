import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import "./Main.scss";

function Main() {
  const navigate = useNavigate();
  const goToListPage = categoryId => {
    navigate(`/category/${categoryId}`);
  };
  //책상 의자 서랍 선반 순서로 category
  const MAIN_PAGE_CATEGORY_BOX_CONST_DATA = [
    {
      id: "1",
      categoryId: "1",
      category: "desk",
      wrapperClassName: "desk-image-wrapper",
      textClassName: "desk-category-text",
      imgClassName: "main-desk-img",
      imgSrc:
        "https://secure.img1-fg.wfcdn.com/im/28077962/compr-r85/1765/176532736/default.jpg",
      alt: "desk",
    },
    {
      id: "2",
      categoryId: "2",
      category: "chair",
      wrapperClassName: "chair-image-wrapper",
      textClassName: "chair-category-text",
      imgClassName: "main-chair-img",
      imgSrc:
        "https://www.target.com.au/medias/static_content/product/images/full/85/83/A1788583.jpg?impolicy=product_portrait_hero",
      alt: "chair",
    },

    {
      id: "3",
      categoryId: "3",
      category: "drawer",
      wrapperClassName: "drawer-image-wrapper",
      textClassName: "drawer-category-text",
      imgClassName: "main-drawer-img",
      imgSrc:
        "https://www.target.com.au/medias/static_content/product/images/full/85/83/A1788583.jpg?impolicy=product_portrait_hero",
      alt: "drawer",
    },
    {
      id: "4",
      categoryId: "4",
      category: "shelf",
      wrapperClassName: "shelf-image-wrapper",
      textClassName: "shelf-category-text",
      imgClassName: "main-shelf-img",
      imgSrc:
        "https://www.ikea.com/kr/en/images/products/burhult-sibbhult-wall-shelf-combination-white-white__1092767_pe863011_s5.jpg?f=s",
      alt: "shelf",
    },
  ];

  return (
    <>
      <Nav />
      <div className="main-page">
        <div className="main-all-image-frame">
          {MAIN_PAGE_CATEGORY_BOX_CONST_DATA.map(categoryInfo => {
            return (
              <div
                className="main-image-wrapper desk-image-wrapper"
                onClick={() => {
                  goToListPage(categoryInfo.categoryId);
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

        <div>위코드 38기 3팀 weKEA입니다.</div>
      </div>
    </>
  );
}

export default Main;
