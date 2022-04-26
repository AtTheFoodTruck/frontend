import React, { useEffect, useState } from "react";
import HomeCategories from "./HomeCategories";
import HomeMenu from "./HomeMenu";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import axios from "axios";
import dummy from "./HomeDummy.json";

const Home = () => {
  const authorization = localStorage.getItem("Authorization");
  const userId = localStorage.getItem("userId");
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeMenuList, setActiveactiveMenuList] = useState();

  // pagination
  const [postsPerPage, setPostsPerPage] = useState(16); //페이지당 게시물
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };
  // console.log(headers);

  // axios
  // https://apifood.blacksloop.com/ dvelop푸시할때 변경하기
  async function fetchPopular() {
    const foodtruck = await axios.get(
      `https://apifood.blacksloop.com/item-service/items/v1/main?page=0&size=20`,
      { headers }
      // {
      //   headers: {
      //     Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0dXNlckBuYXZlci5jb20iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjUwOTYwMzM0fQ.2A8AYlGJcmwpJatYDbnP7cNBMTDxBZTZOwC9aGnDYSO7zs3CLFbrG5iT9j8hYiU3K6V2fcbhILLEKw-FaxX1AQ`,
      //   },
      //   // `http://localhost:8000/item-service/items/v1/stores?page=0&size=10`, //임시
      // }
    );

    setPopular(foodtruck.data.data.storeList);
    setFiltered(foodtruck.data.data.storeList);
    console.log(foodtruck.data.data.storeList);
    // console.log(filtered);
  }

  // //dummy
  // const dummydata = dummy;
  // const fetchPopular = () => {
  //   setPopular(dummydata.dummy);
  //   setFiltered(dummydata.dummy);
  // };

  // // pagination
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);

  const currentPosts = filtered.slice(0, postsPerPage);
  const loadMore = () => {
    setPostsPerPage(postsPerPage + 4);
  };
  //slice 배열의 일부분 잘라서 새로운 배열로 리턴함 시작:indexOfFirstPost , 끝 indexOfLastPost

  useEffect(() => {
    fetchPopular();
  }, []);

  // if (popular.length > 0) {
  //   console.log(popular);
  // }

  return (
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
            <button class="btn btn-primary" type="button" id="button-addon2">
              Button
            </button>
          </div>
        </div>
        <HomeCategories
          popular={popular}
          setFiltered={setFiltered}
          activeMenuList={activeMenuList}
          setActiveactiveMenuList={setActiveactiveMenuList}
        />
      </Header1>
      {/* <HomeMenu /> */}
      <motion.div layout className="container px-4 px-lg-5 mt-5 ">
        <motion.div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <AnimatePresence>
            {currentPosts.map((item) => {
              return <HomeMenu key={item.storeId} item={item} />;
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <button
        onClick={() => loadMore()}
        className="btn btn-dark d-block w-100 mb-5"
      >
        Load More
      </button>
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
