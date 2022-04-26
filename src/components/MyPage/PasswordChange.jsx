import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PasswordChangeContainer = styled.div`
  padding-top: 250px;
  width: 25em;
  margin: auto;
`;

const PasswordChange = () => {
  const [inputPw, setInputPw] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("Password");

  const [inputpwVerification, setPwVerification] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState("Password Check");

  return (
    <PasswordChangeContainer>
      <h2>비밀번호 변경</h2>
      <div className="password">
        <div className="form-floating">
          <input
            type="password"
            name="input_pw"
            value={inputPw}
            className="form-control"
            id="input_pw"
            placeholder="비밀번호를 입력하세요."
            //onChange={handleInputPw}
          />
          <label for="floatingPassword">{passwordMessage}</label>
        </div>
      </div>

      <div className="passwordVerification">
        <div className="form-floating">
          <input
            type="password"
            name="input_pwVerification"
            value={inputpwVerification}
            className="form-control"
            id="input_pwVerification"
            placeholder="비밀번호 확인 입력하세요."
            //onChange={onChangePasswordConfirm}
          />
          <label for="floatingPassword">{passwordConfirmMessage}</label>
        </div>
      </div>
    </PasswordChangeContainer>
  );
};

export default PasswordChange;
