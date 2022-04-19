import React from "react";
import styled from "styled-components";

const InputContainer = styled.form`  
  .email {
    text-align-last: left;
  }
  .password {
    margin-top : 0.5em;
    text-align-last: left;
  }
  .btn {
    margin-top : 0.5em;
    width: 100%;
  }
`;

function User({ id }) {
  const { data: user, error, isLoading } = useAsync({
    promiseFn: getUser,
    id,
    watch: id
  });
}

const LoginInput = () => {
  return (
    <InputContainer>
        <h1>Login</h1>                     
        <div className='email'>
            <div className='form-floating'>
                <input
                    type='email'
                    className='form-control'
                    id='floatingInput'
                    placeholder='name@example.com'
                />
                <label for='floatingInput'>Email address</label>
            </div>
        </div>

        
        <div className="password">
            <div className='form-floating'>
                <input
                type='password'
                className='form-control'
                id='floatingPassword'
                placeholder='Password'
                />
                <label for='floatingPassword'>Password</label>
            </div>
        </div>
        
        <input type="submit"  className='btn btn-lg btn-outline-secondary' value="Login" />
    </InputContainer> 
  );
};

export default LoginInput;
