import React, { useEffect, useState } from "react";
import HomeCategories from "./HomeCategories";
import HomeMenu from "./HomeMenu";
import HomePagination from "./HomePagination";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import axios from "axios";

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  // pagination
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지
  const [postsPerPage] = useState(8); //페이지당 게시물

  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0b3duZXJAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfTUFOQUdFUiIsImV4cCI6MTY1MDgwNTYxOX0.1fVLo4bsRExaC0NzP7PjyYH3tq-eYFsm-vL0ba33BhTHiLUBPyqgkLdHoRsE4heojjSfa-dtv3Z8OkEDQAzhdg`,
  };

  // axios
  // https://apifood.blacksloop.com/
  const fetchPopular = async () => {
    axios
      .get(
        `http://localhost:8000/item-service/items/v1/customer/stores`,
        { headers },
        { store_id: 1 }
      )
      .then(function (response) {
        console.log(response);
      });
  };

  // async function fetchPopular() {
  //   try {
  //     const foodtruck = await axios.get(
  //       `http://localhost:8000/item-service/items/v1/customer/stores?page=0&size=10`,
  //       {
  //         headers: headers,
  //       }
  //     );

  //     console.log(foodtruck);
  //     // console.log(movies.data);
  //     // console.log(movies.data.results);
  //     // setPopular(movies.data.results);
  //     // setFiltered(movies.data.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // // fetch;
  // const fetchPopular = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=e2604cc00e2d6cf3166131fbe7c76bd7&language=en-US&page=1"
  //   );
  //   console.log(data);
  //   const movies = await data.json();
  //   setPopular(movies.results);
  //   setFiltered(movies.results);
  // };

  // pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchPopular();
  }, []);

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
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
          paginate={paginate}
        />
      </Header1>
      {/* <HomeMenu /> */}
      <motion.div layout className="container px-4 px-lg-5 mt-5 ">
        <motion.div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <AnimatePresence>
            {currentPosts.map((movie) => {
              return <HomeMenu key={movie.id} movie={movie} />;
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <HomePagination
        postsPerPage={postsPerPage}
        totalPosts={popular.length}
        paginate={paginate}
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
