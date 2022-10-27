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
          휴대폰 번호가 올바르지 않습니다.
        </div>
      )}
    </div>
  );
};

export default PhoneNumber;
