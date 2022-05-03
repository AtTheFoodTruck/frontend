import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SearchResult from './SearchResult';
import SearchPagination from './SearchPagination';
import { AnimatePresence, motion } from 'framer-motion';

const Input1 = styled.input`
  margin-top: 11%;
  width: 35%;
  height: 40px;
  visibility: hidden;
`;

const Header1 = styled.header`
  align-items: center;
  /* background: black; */
`;

const SearchList = () => {
  const authorization = localStorage.getItem('Authorization');
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  // 검색어 가져오기,리스트 데이터
  const location = useLocation();
  const searchWord = location.state.searchWord;
  const [data, setData] = useState([]);

  //위도 경도
  const latitude = localStorage.getItem('latitude');
  const longitude = localStorage.getItem('longitude');

  //페이징
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const size = 8;

  // console.log("검색어 : " + searchWord);
  //리스트 갯수 확인
  useEffect(async () => {
    await axios
      .post(
        // `https://apifood.blacksloop.com/item-service/items/v1/search/stores?page=0&size=${size}`,
        `https://apifood.blacksloop.com/item-service/items/v1/search/stores?page=0&size=${size}`,
        {
          latitude: '1600.93', //localStorage.getItem("latitude");
          longitude: '150.156', //localStorage.getItem("longitude")
          name: searchWord,
        },
        { headers }
      )
      .then((res) => {
        console.log(res.data);
        setTotalPage(res.data.data.page.totalPage);
      })
      .catch((err) => console.log(err.response));
  }, []);

  //가게 리스트 받아오기
  useEffect(async () => {
    await axios
      .post(
        // `https://apifood.blacksloop.com/item-service/items/v1/search/stores?page=${currentPage}&size=${size}`,
        `https://apifood.blacksloop.com/item-service/items/v1/search/stores?page=${currentPage}&size=${size}`,
        {
          latitude: '1600.93', //localStorage.getItem("latitude");
          longitude: '150.156', //localStorage.getItem("longitude")
          name: searchWord,
        },
        { headers }
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.data.stores);
      })
      .catch((err) => console.log(err.response));
  }, [searchWord]);
  //

  const renderList = data.map((store) => {
    return (
      <div className="card_container">
        <SearchResult store={store} />
      </div>
    );
  });

  return (
    // <SearchWrapper>
    //   <Container className="text-center mt-5">
    //     <article className="card_list">
    //       {renderList.length > 0 && searchWord != "" ? (
    //         renderList
    //       ) : (
    //         <h3 className="mb-5">검색 결과가 없습니다</h3>
    //       )}
    //     </article>
    //     {/*페이징 처리*/}
    //     {/* <SearchPagination
    //       currentPage={currentPage}
    //       setCurrentPage={setCurrentPage}
    //       totalPage={totalPage}
    //       storeList={data}
    //       size={size}
    //     /> */}
    //   </Container>
    // </SearchWrapper>
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
          </div>
        </div>
      </Header1>
      <motion.div layout className="container px-4 px-lg-5 mt-5  text-center">
        <motion.div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <AnimatePresence>
            {renderList.length > 0 && searchWord != '' ? (
              renderList
            ) : (
              <p className="mb-5 fs-5">검색 결과가 없습니다!</p>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      {/*페이징 처리*/}
      <SearchPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
        storeList={data}
        size={size}
      />
    </div>
  );
};

export default SearchList;
