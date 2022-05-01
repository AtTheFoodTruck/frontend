import React, { useEffect, useState } from 'react';
import HomeCategories from './HomeCategories';
import HomeMenu from './HomeMenu';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';
import HomePagination from './HomePagination';

const Home = () => {
  const authorization = localStorage.getItem('Authorization');
  const userId = localStorage.getItem('userId');

  //리스트
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeMenuList, setActiveactiveMenuList] = useState();

  //페이지당 게시물
  const size = 16;
  //페이지 [현재 페이지,총 페이지 수]
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  async function fetchPopular() {
    const foodtruck = await axios
      .get(
        // `https://apifood.blacksloop.com/item-service/items/v1/main?page=0&size=${size}`,
        `https://apifood.blacksloop.com/item-service/items/v1/main?page=0&size=${size}`,
        { headers }
      )
      .then((res) => {
        console.log('최초 렌더링 api 호출');
        setTotalPage(res.data.data.page.totalPage);
        setPopular(res.data.data.storeList);
        setFiltered(res.data.data.storeList);
        console.log('메인페이지 Respone ' + res.data.data.storeList[0]);
      })
      .catch((err) => console.log(err));
  }

  // 최초 페이지 렌더링
  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          // `https://apifood.blacksloop.com/item-service/items/v1/main?page=${currentPage}&size=${size}`,
          `https://apifood.blacksloop.com/item-service/items/v1/main?page=${currentPage}&size=${size}`,
          { headers }
        )
        .then((res) => {
          console.log('페이지 api 호출');
          setPopular(res.data.data.storeList);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, [currentPage]);

  return (
    <div className="container">
      <Header1 class="masthead d-flex ">
        <div class="container  px-4 px-lg-5 text-center">
          <div class="mb-3">
            <Input1
              type="text"
              class="form-control"
              placeholder="주소를 검색하세요!"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="btn btn-primary" type="button" id="button-addon2">
              Button
            </button>
          </div>
        </div>
        <HomeCategories
          popular={popular}
          setFiltered={setPopular}
          activeMenuList={activeMenuList}
          setActiveactiveMenuList={setActiveactiveMenuList}
        />
      </Header1>
      {/* <HomeMenu /> */}
      <motion.div layout className="container px-4 px-lg-5 mt-5 ">
        <motion.div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <AnimatePresence>
            {popular && popular.map((item) => {
              return <HomeMenu key={item.storeId} item={item} />;
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* 페이징 처리 */}
      <HomePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
        popular={popular}
        size={size}
      />
    </div>
  );
};
const Input1 = styled.input`
  margin-top: 11%;
  width: 35%;
  height: 40px;
`;

const Header1 = styled.header`
  align-items: center;
  /* background: black; */
`;

export default Home;
