import React, { useEffect } from "react";
import styled from "styled-components";

const HomeCategories = ({
  setActiveactiveMenuList,
  activeMenuList,
  setFiltered,
  popular,
}) => {
  useEffect(() => {
    if (activeMenuList === "전체") {
      setFiltered(popular);
      console.log(activeMenuList);
      return;
    }
    const filtered = popular.filter((item) =>
      item.categoryName.includes(activeMenuList)
    );
    console.log(activeMenuList);
    setFiltered(filtered);
  }, [activeMenuList]);

  //리팩터링 필요함
  function handleClick() {
    // paginate(1);
    setActiveactiveMenuList("전체");
  }
  function handleClick2() {
    // paginate(1);
    setActiveactiveMenuList("치킨");
  }
  function handleClick3() {
    // paginate(1);
    setActiveactiveMenuList("피자");
  }
  function handleClick4() {
    setActiveactiveMenuList("햄버거");
  }
  function handleClick5() {
    setActiveactiveMenuList("스테이크");
  }
  function handleClick6() {
    setActiveactiveMenuList("닭강정");
  }
  function handleClick7() {
    setActiveactiveMenuList("핫도그");
  }
  function handleClick8() {
    setActiveactiveMenuList("아이스크림");
  }
  return (
    <Nav1>
      <button onClick={handleClick} className="btn btn-outline-primary m-3">
        전체
      </button>
      <button onClick={handleClick2} className="btn btn-outline-primary m-3">
        치킨
      </button>
      <button onClick={handleClick3} className="btn btn-outline-primary m-3">
        피자
      </button>
      <button onClick={handleClick4} className="btn btn-outline-primary m-3">
        햄버거
      </button>
      <button onClick={handleClick5} className="btn btn-outline-primary m-3">
        스테이크
      </button>
      <button onClick={handleClick6} className="btn btn-outline-primary m-3">
        닭강정
      </button>
      <button onClick={handleClick7} className="btn btn-outline-primary m-3">
        핫도그
      </button>
      <button onClick={handleClick8} className="btn btn-outline-primary m-3">
        아이스크림
      </button>
    </Nav1>
  );
};

const Nav1 = styled.nav`
  margin-top: 70px;
  text-align: center;
`;

export default HomeCategories;
