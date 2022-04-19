import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const InputContainer = styled.form`
  .email {
    text-align-last: left;
  }
  .password {
    margin-top: 0.5em;
    text-align-last: left;
  }
  .btn {
    margin-top: 0.5em;
    width: 100%;
  }
`;

const LoginInput = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  let [accessToken, setAccessToken] = useState('');
  let [refreshToken, setRefreshToken] = useState('');
  let [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
    console.log(e.target.value);
  };

  const handleInputId = (e) => {
    setInputId(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('Authorization', accessToken);
    localStorage.setItem('userId', userId);
    localStorage.setItem('refreshToken', refreshToken);
    console.log('accessToken : ' + accessToken);
    console.log('userId : ' + userId);
    console.log('refreshToken : ' + refreshToken);
  }, [accessToken, userId, refreshToken]);

  async function onClickLogin(e) {
    e.preventDefault();

    if (inputId === '') {
      alert('아이디를 입력하세요');
    } else if (inputPw === '') {
      alert('비밀번호를 입력하세요');
    } else {
      axios
        .post('http://localhost:8000/user-service/users/v1/join', {
          email: inputId,
          password: inputPw,
        })
        .then(function (response) {
          console.log(response.data.accesToken);
          console.log(response.data.refreshToken);
          console.log(response.data.userId);
          setAccessToken(response.data.accesToken);
          setRefreshToken(response.data.refreshToken);
          setUserId(response.data.userId);
          // navigate('/', { replace: true });
        });
    }
  }

  return (
    <InputContainer>
      <div className="login__body--id">
        <label htmlFor="input_id" className="login__body--id-icon">
          {' '}
        </label>
        <input
          type="text"
          name="input_id"
          value={inputId}
          className="login__body--id-input"
          id="input_id"
          placeholder="아이디를 입력하세요."
          onChange={handleInputId}
        />
      </div>

      <div className="login__body--pw">
        <label htmlFor="input_pw" className="login__body--pw-icon">
          {' '}
        </label>
        <input
          type="password"
          name="input_pw"
          value={inputPw}
          className="login__body--pw-input"
          id="input_pw"
          placeholder="비밀번호를 입력하세요."
          onChange={handleInputPw}
        />
      </div>

      <button
        type="submit"
        className="login__btn--signin"
        onClick={onClickLogin}
      >
        로그인
      </button>
    </InputContainer>
  );
};

export default LoginInput;
