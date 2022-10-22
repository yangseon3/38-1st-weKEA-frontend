import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Main.scss";

function Main() {
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
    <div className="main-component">
      <div className="main-image-frame">
        <img
          onClick={goToDeskListPage}
          className="desk main-page-4image"
          src="https://secure.img1-fg.wfcdn.com/im/28077962/compr-r85/1765/176532736/default.jpg"
        />
        <img
          onClick={goToChairListPage}
          className="chair main-page-4image"
          src="https://www.target.com.au/medias/static_content/product/images/full/85/83/A1788583.jpg?impolicy=product_portrait_hero"
        />
        <img
          onClick={goToDrawerListPage}
          className="drawer main-page-4image"
          src="https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202224/0212/livingston-9-drawer-wide-dresser-1-c.jpg"
        />
        <img
          onClick={goToShelfListPage}
          className="shelf main-page-4image"
          src="https://www.ikea.com/kr/en/images/products/burhult-sibbhult-wall-shelf-combination-white-white__1092767_pe863011_s5.jpg?f=s"
        />
      </div>
      <div className="main-carousel-area">캐러셀 들어갈 자리@@@@@@@@@@@@@</div>
      <div />
      <div>위코드 38기 3팀 weKEA입니다.</div>
    </div>
  );
}

export default Main;
