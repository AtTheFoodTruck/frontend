import React from 'react';
// import { useRef } from 'react';

// //ref로 사용자 입력 가져옴, onchange로 변경해볼까 고민중..
// const MemberRegister = () => {
//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();
//   const nicknameInputRef = useRef();
//   const phonenumberInputRef = useRef();

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const enterEmail = emailInputRef.current.value;
//     const enterNickname = nicknameInputRef.current.value;
//     const enterPassword = passwordInputRef.current.value;
//     const enterPhonenumber = phonenumberInputRef.current.value;

const MemberRegister = () => {
  return (
    <section>
      <h1>개인 회원가입</h1>
      <form>
        <label htmlFor='email'>이메일</label>
        <input type='email' id='email' />
        <button>중복확인</button>
        <label htmlFor='nickname'>닉네임</label>
        <input type='nickname' id='nickname' />
        <button>중복확인</button>
        <label htmlFor='password'>비밀번호</label>
        <input type='password' id='password' />
        <label htmlFor='passwordConfirm'>비밀번호 확인</label>
        <input
          type='password'
          id='passwordConfirm'
          placeholder='비밀번호 확인'
        />
        <label htmlFor='phonenumber'>전화번호</label>
        <input type='phonenumber' id='phonenumber' required />
        <button>회원가입</button>
      </form>
    </section>
  );
};
//   };
// };
export default MemberRegister;
