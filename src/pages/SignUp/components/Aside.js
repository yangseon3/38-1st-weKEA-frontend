import React from "react";
import { useNavigate } from "react-router-dom";
import ASIDE_1ST from "../ASIDE_1ST";
import ASIDE_2ND from "../ASIDE_2ND";

const Aside = () => {
  const navigate = useNavigate();
  return (
    <aside className="signup-description-wrapper">
      <div className="signup-description">
        <header className="signup-description-header">
          <div className="prev-btn-wrapper">
            <span
              onClick={() => {
                return navigate(-1);
              }}
              className="material-symbols-outlined"
            >
              arrow_back
            </span>
          </div>
          <div className="logo">위케아</div>
        </header>
        <div className="signup-description-title">
          <div>weKEA</div>
          <div>회원 가입</div>
        </div>
        <div className="signup-description-content">
          <div>이미 가입하셨나요?</div>
          <div>로그인 하기</div>
        </div>
        <div className="signup-description-image-wrapper">
          <div className="signup-description-1st-image">
            {ASIDE_1ST.map(item => {
              return <img key={item.id} src={item.src} alt={item.alt} />;
            })}
          </div>
          <div className="signup-description-2nd-image">
            {ASIDE_2ND.map(item => {
              return <img key={item.id} src={item.src} alt={item.alt} />;
            })}
          </div>
        </div>
        <footer className="signup-description-footer">
          <div className="signup-description-content">
            <div>weKEA∙</div>
            <span className="signup-description-text">쿠키 정책</span>
            <span>,</span>
            <span className="signup-description-text">개인정보처리방침</span>
          </div>
          <div>©Inter weKEA Systems B.V.1999-2022</div>
        </footer>
      </div>
    </aside>
  );
};

export default Aside;
