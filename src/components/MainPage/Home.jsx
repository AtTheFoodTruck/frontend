import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link to="/search-list">
      <h1>검색리스트</h1>
    </Link>
  );
};

export default Home;
