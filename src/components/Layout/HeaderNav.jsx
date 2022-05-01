import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DropDown from "../MyPage/DropDown";
import axios from "axios";

const NavR = styled.div`
  display: flex;
  justify-content: end;
  // margin-right: 90px;

  .logout {
    cursor: pointer;
  }

  //네비게이션 메뉴바 오른쪽 정렬
`;

const HeaderNav = () => {
  const [dropdown, setDropdown] = useState(false);
  const authorization = localStorage.getItem("Authorization");
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };
  let isAuthorized = localStorage.getItem("Authorization");
  const userId = localStorage.getItem("userId");
  const [cartBadge, setCartBadge] = useState([]);
  const size = 20;

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
      // console.log("false" + window.innerWidth);
    }
  };
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          // `https://apifood.blacksloop.com/order-service/orders/v1/customer/carts/${userId}?page=0&size=${size}`,
          `https://apifood.blacksloop.com/order-service/orders/v1/customer/carts/${userId}?page=0&size=${size}`,
          { headers }
        )
        .then((res) => {
          if (Array.isArray(res.data.data) && res.data.data.length === 0) {
            setCartBadge(res.data.data.cartList.length);
            console.log(
              "현재 장바구니 배열의 길이는  = " +
                JSON.stringify(res.data.data.length)
            );
          }
          setCartBadge(res.data.data.cartList);
          console.log(
            "현재 장바구니 배열의 길이는 = " +
              JSON.stringify(res.data.data.cartList.length)
          );
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <NavR className="ms-0" id="navbarColor03">
      <ul className="navbar-nav">
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
              <Link className="nav-link" to="/cart">
                cart
                <CartBadge>{cartBadge.length}</CartBadge>
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
            <li className="nav-item">
              <div onClick={onClickLogout} className="nav-link logout">
                logout
              </div>
            </li>
          </>
        )}
      </ul>
    </NavR>
  );
};

const CartBadge = styled.span`
  padding: 0 5px;
  background-color: red;
  color: black;
  border-radius: 5px;
  position: relative;
  top: -15px;
`;
export default HeaderNav;


