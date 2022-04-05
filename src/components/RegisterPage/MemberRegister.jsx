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
    <>
      <section className='container mt-5 p-5'>
        <h1 className='text-center'>Join</h1>
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <div className='container mt-sm-5'>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='이메일'
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
                <button
                  className='btn btn-primary ms-3'
                  type='button'
                  id='button-addon2'
                >
                  중복확인
                </button>
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='닉네임'
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
                <button
                  className='btn btn-primary ms-3'
                  type='button'
                  id='button-addon2'
                >
                  중복확인
                </button>
              </div>
              <div className='input-group mb-3 w-75'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='비밀번호'
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
              </div>
              <div className='input-group mb-3 w-75'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='비밀번호 확인'
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
              </div>
              <div className='input-group mb-3 w-75'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='전화번호'
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
              </div>
            </div>
          </div>
          <div className='col'></div>
        </div>
      </section>
      <section className='container mt-1'>
        <div className='row text-center'>
          <div className='col'>
            <button type='button' class='btn btn-outline-secondary'>
              가입하기
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
//   };
// };
export default MemberRegister;
