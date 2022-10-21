import React from "react";

const Password = props => {
  const { password, isPasswordValid, showPassword, togglePass } = props;
  return (
    <div className="signup-form-password-wrapper">
      <div className="signup-form-text">비밀번호</div>
      <input
        name="password"
        className={`signup-form-input ${
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
        <div className="signup-form-valid-text">
          비밀번호는 8자 이상 입력해주세요
        </div>
      )}
    </div>
  );
};

export default Password;
