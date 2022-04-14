import React from "react";
import styled from "styled-components";
import LoginInput from './LoginInput';
import LoginBtn from "./LoginBtn";
import LoginJoinBtn from "./LoginJoinBtn";

const LoginContainer = styled.div`
  padding-top: 20%;
  width: 50%;
  margin: auto;
  text-align-last: center;
`;

const Login = () => {
  return (
    <LoginContainer>
        <LoginInput />
        <LoginBtn />
        <LoginJoinBtn />
    </LoginContainer>
  );
};

export default Login;
