import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginBtnContainer = styled.div`
  .btn {
    margin-top: 0.5em;
    width : 100%;
  }
`;

const LoginBtn = () => {
  return (
    <LoginBtnContainer>
      <button className='btn btn-lg btn-outline-secondary'>
      Login
      </button>
    </LoginBtnContainer>
  );
};

export default LoginBtn;
