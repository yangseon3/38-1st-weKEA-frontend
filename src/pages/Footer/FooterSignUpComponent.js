import React from "react";
function FooterSignUpComponent({ title, discription, buttonText }) {
  return (
    <div className="footer-signup-component-frame">
      <p className="footer-signup-component-title">{title}</p>
      <p className="footer-signup-component-discription">{discription}</p>
      <p className="footer-signup-component-to-detail">자세히 보기</p>
      <button className="footer-signup-component-button">{buttonText}</button>
    </div>
  );
}

export default FooterSignUpComponent;
