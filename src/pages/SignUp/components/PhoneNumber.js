import React from "react";

const PhoneNumber = props => {
  const { phoneNumber, isPhonenumberValid } = props;
  return (
    <div>
      <div className="signup-form-text">휴대폰</div>
      <input
        type="text"
        name="phoneNumber"
        className={`signup-form-input ${
          phoneNumber.length === 0 || isPhonenumberValid
            ? "valid-input"
            : "invalid-input"
        } `}
      />
      {phoneNumber.length === 0 || isPhonenumberValid ? (
        <div>010-1234-5678</div>
      ) : (
        <div className="signup-form-valid-text">
          생년월일을 YYYY-MM-DD 형식으로 입력해주세요.
        </div>
      )}
    </div>
  );
};

export default PhoneNumber;
