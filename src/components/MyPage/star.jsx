import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

function Rating({ rating }) {
  const rendering = () => {
    const result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(<FaStar size="20" className="yellowStar" key={i} />);
    }
    return result;
  };
  return <Stars>{rendering()}</Stars>;
}

export default Rating;

const Stars = styled.div`
  display: flex;

  .yellowStar {
    color: #fcc419;
  }
`;