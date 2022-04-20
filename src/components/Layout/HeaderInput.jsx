import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import _ from "lodash";
import axios, { Axios } from "axios";
import { useCustomContext } from "../Context/Context";
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
  const storeList = [
    {
      id: 1,
      store_name: "aa분식",
      category: "분식",
      item: "떡볶이",
      store_img: "https://dummyimage.com/600x400/000/0011ff.jpg&text=test",
      rating: 3,
    },
    {
      id: 2,
      store_name: "bb분식",
      category: "양식",
      item: "튀김",
      store_img: "https://dummyimage.com/600x400/000/2734f2.jpg&text=test",
      rating: 4,
    },
    {
      id: 3,
      store_name: "cc분식",
      category: "한식",
      item: "순대",
      store_img: "https://dummyimage.com/600x400/000/6a86eb.jpg&text=test",
      rating: 5,
    },
    {
      id: 4,
      store_name: "dd분식",
      category: "경양식",
      item: "김밥",
      store_img: "https://dummyimage.com/600x400/000/befa99.jpg&text=test",
      rating: 4,
    },
    {
      id: 5,
      store_name: "ee분식",
      category: "샐러드",
      item: "어묵",
      store_img: "https://dummyimage.com/600x400/000/fffaa1.jpg&text=test",
      rating: 3,
    },
  ];
  const [word, setWord] = useState("");
  const { setSearch } = useCustomContext();
  const { setList } = useCustomContext();
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
    // axios
    //   .get(
    //     "http://localhost:8000/item-service/items/v1/search/stores?page=0&size=10 ",
    //     { name: word, lattitude: "1782.93", longitutde: "168.156" }
    //   )
    //   .then((res) => {
    //     setList(res);
    //     setSearch(word);
    //   })
    //   .catch((err) => console.log(err.response));
    setSearch(word);
    setList(storeList);
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
        onClick={handleInput}
      >
        <Link to="/search-list">Search</Link>
      </button>
    </Form>
  );
};

export default HeaderInput;
