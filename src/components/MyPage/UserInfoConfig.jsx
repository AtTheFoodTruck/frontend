import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const UserInfoConfigContainer = styled.div`
  padding-top: 250px;
  width: 25em;
  margin: auto;

  .userChangeTitle {
  }

  .usernameDuplicateBtn {
    width: 50%;
  }

  .usernameDuplicate {
    text-align-last: center;
  }

  .passwordChangeTitle {
    margin-top: 100px;
  }

  .passwordChangeBtn {
    width: 50%;
  }

  .passwordChange {
    text-align-last: center;
  }
`;

const UserInfoConfig = () => {
  // 이름 관련 상태
  const [inputUsername, setInputUsername] = useState('');
  const [isName, setIsName] = useState(false);
  const [nameMessage, setNameMessage] = useState('Username');

  // 비밀번호  관련 상태
  const [inputPw, setInputPw] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('Current Password');

  const [inputpwVerification, setPwVerification] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState('New Password');

  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // 유저 정보
  const authorization = localStorage.getItem('Authorization');
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  // 이름 입력시 상태값 변경
  const handleInputUsername = (e) => {
    e.preventDefault();
    setInputUsername(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 20) {
      setNameMessage('2글자 이상 20글자 미만으로 입력해주세요.');
      setIsName(false);
      document.getElementById('input_username').style.color = 'red';
    } else {
      setNameMessage('Username');
      setIsName(true);
      document.getElementById('input_username').style.color = 'green';
    }
  };

  // 비밀번호 입력시 상태값 변경
  const handleInputPw = (e) => {
    e.preventDefault();
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);

    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,1000}$/;

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상');
      document.getElementById('input_pw').style.color = 'red';
      setIsPassword(false);
    } else {
      setPasswordMessage('Current Password');
      document.getElementById('input_pw').style.color = 'green';
      setIsPassword(true);
    }
  };

  // 확인 비밀번호 입력시 상태값 변경
  const onChangePasswordConfirm = (e) => {
    e.preventDefault();
    const passwordConfirmCurrent = e.target.value;
    setPwVerification(passwordConfirmCurrent);
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,1000}$/;

    if (!passwordRegex.test(passwordConfirmCurrent)) {
      setPasswordConfirmMessage('숫자+영문자+특수문자 조합으로 8자리 이상');
      document.getElementById('input_pwVerification').style.color = 'red';
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage('New Password');
      document.getElementById('input_pwVerification').style.color = 'green';
      setIsPasswordConfirm(true);
    }
  };

  // 이름 중복 확인
  async function usernameDuplicateCheck(e) {
    e.preventDefault();
    if (inputUsername === '') {
      alert('이름을 입력하세요');
    } else if (!isName) {
      alert('형식을 지켜주세요');
    } else {
      axios
        .post(
          // 'https://apifood.blacksloop.com/user-service/users/v1/validation/name',
          'https://apifood.blacksloop.com/user-service/users/v1/validation/name',
          {
            username: inputUsername,
          }
        )
        .then(function (response) {
          if (response.data.result === 'fail') {
            alert(response.data.message);
            document.getElementById('input_username').value = null;
            console.log(response);
          } else {
            console.log(response);

            axios
              .patch(
                // 'https://apifood.blacksloop.com/user-service/users/v1/mypage/name',
                'https://apifood.blacksloop.com/user-service/users/v1/mypage/name',
                {
                  username: inputUsername,
                },
                {
                  headers: headers,
                }
              )
              .then(function (response) {
                alert(response.data.data.username + '으로 변경되었습니다.');
                document.getElementById('input_username').value = null;
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  //패스워드 변경
  async function onPasswordChange(e) {
    e.preventDefault();

    if (inputPw === '') {
      alert('현재 패스워드를 입력하세요');
    } else if (!isPassword && !isPasswordConfirm) {
      alert('비밀번호 형식을 지켜주세요');
    } else {
      axios
        .patch(
          // 'https://apifood.blacksloop.com/user-service/users/v1/mypage/password',
          'https://apifood.blacksloop.com/user-service/users/v1/mypage/password',
          {
            current_password: inputPw,
            new_password: inputpwVerification,
          },
          {
            headers: headers,
          }
        )
        .then(function (response) {
          if (response.data.result === 'fail') {
            alert('현재 비밀번호가 맞지 않습니다.');
          } else {
            alert('비밀번호가 변경되었습니다.');
            window.location.replace('/login');
            document.location.reload();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <UserInfoConfigContainer>
      <form className="container">
        <div className="userChangeTitle">
          <p className="fs-4">유저이름 변경</p>
        </div>

        <div className="username">
          <div className="form-floating">
            <input
              type="text"
              name="input_username"
              value={inputUsername}
              className="form-control"
              id="input_username"
              placeholder="이름을 입력하세요."
              onChange={handleInputUsername}
            />
            <label for="floatingPassword">{nameMessage}</label>
          </div>
        </div>

        <div className="usernameDuplicate">
          <button
            type="submit"
            className="btn btn-outline-secondary usernameDuplicateBtn mt-3"
            onClick={usernameDuplicateCheck}
          >
            변경
          </button>
        </div>
        <div className="passwordChangeTitle">
          <p className="fs-4">비밀번호 변경</p>
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
              onChange={onChangePasswordConfirm}
            />
            <label for="floatingPassword">{passwordConfirmMessage}</label>
          </div>
        </div>

        <div className="passwordChange">
          <Link to="/userinfo-password">
            <button
              type="submit"
              className="btn btn-outline-secondary passwordChangeBtn mt-3"
              onClick={onPasswordChange}
            >
              변경
            </button>
          </Link>
        </div>
      </form>
    </UserInfoConfigContainer>
  );
};

export default UserInfoConfig;
