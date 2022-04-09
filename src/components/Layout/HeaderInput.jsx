import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Inputform = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 51%;
  width: 15%;
  //input창 중앙으로
`;

const HeaderInput = () => {
  return (
    <Inputform className=' '>
      <input className='form-control ' type='text' placeholder='Search' />
      <Link
        to='/search-list'
        button
        className='btn btn-secondary my-2 my-sm-0'
        type='submit'
      >
        Search
      </Link>
    </Inputform>
  );
};

export default HeaderInput;
