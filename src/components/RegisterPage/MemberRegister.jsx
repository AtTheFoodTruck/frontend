import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

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

  .username {
    margin-top: 0.5em;
    text-align-last: left;
  }

  .phonenumber {
    margin-top: 0.5em;
    text-align-last: left;
  }

  btn {
    margin-top: 2em;
    width: 100%;
  }
`;

const MemberRegister = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPhonenumber, setInputPhonenumber] = useState("");
  const [mailDuplicate, setMailDuplicate] = useState(false);
  const [nameDuplicate, setNameDuplicate] = useState(false);
  const navigate = useNavigate();

  // 메일 입력시 상태값 변경
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  // 비밀번호 입력시 상태값 변경
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // 이름 입력시 상태값 변경
  const handleInputUsername = (e) => {
    setInputUsername(e.target.value);
  };

  // 휴대 전화 번호 입력시 상태값 변경
  const handleInputPhonenumber = (e) => {
    setInputPhonenumber(e.target.value);
  };

  // 메일 중복 확인
  async function mailDuplicateCheck(e) {
    e.preventDefault();
    if (inputEmail === "") {
      alert("이메일을 입력하세요");
    } else {
      axios
        .post(
          "https://apifood.blacksloop.com/user-service/users/v1/validation/email",
          {
            email: inputEmail,
          }
        )
        .then(function (response) {
          // 입력한 값이 DB에 저장되어 있다면 0(=false)를 반환한다.
          if (response.data.data.userId !== inputEmail) {
            setMailDuplicate(false);
            alert("사용가능합니다!");
          } else {
            alert("다른 메일로 설정 해주세요");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  // 이름 중복 확인
  async function usernameDuplicateCheck(e) {
    e.preventDefault();
    if (inputUsername === "") {
      alert("이름을 입력하세요");
    } else {
      axios
        .post(
          "https://apifood.blacksloop.com/user-service/users/v1/validation/name",
          {
            username: inputUsername,
          }
        )
        .then(function (response) {
          // 입력한 값이 DB에 저장되어 있다면 0(=false)를 반환한다.
          if (response.data.data.username !== inputUsername) {
            setNameDuplicate(false);
            alert("사용가능합니다!");
          } else {
            alert("다른 이름으로 설정 해주세요");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  // 회원 가입
  async function onClickJoin(e) {
    e.preventDefault();
    if (inputEmail === "") {
      alert("아이디를 입력하세요");
    } else if (inputPw === "") {
      alert("비밀번호를 입력하세요");
    } else if (mailDuplicate) {
      alert("메일 중복확인을 해주세요");
    } else if (nameDuplicate) {
      alert("이름 중복확인을 해주세요");
    } else {
      axios
        .post("https://apifood.blacksloop.com/user-service/users/v1/join", {
          email: inputEmail,
          username: inputUsername,
          password: inputPw,
          phone_num: inputPhonenumber,
        })
        .then(function (response) {
          alert("가입완료!");
          console.log(response);
          navigate("/login", { replace: true });
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
        <div className="mailDuplicate">
          <button
            type="submit"
            className=" btn btn-lg btn-outline-secondary"
            onClick={mailDuplicateCheck}
          >
            중복 검사
          </button>
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
          <label for="floatingPassword">Username</label>
        </div>

        <div className="usernameDuplicate">
          <button
            type="submit"
            className=" btn btn-lg btn-outline-secondary"
            onClick={usernameDuplicateCheck}
          >
            중복 검사
          </button>
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
