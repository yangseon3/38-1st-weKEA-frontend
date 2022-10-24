import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../config";
import "./Login.scss";
import Logo from "../../components/Logo/Logo";

function Login() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const navigate = useNavigate();

  const userInfoHander = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const togglePass = () => {
    setShowPassword(!showPassword);
  };

  const { email, password } = userInfo;

  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  // @ 이전 숫자 대문자 소문자 사용가능 @ 이후 숫자 대문자 소문자 사용 가능 . 이후 영어 문자 2~3개 가능
  const pwRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  // 숫자 영어 소문자 대문자 특수문자 각각 한개 이상 , 글자수 8개 이상 가능

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = pwRegex.test(password);

  const loginRequest = e => {
    e.preventDefault();
    fetch(API.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("token", data.userInfo.accessToken);
        localStorage.setItem(
          "userName",
          JSON.stringify(data.userInfo.userName)
        );
      });
  };

  return (
    <div className="login-page">
      <aside className="login-description-wrapper">
        <div className="login-description">
          <header className="login-description-header">
            <div className="prev-btn-wrapper">
              <span
                onClick={() => {
                  return navigate(`/`);
                }}
                className="material-symbols-outlined"
              >
                arrow_back
              </span>
            </div>
            <Logo />
            {/* //logo 컴포넌트로 바꿀예정 */}
          </header>
          <main className="login-description-body">
            <h1 className="login-description-title">로그인</h1>
            <div className="login-description-content">
              <p>외워야 할 비밀번호가 많아 불편하셨죠?</p>
              <p>이제 일회용 코드를 이용하여 간편하게 로그인하세요.</p>
              <p>✼ 이메일 또는 휴대폰 번호 최초 인증 후 사용 가능</p>
            </div>
          </main>
          <footer className="login-description-footer">
            <div className="login-description-footer-content">
              <span>weKEA∙</span>
              <span className="login-description-footer-link">쿠키 정책</span>
              <span>,</span>
              <span className="login-description-footer-link">
                개인정보처리방침
              </span>
            </div>
            <div>©Inter weKEA Systems B.V.1999-2022</div>
          </footer>
        </div>
      </aside>
      <main className="login-form-wrapper">
        <form className="login-form" onSubmit={loginRequest}>
          <div>이메일</div>
          <input
            name="email"
            onChange={userInfoHander}
            className={`login-form-input ${
              email.length === 0 ||
              (isEmailValid ? "valid-input" : "invalid-input")
            }`}
            type="text"
          />
          {email.length === 0 || isEmailValid || (
            <div className="login-form-email-valid">
              이메일 형식이 아닙니다.
            </div>
          )}
          <div className="login-form-pw-wrapper">
            <div className="login-form-pw-title">비밀번호</div>
            <input
              name="password"
              onChange={userInfoHander}
              className={`login-form-input ${
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
              <div className="login-form-pw-valid">
                비밀번호는 8자 이상 입력해주세요
              </div>
            )}
            <div>
              <span className="login-form-input-text">비밀번호 찾기</span>
            </div>
          </div>
          <div className="login-form-checkbox">
            <div className="login-form-checkbox-wrapper">
              <input className="login-form-checkbox-input" type="checkbox" />
              <div className="login-form-checkbox-text">로그인 상태 유지</div>
              {alert && (
                <div className="login-form-checkbox-valid">
                  로그인 상태를 유지하면 방문 할 때마다 다시 로그인 할 필요가
                  없습니다. 이 옵션은 개인 기기에서만 사용하는 것이 좋습니다.
                </div>
              )}
            </div>
            <div
              className="login-form-checkbox-mark"
              onMouseEnter={() => setAlert(true)}
              onMouseLeave={() => setAlert(false)}
            >
              <img src="https://img.icons8.com/ios/344/info--v3.png" />
            </div>
          </div>
          <button className="login-form-button">로그인</button>
          <div className="login-form-signup-page-text">
            weKEA 계정이 없으신가요? 지금 바로 만들어보세요.
          </div>
          <button
            type="button"
            onClick={() => {
              return navigate(`/SignUp`);
            }}
            className="login-form-signup-button"
          >
            개인 회원 가입하기
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
