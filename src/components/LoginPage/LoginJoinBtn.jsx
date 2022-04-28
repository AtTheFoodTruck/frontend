import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginBtnContainer = styled.div`
  .btn {
    width: 100%;
    margin-top: 0.5em;
  }
`;

const LoginJoinBtn = () => {
  return (
    <LoginBtnContainer>
      <Link to="/member-register">
        <button className="btn btn-lg btn-outline-secondary"> Join </button>
      </Link>
    </LoginBtnContainer>
  );
};

export default LoginJoinBtn;
