import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DropDown from "../MyPage/DropDown";

const NavR = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 90px;

  .logout {
    cursor: pointer;
  }

  //네비게이션 메뉴바 오른쪽 정렬
`;

const HeaderNav = () => {
  const [dropdown, setDropdown] = useState(false);

  let isAuthorized = localStorage.getItem("Authorization");

  const onClickLogout = () => {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    window.location.replace("/");
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      // console.log("false" + window.innerWidth);
    } else {
      setDropdown(true);
      // console.log("true" + window.innerWidth);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
      console.log("false" + window.innerWidth);
    }
  };

  return (
    <NavR className="collapse navbar-collapse " id="navbarColor03">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/store">
            store
          </Link>
        </li>

        {!isAuthorized ? (
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              login
            </Link>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <div onClick={onClickLogout} className="nav-link logout">
                logout
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                cart
              </Link>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link className="nav-link dropdown-toggle" to="/userinfo-config">
                mypage
              </Link>
              {dropdown && <DropDown />}
            </li>
          </>
        )}
      </ul>
    </NavR>
  );
};

// const NavR = styled.div`
//   display: flex;
//   justify-content: end;
//   margin-right: 90px;

//   //네비게이션 메뉴바 오른쪽 정렬
// `;
export default HeaderNav;
