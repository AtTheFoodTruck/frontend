import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav1 = styled.nav`
  margin-top: 70px;
  text-align: center;
`;
const HomeCategories = ({
  setActiveGenre,
  activeGenre,
  setFiltered,
  popular,
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
  }, [activeGenre]);

  return (
    <Nav1>
      <button
        onClick={() => setActiveGenre(0)}
        className="btn btn-outline-primary m-3"
      >
        전체
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className="btn btn-outline-primary m-3"
      >
        스테이크
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className="btn btn-outline-primary m-3"
      >
        닭강정
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className="btn btn-outline-primary m-3"
      >
        치킨
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className="btn btn-outline-primary m-3"
      >
        피자
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className="btn btn-outline-primary m-3"
      >
        닭꼬치
      </button>
      <button
        onClick={() => setActiveGenre(0)}
        className="btn btn-outline-primary m-3"
      >
        떡볶이
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className="btn btn-outline-primary m-3"
      >
        츄러스
      </button>
    </Nav1>
  );
};

export default HomeCategories;
