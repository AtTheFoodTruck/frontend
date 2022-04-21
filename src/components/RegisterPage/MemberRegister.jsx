import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const MemberRegisterContainer = styled.form`
  padding-top: 250px;
  width: 20em;
  margin: auto;
  text-align-last: center;

  .email {
    text-align-last: left;
  }
  .password {
    margin-top: 0.5em;
    text-align-last: left;
  }

  .nickname {
    margin-top: 0.5em;
    text-align-last: left;
  }

  .phonenumber {
    margin-top: 0.5em;
    text-align-last: left;
  }

  .btn {
    margin-top: 2em;
    width: 100%;
  }
`;

const MemberRegister = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputNickname, setInputNickname] = useState('');
  const [inputPhonenumber, setInputPhonenumber] = useState('');
  const navigate = useNavigate();

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
    console.log(e.target.value);
  };

  const handleInputNickname = (e) => {
    setInputNickname(e.target.value);
    console.log(e.target.value);
  };

  const handleInputPhonenumber = (e) => {
    setInputPhonenumber(e.target.value);
    console.log(e.target.value);
  };

  async function onClickJoin(e) {
    e.preventDefault();

    if (inputEmail === '') {
      alert('아이디를 입력하세요');
    } else if (inputPw === '') {
      alert('비밀번호를 입력하세요');
    } else {
      axios
        .post('http://10.10.10.17:8000/user-service/users/v1/join', {
          email: inputEmail,
          username: inputNickname,
          password: inputPw,
          phone_num: inputPhonenumber,
        })
        .then(function (response) {
          alert('가입완료!');
          console.log(response);
          navigate('/login', { replace: true });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <MemberRegisterContainer>
      <h1>Sign up</h1>

      <div className="email">
        <div className="form-floating">
          <input
            type="text"
            name="input_email"
            value={inputEmail}
            className="form-control"
            id="input_email"
            placeholder="아이디를 입력하세요."
            onChange={handleInputEmail}
          />
          <label for="floatingInput">Email address</label>
        </div>
      </div>

      <div className="password">
        <div className="form-floating">
          <input
            type="password"
            name="input_pw"
            value={inputPw}
            className="form-control"
            id="input_pw"
            placeholder="비밀번호를 입력하세요."
            onChange={handleInputPw}
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>

      <div className="nickname">
        <div className="form-floating">
          <input
            type="text"
            name="input_nickname"
            value={inputNickname}
            className="form-control"
            id="input_nickname"
            placeholder="이름을 입력하세요."
            onChange={handleInputNickname}
          />
          <label for="floatingPassword">Nickname</label>
        </div>
      </div>

      <div className="phonenumber">
        <div className="form-floating">
          <input
            type="text"
            name="input_phonenumber"
            value={inputPhonenumber}
            className="form-control"
            id="input_phonenumber"
            placeholder="휴대전화 번호를 입력하세요."
            onChange={handleInputPhonenumber}
          />
          <label for="floatingPassword">Phone Number (xxx-xxxx-xxxx)</label>
        </div>
      </div>
      <div className="join">
        <button
          type="submit"
          className=" btn btn-lg btn-outline-secondary"
          onClick={onClickJoin}
        >
          회원가입
        </button>
      </div>
    </MemberRegisterContainer>
  );
};

export default MemberRegister;
