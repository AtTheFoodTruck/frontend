import React, { useEffect } from "react";
import styled from "styled-components";

const HomeCategories = ({
  setActiveGenre,
  activeGenre,
  setFiltered,
  popular,
  paginate,
}) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  });

  //리팩터링 필요함
  function handleClick() {
    paginate(1);
    setActiveGenre(0);
  }
  function handleClick2() {
    paginate(1);
    setActiveGenre(28);
  }
  function handleClick3() {
    paginate(1);
    setActiveGenre(35);
  }
  function handleClick4() {
    paginate(1);
    setActiveGenre(0);
  }
  function handleClick5() {
    paginate(1);
    setActiveGenre(28);
  }
  function handleClick6() {
    paginate(1);
    setActiveGenre(35);
  }
  function handleClick7() {
    paginate(1);
    setActiveGenre(28);
  }
  function handleClick8() {
    paginate(1);
    setActiveGenre(35);
  }
  return (
    <Nav1>
      <button onClick={handleClick} className="btn btn-outline-primary m-3">
        전체
      </button>
      <button onClick={handleClick2} className="btn btn-outline-primary m-3">
        스테이크
      </button>
      <button onClick={handleClick3} className="btn btn-outline-primary m-3">
        닭강정
      </button>
      <button onClick={handleClick4} className="btn btn-outline-primary m-3">
        치킨
      </button>
      <button onClick={handleClick5} className="btn btn-outline-primary m-3">
        피자
      </button>
      <button onClick={handleClick6} className="btn btn-outline-primary m-3">
        닭꼬치
      </button>
      <button onClick={handleClick7} className="btn btn-outline-primary m-3">
        떡볶이
      </button>
      <button onClick={handleClick8} className="btn btn-outline-primary m-3">
        츄러스
      </button>
    </Nav1>
  );
};

const Nav1 = styled.nav`
  margin-top: 70px;
  text-align: center;
`;

export default HomeCategories;
