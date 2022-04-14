import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeCategories from "./HomeCategories";
import HomeMenu from "./HomeMenu";
import HomePagination from "./HomePagination";
import { AnimatePresence, motion } from "framer-motion";

const Input1 = styled.input`
  margin-top: 11%;
  width: 35%;
  height: 40px;
`;
const Header1 = styled.header`
  align-items: center;
  /* background: black; */
`;

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e2604cc00e2d6cf3166131fbe7c76bd7&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };
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
        />
      </Header1>
      {/* <HomeMenu /> */}
      <motion.div layout className="container px-4 px-lg-5 mt-5 ">
        <motion.div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <AnimatePresence>
            {filtered.map((movie) => {
              return <HomeMenu key={movie.id} movie={movie} />;
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <HomePagination />
    </div>
  );
};

export default Home;
