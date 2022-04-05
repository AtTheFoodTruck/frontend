import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../MyPage/DropDown';
import styles from './Header.module.css';
import { Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  // const [dropdown, setDropdown] = useState(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //     console.log('false' + window.innerWidth);
  //   } else {
  //     setDropdown(true);
  //     console.log('true' + window.innerWidth);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //     console.log('false' + window.innerWidth);
  //   }
  // };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          Foodtruck Around Me
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor03'
          aria-controls='navbarColor03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* 검색창 */}
        <form className='d-flex'>
          <input
            className='form-control me-sm-3'
            type='text'
            placeholder='메뉴명을 입력해주세요!'
          />
          <button class='btn btn-secondary my-2 my-sm-0' type='submit'>
            Search
          </button>
        </form>

        <div className='collapse navbar-collapse' id='navbarColor03'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/store' className='nav-link'>
                Store
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/cart' className='nav-link'>
                Cart
              </Link>
            </li>
            <NavDropdown title='Mypage' id='nav-dropdown'>
              <NavDropdown.Item eventKey='4.1'>정보수정</NavDropdown.Item>
              <NavDropdown.Item eventKey='4.2'>주문내역</NavDropdown.Item>
              <NavDropdown.Item eventKey='4.3'>리뷰관리</NavDropdown.Item>
            </NavDropdown>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
