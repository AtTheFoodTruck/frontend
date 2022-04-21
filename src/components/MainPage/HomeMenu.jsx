import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const ImgSize = styled.img`
  height: 15rem;
  object-fit: cover;
`;

const HomeMenu = ({ movie }) => {
  return (
    <motion.section
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="py-2 "
    >
      <div className="col mb-5 ">
        <div className="card h-100 ">
          <ImgSize
            className="card-img-top img-fluid"
            src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{movie.title}</h5>
              <div className="d-flex justify-content-center small  mb-2">
                <div className="bi-star-fill text-warning"></div>&ensp;
                {movie.vote_average}
              </div>
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <Link className="btn btn-outline-dark mt-auto" to="/order-page">
                주문하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeMenu;
