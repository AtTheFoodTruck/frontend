import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import _ from "lodash";
import axios, { Axios } from "axios";
import { useSearchContext } from "../Context/SearchContext";
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 51%;
  width: 15%;
  //input창 중앙으로
`;
const headers = {
  Authorization: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0SkhAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY1MTAzOTc2M30.l93_vKFRvZRZhBe_9QOh4_EcwR4xekssEezfnLhrUe1HIcM01goDmQ6_uKK21_O1SPuBJompsouF5fGK7Py2Pw`,
};
const HeaderInput = () => {
  const [word, setWord] = useState("");
  const { setSearch } = useSearchContext();
  const searchRef = useRef("");
  // useEffect(() => {
  //   const word = search.split(" ");
  //   console.log(word);
  // }, [search]);

  const inputDebounce = _.debounce((input) => {
    // const word = input.split(" ");
    // setSearch(word);
    setWord(input);
  }, 400);

  const handleInput = (e) => {
    let input = e.target.value;
    inputDebounce(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(word);
  };
  console.log(word);
  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control"
        name="search_input"
        type="text"
        placeholder="Search"
        onChange={handleInput}
        // value={search} //0.3초 마다 입력됨
      />

      <button
        type="submit"
        className="btn btn-secondary my-2 my-sm-0"
        name="search_btn"
        onClick={handleInput}
      >
        <Link to="/search-list" onClick={handleInput}>
          Search{" "}
        </Link>
      </button>
    </Form>
  );
};

export default HeaderInput;
