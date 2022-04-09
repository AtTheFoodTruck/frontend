import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav1 = styled.nav`
  margin-top: 70px;
  text-align: center;
`;
const HomeCategories = () => {
  return (
    <Nav1>
      <Link type="button" class="btn btn-outline-primary m-3" to="/">
        전체
      </Link>
      <Link type="button" class="btn btn-outline-primary m-3" to="/">
        스테이크
      </Link>
      <Link type="button" class="btn btn-outline-primary m-3" to="/">
        닭강정
      </Link>
      <Link type="button" class="btn btn-outline-primary m-3" to="/">
        치킨
      </Link>
      <Link type="button" class="btn btn-outline-primary m-3" to="/">
        피자
      </Link>
      <Link type="button" class="btn btn-outline-primary m-3" to="/">
        닭꼬치
      </Link>
      <Link type="button" class="btn btn-outline-primary m-3" to="/">
        떡볶이
      </Link>
      <Link type="button" class="btn btn-outline-primary m-3" to="/">
        츄러스
      </Link>
    </Nav1>
  );
};

export default HomeCategories;
