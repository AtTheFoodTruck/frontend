import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import OrderPage from "../OrderPage/OrderPage";
import { useNavigate } from "react-router-dom";

const HomeMenu = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/order-page", {
      state: {
        storeId: item.storeId,
      },
    });
  };

  return (
    <motion.section
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="py-2 "
    >
      <div className="col mb-5">
        <div className="card h-100">
          <ImgSize
            className="card-img-top img-fluid"
            // src="/img/pizza.jpg"
            src={item.storeImgUrl}
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{item.storeName}</h5>
              <div className="d-flex justify-content-center small  mb-2">
                <div className="bi-star-fill text-warning"></div>&ensp;
                {item.rateAvg}
              </div>
              {/* <div>store Id = {item.storeId}</div> */}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                className="btn btn-outline-dark mt-auto"
                cvariant="outline-secondary"
                onClick={handleClick}
              >
                주문하기
              </button>
              {/* <Link
                className="btn btn-outline-dark mt-auto"
                to={"/order-page/" + item.storeId}
              >
                주문하기
              </Link>
              <Button cvariant="outline-secondary" onClick={handleClick}>
                주문하기
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const ImgSize = styled.img`
  height: 15rem;
  object-fit: cover;
`;

export default HomeMenu;
