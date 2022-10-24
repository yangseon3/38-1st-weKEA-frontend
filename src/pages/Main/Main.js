import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import "./Main.scss";

function Main() {
  const [randomMainImg, setRandomMainImg] = useState([]);

  useEffect(() => {
    console.log("fetch함수 실행 테스트용 콘솔로그");
    fetch("https://10.58.52.238:3000/", {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => console.log("data"));
  }, []);

  const navigate = useNavigate();

  const goToChairListPage = () => {
    navigate("/category/chair");
  };
  const goToDeskListPage = () => {
    navigate("/category/Desk");
  };
  const goToShelfListPage = () => {
    navigate("/category/Shelf");
  };
  const goToDrawerListPage = () => {
    navigate("/category/Drawer");
  };

  return (
    <>
      <Nav />
      <div className="main-page">
        <div className="main-all-image-frame">
          <div
            className="main-image-wrapper desk-image-wrapper"
            onClick={goToDeskListPage}
          >
            <img
              alt="desk"
              className="main-desk-img main-page-4image"
              src="https://secure.img1-fg.wfcdn.com/im/28077962/compr-r85/1765/176532736/default.jpg"
            />
            <div className="category-text desk-categoty-text">Desk</div>
          </div>

          <div
            className="main-image-wrapper chair-image-wrapper"
            onClick={goToChairListPage}
          >
            <img
              alt="chair"
              className="main-page-4image"
              src="https://www.target.com.au/medias/static_content/product/images/full/85/83/A1788583.jpg?impolicy=product_portrait_hero"
            />
            <div className="category-text chair-categoty-text">Chair</div>
          </div>

          <div className="main-image-wrapper " onClick={goToDrawerListPage}>
            <img
              className="main-page-4image"
              alt="drawer"
              src="https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202224/0212/livingston-9-drawer-wide-dresser-1-c.jpg"
            />
            <div className="category-text drawer-categoty-text">drawer</div>
          </div>

          <div
            className="main-image-wrapper shelf-image-wrapper"
            onClick={goToShelfListPage}
          >
            <img
              className="main-page-4image"
              alt="shelf"
              src="https://www.ikea.com/kr/en/images/products/burhult-sibbhult-wall-shelf-combination-white-white__1092767_pe863011_s5.jpg?f=s"
            />
            <div className="category-text shelf-categoty-text">shelf</div>
          </div>
        </div>

        <div>위코드 38기 3팀 weKEA입니다.</div>
      </div>
    </>
  );
}

export default Main;

// const MAIN_IMAGES_DATA = [];
