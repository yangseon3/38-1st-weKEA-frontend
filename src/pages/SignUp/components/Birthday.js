import React from "react";

const Birthday = props => {
  const { alert, setAlert, birthday, isBirthdayValid } = props;
  return (
    <>
      <div className="signup-form-content-hover">
        <div className="right-3rd-text1">생일</div>
        {alert && (
          <div className="signup-form-hover">
            만 14세 이상만 가입할 수 있습니다
          </div>
        )}
        <div
          className="signup-form-hover-img"
          onMouseEnter={() => setAlert(true)}
          onMouseLeave={() => setAlert(false)}
        >
          <img
            src="https://img.icons8.com/ios/344/info--v3.png"
            alt="warning"
          />
        </div>
      </div>
      <div>
        <input
          type="text"
          name="birthday"
          className={`signup-form-input ${
            birthday.length === 0 || isBirthdayValid
              ? "valid-input"
              : "invalid-input"
          } `}
        />
        {birthday.length === 0 || isBirthdayValid ? (
          <div>YYYY-MM-DD</div>
        ) : (
          <div className="signup-form-valid-text">
            생년월일을 YYYY-MM-DD 형식으로 입력해주세요.
          </div>
        )}
      </div>
    </>
  );
};

export default Birthday;
