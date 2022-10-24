import React, { useState } from "react";
import "./SignUp.scss";
import API from "../../config";
import LastName from "./components/LastName";
import FirstName from "./components/FirstName";
import Birthday from "./components/Birthday";
import PhoneNumber from "./components/PhoneNumber";
import Email from "./components/Email";
import Password from "./components/Password";
import Checkbox from "./components/Checkbox";
import Aside from "./components/Aside";

function SignUp() {
  const [alert, setAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [userInfo, setUserInfo] = useState({
    lastName: "",
    firstName: "",
    birthday: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const userInfoHander = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const { lastName, firstName, birthday, phoneNumber, email, password } =
    userInfo;

  const birthdayRegEx =
    /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  // 년 자리에는 19나 20으로 시작하여 뒤에 숫자는 0~9까지 숫자 중 두개를 선택
  // 월 자리에는 첫번째 자리는 0으로 시작 할 경우에 뒷자리 숫자를  0~9까지 숫자 중 하나를 선택하고 1로 시작 할 경우에는 뒷자리가 0~2까지 숫자를 선택
  // 일 자리에는 첫번째 자리가 1로 시작 할 경우에 뒷자리 숫자를 1~9 안의 숫자를 선택하고 첫번째 자리가 1~2 안의 숫자를 선택할 경우 뒷자리 숫자를 0~9 안의 숫자를 선택하고 첫번째 자리가 3 일 경우에는 뒷자리가 0~1 안의 숫자를 선택

  const phonenumberRegEx = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
  // 앞자리 숫자는 2~3개, 두번째 자리는 숫자는 3~4개, 세번째 자리는 숫자 4개로 고정하고 가능하며 숫자는 0~9까지 사용가능

  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  // @ 전후로 숫자 영어 대소문자 -_사용 가능하고 .이후 2~3개 영어 대소문자 사용가능

  const pwRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  // 영어 대소문자 숫자 특수문자 각각 한개를 포함하여 8자리 이상 사용가능

  const isLastNameValid = lastName.length > 0;
  const isFirstNameValid = firstName.length > 0;
  const isBirthdayValid = birthdayRegEx.test(birthday);
  const isPhonenumberValid = phonenumberRegEx.test(phoneNumber);
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = pwRegex.test(password);

  const togglePass = () => {
    setShowPassword(boolean => !boolean);
  };

  const signupRequest = () => {
    fetch(API.signup, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        lastName,
        firstName,
        phoneNumber,
        birthday,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div className="signup-page">
      <Aside />
      <main className="signup-form-wrapper">
        <div className="signup-form">
          <form className="signup-form-body" onChange={userInfoHander}>
            <LastName lastName={lastName} isLastNameValid={isLastNameValid} />
            <FirstName
              firstName={firstName}
              isFirstNameValid={isFirstNameValid}
            />
            <Birthday
              alert={alert}
              setAlert={setAlert}
              isBirthdayValid={isBirthdayValid}
              birthday={birthday}
            />
            <PhoneNumber
              phoneNumber={phoneNumber}
              isPhonenumberValid={isPhonenumberValid}
            />
            <Email email={email} isEmailValid={isEmailValid} />
            <Password
              showPassword={showPassword}
              password={password}
              isPasswordValid={isPasswordValid}
              togglePass={togglePass}
            />

            <Checkbox />
            <button className="signup-form-button" onClick={signupRequest}>
              회원가입
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
