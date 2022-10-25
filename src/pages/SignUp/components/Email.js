import React from "react";

const Email = props => {
  const { email, isEmailValid } = props;
  return (
    <div>
      <div className="signup-form-text">이메일</div>
      <input
        type="text"
        name="email"
        className={`signup-form-input  ${
          email.length === 0 || isEmailValid ? "valid-input" : "invalid-input"
        } `}
      />
      {email.length === 0 || isEmailValid || (
        <div className="signup-form-valid-text">이메일을 입력해주세요.</div>
      )}
    </div>
  );
};

export default Email;
