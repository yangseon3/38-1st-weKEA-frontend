import React from "react";

const LastName = props => {
  const { lastName, isLastNameValid } = props;
  return (
    <div>
      <div className="signup-form-text">성</div>
      <input
        name="lastName"
        type="text"
        className={`signup-form-input ${
          lastName.length === 0 || isLastNameValid
            ? "valid-input"
            : "invalid-input"
        } `}
      />
      {isLastNameValid || (
        <div className="signup-form-valid-text">성을 입력해주세요.</div>
      )}
    </div>
  );
};

export default LastName;
