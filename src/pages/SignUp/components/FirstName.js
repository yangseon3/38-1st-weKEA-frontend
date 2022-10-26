import React from "react";

const Password = props => {
  const { firstName, isFirstNameValid } = props;
  return (
    <div>
      <div className="signup-form-text">이름</div>
      <input
        type="text"
        name="firstName"
        className={`signup-form-input ${
          firstName.length === 0 || isFirstNameValid
            ? "valid-input"
            : "invalid-input"
        } `}
      />
      {isFirstNameValid || (
        <div className="signup-form-valid-text">이름을 입력해주세요.</div>
      )}
    </div>
  );
};

export default Password;
