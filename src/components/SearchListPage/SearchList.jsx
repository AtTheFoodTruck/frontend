import { render } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import { useCustomContext } from "../Context/Context";
import SearchResult from "./SearchResult";
const SearchWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

const SearchList = () => {
  // 데이터 - store list
  const { search } = useCustomContext();
  const { list } = useCustomContext();

  //

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:8000/item-service/items/v1/search/stores?page=0&size=10`,
  //       { data }
  //     )
  //     .then((res) => setlist(res));
  // }, [search]);

  //
  const renderList = list.map((g, i) => {
    return (
      <div className="card_container">
        <SearchResult card={g} key={i} />
      </div>
    );
  });
  console.log(search);
  return (
    <SearchWrapper>
      <Container className="text-center mt-5">
        <article className="card_list">
          {renderList.length > 0 ? (
            renderList
          ) : (
            <h3 className="mb-5">{search} 에 대한 결과가 없습니다</h3>
          )}
        </article>
      </Container>
    </SearchWrapper>
  );
};

export default SearchList;
