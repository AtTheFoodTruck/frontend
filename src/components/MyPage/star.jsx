import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

function Rating({ rating }) {
  console.log(rating);
  const rendering = () => {
    for (let i = 1; i <= rating; i++) {
      return <FaStar size="15" className="yellowStar" key={i} />;
    }
  };
  return <Stars>{rendering()}</Stars>;
}

export default Rating;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  .yellowStar {
    color: #fcc419;
  }
`;
