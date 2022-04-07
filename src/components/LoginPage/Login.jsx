import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container Login mt-5'>
      <section className='title text-center'>
        <h1>Login</h1>
      </section>
      <section className='row mt-5'>
        <div className='col'></div>
        <div className='col'>
          {' '}
          <div className='email'>
            <div className='form-floating mb-3'>
              <input
                type='email'
                className='form-control'
                id='floatingInput'
                placeholder='name@example.com'
              />
              <label for='floatingInput'>Email address</label>
            </div>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
            />
            <label for='floatingPassword'>Password</label>
          </div>
          <div className='password'></div>
          <div className='LoginBtn mt-5'>
            <div className='d-grid gap-2'>
              <button
                className='btn btn-lg btn-outline-secondary'
                type='button'
              >
                Login
              </button>
            </div>
          </div>
          <section className='JoinBtn'>
            <Link to='/member-register'>
              <div className='d-grid gap-2'>
                <button
                  className='btn btn-lg btn-outline-secondary'
                  type='button'
                >
                  Join
                </button>
              </div>
            </Link>
          </section>
        </div>
        <div className='col'></div>
      </section>
    </div>
  );
};

export default Login;
