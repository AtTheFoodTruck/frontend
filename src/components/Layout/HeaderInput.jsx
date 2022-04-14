import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import _ from "lodash";
import axios, { Axios } from "axios";
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 51%;
  width: 15%;
  //input창 중앙으로
`;

const HeaderInput = () => {
  // axios
  //   .post("api_url", {
  //     //파라미터
  //     username: "",
  //     password: "",
  //   })
  //   .then(function (response) {
  //     //response
  //   })
  //   .catch(function (error) {
  //     //오류 발생 시 실행할 로직
  //   })
  //   .then(function () {
  //     //항상 실행
  //   });

  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   const word = search.split(" ");
  //   console.log(word);
  // }, [search]);

  const inputDebounce = _.debounce((input) => {
    const word = input.split(" ");
    setSearch(word);
  }, 400);

  const handleInput = (e) => {
    let input = e.target.value;
    inputDebounce(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        onChange={handleInput}
        // value={search} //0.3초 마다 입력됨
      />

      <button
        type="submit"
        className="btn btn-secondary my-2 my-sm-0"
        onClick={() => console.log(search)}
      >
        <Link to="/search-list">Search</Link>
      </button>
    </Form>
  );
};

export default HeaderInput;
