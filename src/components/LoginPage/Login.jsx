import React from "react";
import styled from "styled-components";
import LoginInput from "./LoginInput";
import LoginJoinBtn from "./LoginJoinBtn";

const LoginContainer = styled.div`
  padding-top: 250px;
  width: 20em;
  margin: auto;
  text-align-last: center;
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginInput />
      <LoginJoinBtn />
    </LoginContainer>
  );
};

export default Login;
