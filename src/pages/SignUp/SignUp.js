import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./SignUp.scss";
import ASIDE_1ST from "./ASIDE_1ST";
import ASIDE_2ND from "./ASIDE_2ND";

function SignUp() {
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    last_name: "",
    first_name: "",
    birthday: "",
    phone_number: "",
    email: "",
    password: "",
  });
  // 각각에 name을 정해주고
  const userInfoHander = e => {
    const { name, value } = e.target;
    // e.target.name , e.target.value
    setUserInfo({ ...userInfo, [name]: value });
  };
  const { last_name, first_name, birthday, phone_number, email, password } =
    userInfo;
  // setUserInfo에 ...스프레드연산자(전개연산자)를 사용하여 userInfo의 값을 풀어 넣어주고 각각의 name에 value을 줌
  const birthdayRegEx =
    /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  const phonenumberRegEx = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const pwRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const isLastNameValid = last_name.length > 0;
  const isFirstNameValid = first_name.length > 0;
  const isBirthdayValid = birthdayRegEx.test(birthday);
  const isPhonenumberValid = phonenumberRegEx.test(phone_number);
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = pwRegex.test(password);

  const [showPassword, setShowPassword] = useState(true);

  const togglePass = () => {
    setShowPassword(boolean => !boolean);
  };

  const signupRequest = () => {
    fetch("http://10.58.52.58:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        last_name,
        first_name,
        phone_number,
        birthday,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  return (
    <div className="signup-main-container">
      <aside className="left-container">
        <div className="left-main-container">
          <div className="left-top-1st-container">
            <div className="left-top-icon-arrow">
              <span
                onClick={() => {
                  return navigate(`../`);
                }}
                className="material-symbols-outlined"
              >
                arrow_back
              </span>
            </div>
            <div className="left-brand">위케아</div>
          </div>
          <div className="left-top-2nd-container">
            <div className="left-2nd-text1">weKEA</div>
            <div className="left-2nd-text2">회원 가입</div>
          </div>
          <div className="left-top-3rd-container">
            <div className="left-3rd-text1">이미 가입하셨나요?</div>
            <Link className="left-3rd-text2">로그인 하기</Link>
          </div>
          <div className="left-blank-set">
            <div className="left-image-1st-container">
              {ASIDE_1ST.map(item => {
                return <img key={item.id} src={item.src} className="img" />;
              })}
            </div>
            <div className="left-image-2nd-container">
              {ASIDE_2ND.map(item => {
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
      </aside>
      <div className="right-container">
        <div className="right-main-container">
          <form className="right-mid-container" onChange={userInfoHander}>
            <div className="right-1st-set">
              <div className="right-1st-text">성</div>
              <input
                name="last_name"
                type="text"
                className={`right-1st-input ${
                  last_name.length === 0 || isLastNameValid
                    ? "valid-input"
                    : "invalid-input"
                } `}
              />
              {isLastNameValid || (
                <div className="right-valid-text">성을 입력해주세요.</div>
              )}
            </div>
            <div className="right-2nd-set">
              <div className="right-2nd-text">이름</div>
              <input
                type="text"
                name="first_name"
                className={`right-2nd-input ${
                  first_name.length === 0 || isFirstNameValid
                    ? "valid-input"
                    : "invalid-input"
                } `}
              />
              {isFirstNameValid || (
                <div className="right-valid-text">이름을 입력해주세요.</div>
              )}
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
              <input
                type="text"
                name="birthday"
                className={`right-3rd-input ${
                  birthday.length === 0 || isBirthdayValid
                    ? "valid-input"
                    : "invalid-input"
                } `}
              />
              {birthday.length === 0 || isBirthdayValid ? (
                <div className="right-3rd-text2">YYYY-MM-DD</div>
              ) : (
                <div className="right-3rd-text2-red">
                  생년월일을 YYYY-MM-DD 형식으로 입력해주세요.
                </div>
              )}
            </div>
            <div className="right-4th-set">
              <div className="right-4th-text">휴대폰</div>
              <input
                type="text"
                name="phone_number"
                className={`right-4th-input ${
                  phone_number.length === 0 || isPhonenumberValid
                    ? "valid-input"
                    : "invalid-input"
                } `}
              />
              {phone_number.length === 0 || isPhonenumberValid ? (
                <div>010-1234-5678</div>
              ) : (
                <div className="right-3rd-text2-red">
                  생년월일을 YYYY-MM-DD 형식으로 입력해주세요.
                </div>
              )}
            </div>
            <div className="right-5th-set">
              <div className="right-5th-text">이메일</div>
              <input
                type="text"
                name="email"
                className={`right-5th-input  ${
                  email.length === 0 || isEmailValid
                    ? "valid-input"
                    : "invalid-input"
                } `}
              />
              {email.length === 0 || isEmailValid || (
                <div className="right-5th-text-valid">
                  이메일을 입력해주세요.
                </div>
              )}
            </div>
            <div className="right-6th-set">
              <div className="right-6th-text">비밀번호</div>
              <input
                name="password"
                className={`right-6th-input ${
                  password.length === 0 || isPasswordValid
                    ? "valid-input"
                    : "invalid-input"
                } `}
                type={showPassword ? "password" : "text"}
              />
              <span
                onClick={togglePass}
                className="material-symbols-outlined visibility-icon"
              >
                {showPassword ? "visibility_off" : "visibility"}
              </span>
              {password.length === 0 || isPasswordValid || (
                <div className="right-password-text">
                  비밀번호는 8자 이상 입력해주세요
                </div>
              )}
            </div>
          </form>
          <div className="right-bottom-1st">
            <div className="right-bottom-1st-text-input">
              <input className="right-bottom-1st-input" type="checkbox" />
              <div className="right-bottom-1st-text">
                나의 프로필, 관심사 그리고 구매 이력에 따라 맞춰진 weKEA의
                홈퍼니싱 아이디어와 신상품 소식, 그리고 할인 혜택 정보를 받고
                싶어요!
              </div>
            </div>
            <div className="right-bottom-2nd">
              <div className="right-bottom-2nd-text-input">
                <input className="right-bottom-2nd-input" type="checkbox" />
                <div className="right-bottom-2nd-text">이메일 수신</div>
              </div>
              <div className="right-bottom-3rd-text-input">
                <input className="right-bottom-3rd-input" type="checkbox" />
                <div className="right-bottom-3rd-text">문자 수신</div>
              </div>
              <div className="right-bottom-4th-text-input">
                <input className="right-bottom-4th-input" type="checkbox" />
                <div className="right-bottom-4th-text">우편물 수신</div>
              </div>
            </div>
          </div>
          <div className="right-bottom-5th-text-input">
            <input className="right-bottom-5th-input" type="checkbox" />
            <div className="right-bottom-5th-text">
              (필수)약관을 모두 읽고 동의합니다.
            </div>
            <Link className="right-bottom-5th-link">이용약관</Link>
          </div>
          <div className="right-bottom-6th-text-input">
            <input className="right-bottom-6th-input" type="checkbox" />
            <div className="right-bottom-6th-text">
              (필수)개인정보 수집 • 이용에 동의합니다.
            </div>
            <Link className="right-bottom-6th-link">
              개인정보 수집 • 이용 동의
            </Link>
          </div>
          <button className="right-botton-button" onClick={signupRequest}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
