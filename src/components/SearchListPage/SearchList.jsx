import { render } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";
import { useSearchContext } from "../../Context/SearchContext";
import SearchResult from "./SearchResult";
import SearchPagination from "./SearchPagination";
const SearchWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

const SearchList = () => {
  const authorization = localStorage.getItem("Authorization");
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  // 검색어 가져오기,리스트 데이터
  const { search } = useSearchContext();
  const [data, setData] = useState([]);
  const latitude = localStorage.getItem("latitude");
  const longitude = localStorage.getItem("longitude");

  //페이징
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const size = 1;

  console.log("검색어 : " + search);
  //리스트 갯수 확인
  useEffect(async () => {
    await axios
      .post(
        `https://apifood.blacksloop.com/item-service/items/v1/search/stores?page=0&size=${size}`,
        {
          latitude: "1600.93", //localStorage.getItem("latitude");
          longitude: "150.156", //localStorage.getItem("longitude")
          name: search,
        },
        { headers }
      )
      .then((res) => {
        console.log(res.data);
        setTotalPage(res.data.data.page.endPage);
      })
      .catch((err) => console.log(err.response));
  }, []);

  //가게 리스트 받아오기
  useEffect(async () => {
    await axios
      .post(
        `https://apifood.blacksloop.com/item-service/items/v1/search/stores?page=${currentPage}&size=${size}`,
        {
          latitude: "1600.93", //localStorage.getItem("latitude");
          longitude: "150.156", //localStorage.getItem("longitude")
          name: search,
        },
        { headers }
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.data.stores);
      })
      .catch((err) => console.log(err.response));
  }, [search]);
  //

  const renderList = data.map((g) => {
    return (
      <div className="card_container">
        <SearchResult store={g} />
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
        {/*페이징 처리*/}
        <SearchPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
          storeList={data}
          size={size}
        />
      </Container>
    </SearchWrapper>
  );
};

export default SearchList;
