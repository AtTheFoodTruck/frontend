import { render } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";
import { useSearchContext } from "../../Context/SearchContext";
import SearchResult from "./SearchResult";
const SearchWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

const SearchList = () => {
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
  // 검색어,리스트 데이터
  const [data, setData] = useState([]);
  const { search } = useSearchContext();
  //
  console.log("SearchList_search" + search);
  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/item-service/items/v1/search/stores?page=0&size=10 ",
        { name: data, lattitude: "1782.93", longitutde: "168.156" }
      )
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err.response));
  });
  //
  const renderList = storeList.map((g) => {
    return (
      <div className="card_container">
        <SearchResult card={g} />
      </div>
    );
  });

  return (
    <SearchWrapper>
      <Container className="text-center mt-5">
        <article className="card_list">
          {renderList.length > 0 && search != "" ? (
            renderList
          ) : (
            <h3 className="mb-5">검색 결과가 없습니다</h3>
          )}
        </article>
      </Container>
    </SearchWrapper>
  );
};

export default SearchList;
