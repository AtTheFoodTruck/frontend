import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginBtnContainer = styled.div`
  .btn {
    margin-top: 2em;
    width: 50%;
  }
`;

const LoginJoinBtn = () => {
  return (
    <LoginBtnContainer>
<<<<<<< HEAD
          <Link to='/member-register'>
              <button className='btn btn-outline-secondary'>
              개인 가입
              </button>
          </Link>

          <Link to='/owner-register'>
              <button className='btn btn-outline-secondary'>
              사장 가입
              </button>
          </Link>
=======
      <Link to="/member-register">
        <button className="btn btn-outline-secondary">개인 가입</button>
      </Link>

      <Link to="/owner-register">
        <button className="btn btn-outline-secondary">사장 가입</button>
      </Link>
>>>>>>> origin/feature-review_history
    </LoginBtnContainer>
  );
};

export default LoginJoinBtn;
