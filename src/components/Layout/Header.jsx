import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "../MyPage/DropDown";
import styles from "./Header.module.css";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      console.log("false" + window.innerWidth);
    } else {
      setDropdown(true);
      console.log("true" + window.innerWidth);
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
    <header className={styles.header}>
      <li>
        <Link className={styles.logo} to="/">
          Foodtruck Around Me
        </Link>
      </li>
      <form action="">
        <input type="text" placeholder="메뉴명을 입력해주세요" />
      </form>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.a} to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/store">store</Link>
        </li>
        <li>
          <Link to="/cart">cart</Link>
        </li>
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to="/userinfo-config">mypage</Link>
          {dropdown && <DropDown />}
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
