import React from "react";

const Checkbox = () => {
  return (
    <>
      <div>
        <div className="signup-form-checkbox">
          <input className="signup-form-checkbox-input" type="checkbox" />
          <div className="signup-form-checkbox-text">
            나의 프로필, 관심사 그리고 구매 이력에 따라 맞춰진 weKEA의 홈퍼니싱
            아이디어와 신상품 소식, 그리고 할인 혜택 정보를 받고 싶어요!
          </div>
        </div>
        <div className="signup-form-checkbox-wrapper">
          <div className="signup-form-checkbox-input-sort">
            <input className="signup-form-checkbox-input" type="checkbox" />
            <div className="signup-form-checkbox-content">이메일 수신</div>
          </div>
          <div className="signup-form-checkbox-input-sort">
            <input className="signup-form-checkbox-input" type="checkbox" />
            <div className="signup-form-checkbox-content">문자 수신</div>
          </div>
          <div className="signup-form-checkbox-input-sort">
            <input className="signup-form-checkbox-input" type="checkbox" />
            <div className="signup-form-checkbox-content">우편물 수신</div>
          </div>
        </div>
      </div>
      <div className="signup-form-bottom-checkbox">
        <input className="signup-form-bottom-checkbox-input" type="checkbox" />
        <div className="signup-form-bottom-checkbox-text">
          (필수)약관을 모두 읽고 동의합니다.
        </div>
        <span className="signup-form-bottom-checkbox-link">이용약관</span>
      </div>
      <div className="signup-form-bottom-checkbox">
        <input className="signup-form-bottom-checkbox-input" type="checkbox" />
        <div className="signup-form-bottom-checkbox-text">
          (필수)개인정보 수집 • 이용에 동의합니다.
        </div>
        <span className="signup-form-bottom-checkbox-link">
          개인정보 수집 • 이용 동의
        </span>
      </div>
    </>
  );
};

export default Checkbox;
