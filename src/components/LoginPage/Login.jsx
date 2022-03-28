import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      로그인 페이지 입니다
      <Link to="/memberregister">
        <button>개인 회원가입</button>
      </Link>
      <Link to="/ownerregister">
        <button>사장님 회원가입</button>
      </Link>
    </>
  );
};

export default Login;
