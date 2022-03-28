import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{ background: "lightgray", padding: 16, fontSize: 24}}
    >
      <Link to="/">
        <button>Foodtruck Around Me</button>
      </Link>
      <form action="">
        <input type="text" placeholder="메뉴명을 입력해주세요" />
      </form>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
      <Link to="/store">
        <button>store</button>
      </Link>
      <Link to="/cart">
        <button>cart</button>
      </Link>
      <Link to="/mypage">
        <button>my page</button>
      </Link>
      <Link to="/login">
        <button>login</button>
      </Link>
    </header>
  );
};

export default Header;
