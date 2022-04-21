import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import _ from "lodash";
import { useSearchContext } from "../../Context/SearchContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
const Section = styled.section`
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
  // const [word, setWord] = useLocalStorage("word", "");
  const { setSearch } = useSearchContext();
  const navigate = useNavigate();
  // useEffect(() => {
  //   const word = search.split(" ");
  //   console.log(word);
  // }, [search]);

  const inputDebounce = _.debounce((input) => {
    // const word = input.split(" ");
    // setSearch(word);
    setWord(input);
  }, 500);

  //onChange
  const handleInput = (e) => {
    if (e.target.value != "") {
      let input = e.target.value;
      // inputDebounce(input);
      setWord(input);
    }
  };
  const onReset = () => {
    setWord("");
  };
  //handleMessage
  const handleSearch = () => {
    if (word != "") {
      setSearch(word);
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
  console.log(word);
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

export default HeaderInput;
