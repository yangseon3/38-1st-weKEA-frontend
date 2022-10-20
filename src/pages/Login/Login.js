import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const userInfoHander = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const [showPassword, setShowPassword] = useState(true);

  const togglePass = () => {
    setShowPassword(boolean => !boolean);
  };

  const { email, password } = userInfo;
  console.log(email, password);
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const pwRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = pwRegex.test(password);

  // const signin = () => {
  //   fetch("http://10.58.52.248:3000/user/signin", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email: id, password: pw }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       localStorage.setItem("token", data.accessToken);
  //       console.log(localStorage.getItem("token"));
  //     });
  // };

  return (
    <div className="login-main-container">
      <div className="left-main-container">
        <div className="left-container">
          <div className="left-top-container">
            <div className="left-top-emoticon-arrow">
              <span
                onClick={() => {
                  return navigate(`/`);
                }}
                className="material-symbols-outlined"
              >
                arrow_back
              </span>
            </div>
            <div className="left-brand">위케아</div>
          </div>
          <div className="left-center-container">
            <div className="left-login-text">로그인</div>
            <div>외워야 할 비밀번호가 많아 불편하셨죠?</div>
            <div>이제 일회용 코드를 이용하여 간편하게 로그인하세요.</div>
            <div className="left-center-3rd-text">
              ✼ 이메일 또는 휴대폰 번호 최초 인증 후 사용 가능
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
        <form className="right-form" onChange={userInfoHander}>
          <div className="right-login-1st-text">
            이메일 또는 확인된 휴대폰 번호
          </div>
          <input
            name="email"
            className={`right-login-input ${
              email.length === 0 ||
              (isEmailValid ? "valid-input" : "invalid-input")
            }`}
            type="text"
          />
          {email.length === 0 || isEmailValid || (
            <div className="right-email-valid-text">
              이메일 형식이 아닙니다.
            </div>
          )}
          {/* <div className="right-login-2nd-text">
            <div> 다른 로그인 옵션:</div>
            <Link className="rigth-link-text"> 일회용 코드로 로그인</Link>
          </div> */}
          <div className="right-pw-wrapper">
            <div className="right-pw-1st-text">비밀번호</div>
            <input
              name="password"
              className={`right-login-input ${
                password.length === 0 ||
                (isPasswordValid ? "valid-input" : "invalid-input")
              }`}
              type={showPassword ? "password" : "text"}
            />
            <span
              onClick={togglePass}
              className="material-symbols-outlined visiblility-icon"
            >
              {showPassword ? "visibility_off" : "visibility"}
            </span>
            {password.length === 0 || isPasswordValid || (
              <div className="right-pw-valid-text">
                비밀번호는 8자 이상 입력해주세요
              </div>
            )}
            <div>
              <Link className="rigth-link-text">비밀번호 찾기</Link>
            </div>
          </div>
          <div className="right-checkbox">
            <div className="right-checkbox-wrapper">
              <input className="right-checkbox-input" type="checkbox" />
              <div className="right-checkbox-1st-text">로그인 상태 유지</div>
              {alert && (
                <div className="right-checkbox-2nd-text">
                  로그인 상태를 유지하면 방문 할 때마다 다시 로그인 할 필요가
                  없습니다. 이 옵션은 개인 기기에서만 사용하는 것이 좋습니다.
                </div>
              )}
            </div>
            <div
              className="right-checkbox-3rd-text"
              onMouseEnter={() => setAlert(true)}
              onMouseLeave={() => setAlert(false)}
            >
              <img src="https://img.icons8.com/ios/344/info--v3.png" />
            </div>
          </div>
          <button className="right-login-button">로그인</button>
          <div className="right-signup-text">
            weKEA 계정이 없으신가요? 지금 바로 만들어보세요.
          </div>
          <button
            onClick={() => {
              return navigate(`/SignUp`);
            }}
            className="right-signup-button"
          >
            개인 회원 가입하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
