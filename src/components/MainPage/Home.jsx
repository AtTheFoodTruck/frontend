import React from "react";
<<<<<<< HEAD
import styled from "styled-components";
import HomeCategories from "./HomeCategories";
import HomeMenu from "./HomeMenu";
import HomePagination from "./HomePagination";

const Input1 = styled.input`
  margin-top: 11%;
  width: 35%;
  height: 40px;
`;
const Header1 = styled.header`
  align-items: center;
  /* background: black; */
`;

const Home = () => {
  return (
    <div className="container">
      <Header1 class="masthead d-flex ">
        <div class="container  px-4 px-lg-5 text-center">
          <div class="mb-3">
            <Input1
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="btn btn-primary" type="button" id="button-addon2">
              Button
            </button>
          </div>
        </div>
        <HomeCategories />
      </Header1>
      <HomeMenu />
      <HomePagination />
    </div>
=======
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link to="/search-list">
      <h1>검색리스트</h1>
    </Link>
>>>>>>> fce46288b9944c60bfe4e7d3fafd2c9c537e6f46
  );
};

export default Home;
