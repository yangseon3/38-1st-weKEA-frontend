import React from "react";
function FooterLeftComponent({ title, discription, buttonText }) {
  return (
    <div className="component-frame">
      <p className="title">{title}</p>
      <p className="discription">{discription}</p>
      <p className="to-detail">자세히 보기</p>
      <button className="button">{buttonText}</button>
    </div>
  );
}

export default FooterLeftComponent;
