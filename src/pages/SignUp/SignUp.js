import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";
import ASIDE_1RD from "./ASIDE_1RD";
import ASIDE_2RD from "./ASIDE_2RD";

function SignUp() {
  const [alert, setAlert] = useState(false);

  return (
    <div className="signup-main-container">
      <div className="left-container">
        <div className="left-main-container">
          <div className="left-top-1rd-container">
            <div className="left-top-emoticon-arrow">
              <span className="material-symbols-outlined">arrow_back</span>
            </div>
            <div className="left-brand">위케아</div>
          </div>
          <div className="left-top-2rd-container">
            <div className="left-2rd-text1">weKEA Family</div>
            <div className="left-2rd-text2">회원 가입</div>
          </div>
          <div className="left-top-3rd-container">
            <div className="left-3rd-text1">이미 가입하셨나요?</div>
            <Link className="left-3rd-text2">로그인 하기</Link>
          </div>
          <div className="left-blank-set">
            <div className="left-image-1rd-container">
              {ASIDE_1RD.map(item => {
                return <img key={item.id} src={item.src} className="img" />;
              })}
            </div>
            <div className="left-image-2rd-container">
              {ASIDE_2RD.map(item => {
                return <img key={item.id} src={item.src} className="img" />;
              })}
            </div>
          </div>
          <div className="left-bottom-container">
            <div className="left-bottom-text">
              <div>weKEA∙</div>
              <Link className="left-bottom-link">쿠키 정책</Link>
              <div>,</div>
              <Link className="left-bottom-link">개인정보처리방침</Link>
            </div>
            <div>©Inter weKEA Systems B.V.1999-2022</div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="right-top-container">
          <div className="right-top-0rd-text">
            weKEA Family에 가입하시겠어요?
          </div>
          <form className="right-top-form">
            <div className="right-top-1rd-text">
              <input className="right-top-1rd-input" type="radio" />
              <div className="right-top-1rd-content">
                예, weKEA Family의 다양한 혜택 및 할인을 즐기고 싶습니다!
              </div>
              <Link className="right-top-1rd-link"> weKEA Family 혜택</Link>
            </div>
            <div className="right-top-2rd-text">
              <input className="right-top-2rd-input" type="radio" />
              <div className="right-top-2rd-content">
                아니요, 추가 혜택 없이 온라인 몰만 가입하고 싶습니다.
              </div>
              <Link className="right-top-2rd-link"> weKEA Family 혜택</Link>
            </div>
          </form>
        </div>
        <div className="right-main-container">
          <div className="right-mid-container">
            <div className="right-1rd-set">
              <div className="right-1rd-text">성</div>
              <input className="right-1rd-input" type="text" />
            </div>
            <div className="right-2rd-set">
              <div className="right-2rd-text">이름</div>
              <input className="right-2rd-input" type="text" />
            </div>
            <div className="right-3rd-set">
              <div className="right-3rd-text-emotion">
                <div className="right-3rd-text1">생일</div>
                {alert && (
                  <div className="rigth-text-hover">
                    만 14세 이상만 가입할 수 있습니다
                  </div>
                )}
                <div
                  className="right-text-hover-img"
                  onMouseEnter={() => setAlert(true)}
                  onMouseLeave={() => setAlert(false)}
                >
                  <img src="https://img.icons8.com/ios/344/info--v3.png" />
                </div>
              </div>
              <input className="right-3rd-input" type="text" />
              <div className="right-3rd-text2">YYYY-MM-DD</div>
            </div>
            <div className="right-4rd-set">
              <div className="right-4rd-text">휴대폰</div>
              <input className="right-4rd-input" type="text" />
            </div>
            <div className="right-5rd-set">
              <div className="right-5rd-text">이메일</div>
              <input className="right-5rd-input" type="text" />
            </div>
            <div className="right-6rd-set">
              <div className="right-6rd-text">비밀번호</div>
              <input className="right-6rd-input" type="password" />
            </div>
          </div>
          <div className="right-bottom-1rd">
            <div className="right-bottom-1rd-text-input">
              <input className="right-bottom-1rd-input" type="checkbox" />
              <div className="right-bottom-1rd-text">
                나의 프로필, 관심사 그리고 구매 이력에 따라 맞춰진 weKEA의
                홈퍼니싱 아이디어와 신상품 소식, 그리고 할인 혜택 정보를 받고
                싶어요!
              </div>
            </div>
            <div className="right-bottom-2rd">
              <div className="right-bottom-2rd-text-input">
                <input className="right-bottom-2rd-input" type="checkbox" />
                <div className="right-bottom-2rd-text">이메일 수신</div>
              </div>
              <div className="right-bottom-3rd-text-input">
                <input className="right-bottom-3rd-input" type="checkbox" />
                <div className="right-bottom-3rd-text">문자 수신</div>
              </div>
              <div className="right-bottom-4rd-text-input">
                <input className="right-bottom-4rd-input" type="checkbox" />
                <div className="right-bottom-4rd-text">우편물 수신</div>
              </div>
            </div>
          </div>
          <div className="right-bottom-5rd-text-input">
            <input className="right-bottom-5rd-input" type="checkbox" />
            <div className="right-bottom-5rd-text">
              (필수)약관을 모두 읽고 동의합니다.
            </div>
            <Link className="right-bottom-5rd-link">이용약관</Link>
          </div>
          <div className="right-bottom-6rd-text-input">
            <input className="right-bottom-6rd-input" type="checkbox" />
            <div className="right-bottom-6rd-text">
              (필수)개인정보 수집 • 이용에 동의합니다.
            </div>
            <Link className="right-bottom-6rd-link">
              개인정보 수집 • 이용 동의
            </Link>
          </div>
          <button className="right-botton-button">이메일 주소 확인 하기</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
