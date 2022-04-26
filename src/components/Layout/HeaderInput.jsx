import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import _ from "lodash";
import { useSearchContext } from "../Context/SearchContext";
import { useNavigate } from "react-router-dom";
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 51%;
  width: 15%;
  //input창 중앙으로
`;

const HeaderInput = () => {
  const [word, setWord] = useState("");
  // const { setSearch } = useSearchContext();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const word = search.split(" ");
  //   console.log(word);
  // }, [search]);

  const inputDebounce = _.debounce((input) => {
    // const word = input.split(" ");
    // setSearch(word);
    setWord(input);
  }, 400);

  //onChange
  const handleInput = (e) => {
    let value = e?.target?.value;
    setWord(value);
    // inputDebounce(value);
    // if (e.target.value != "") {
    //   let input = e.target.value;
    //   inputDebounce(input);
    //   // setWord(input);
    // }
  };

  const onReset = () => {
    setWord("");
  };

  //handleMessage
  const handleSearch = () => {
    if (word != "") {
      // setSearch(word);
      navigate("/search-list");
      onReset();
    } else {
      return alert("검색어를 입력해주세요!");
    }
  };

  //handleKeyPress
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Section className="d-flex">
      <input
        className="form-control"
        name="search_input"
        type="text"
        placeholder="Search"
        onKeyUp={handleKeyPress}
        onChange={handleInput}
        value={word} //0.3초 마다 입력됨
      />

      <button
        // to="/search-list"
        type="button"
        className="btn btn-secondary my-2 my-sm-0"
        name="search_btn"
        onClick={handleSearch}
      >
        Search{" "}
      </button>
    </Section>
  );
};

const Inputform = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 51%;
  width: 15%;
  //input창 중앙으로
`;

export default HeaderInput;
