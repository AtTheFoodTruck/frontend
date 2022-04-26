import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const ARRAY = [0, 1, 2, 3, 4];

function Rating({ getRating }) {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    getRating(score);
    // async function postData() {
    //   try {
    //     //응답 성공
    //     // const response = await axios.post("url주소", {
    //     //   //보내는 데이터
    //     //   rating: { score },
    //     // });

    //     // console.log(response);
    //   } catch (error) {
    //     //응답 실패
    //     console.error(error);
    //   }
    //}
  };

  return (
    <Stars>
      {ARRAY.map((el, idx) => {
        return (
          <FaStar
            key={idx}
            size="30"
            onClick={() => handleStarClick(el)}
            className={clicked[el] && "yellowStar"}
          />
        );
      })}
    </Stars>
  );
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

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;
