import React from 'react';

//TODO. 중복체크, 확인 버튼 배치
//TODO. 유효성검사, 수정버튼 처리

const UserInfoConfig = () => {
  return (
    <section className='container mt-5'>
      <section className='title text-center'>
        <h1>내 정보 수정</h1>
      </section>
      <section className='row'>
        <div className='col'></div>

        {/*인풋박스  시작*/}
        <div className=' col form-group'>
          <label className='col-form-label mt-4' for='inputDefault'>
            닉네임
          </label>
          <input
            type='text'
            className='form-control'
            id='inputDefault'
            aria-describedby='button-addon2'
          />
          <button type='button' className='btn btn-primary' id='button-addon2'>
            중복체크
          </button>
          <label className='col-form-label mt-4' for='inputDefault'>
            현재 비밀번호
          </label>
          <input type='text' className='form-control' id='inputDefault' />
          <button type='button' className='btn btn-primary'>
            확인
          </button>
          <label className='col-form-label mt-4' for='inputDefault'>
            신규 비밀번호
          </label>
          <input type='password' className='form-control' id='inputDefault' />
        </div>
        {/*인풋박스  끝*/}
        <div className='col'></div>

        {/* 수정버튼 */}
        <section className='container row text-center mt-5'>
          <div className='col'></div>
          <div className='col editBtn'>
            <button type='button' className='btn btn-outline-secondary'>
              수정하기
            </button>
          </div>
          <div className='col'></div>
        </section>
      </section>
    </section>
  );
};

export default UserInfoConfig;
