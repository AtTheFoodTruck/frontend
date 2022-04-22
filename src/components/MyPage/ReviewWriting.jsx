import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Rating from "./star/Rating";
import { Route, Routes, useNavigate } from "react-router-dom";
import _ from "lodash";
import axios from "axios";

const ReviewWritinghWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 55%;
  top: 20%;
  left: 30%;
  border: 1px white solid;
  header {
    border: 1px white solid;
  }
  button {
    font-weight: bold;
    font-size: 0.95rem;
  }
`;
const Card = styled.div`
  img {
    width: 230px;
    height: 200px;
    margin-bottom: 15px;
  }
`;

//TODO
//주문내역 props ( orderId,Store_name,menu) 받아서 출력
//img파일 formData 넘어가는지 확인

const ReviewWriting = ({ store_name, menu }) => {
  const navigate = useNavigate();
  const contnetInput = useRef();

  const [state, setState] = useState({
    user_id: null,

    content: "",
    img_url: "",
    img_file: "img/default_image.png",
    rating: 0,
  });
  //image 상태
  const [loaded, setLoaded] = useState(false);

  const authorization = localStorage.getItem("Authorization");
  const userId = localStorage.getItem("userId");
  const url = `http://localhost:8000/order-service/orders/v1/customer/reviews`;

  //${accessToken}
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  const onCreate = (content, img_file, rating) => {
    console.log("Headers => authorization : ", authorization);
    console.log("Params => userId : ", userId);
    // console.log("Params => orderId : ", orderId);
    axios
      .post(
        url,
        {
          user_id: userId,
          order_id: 1,
          rating: rating,
          //이미지 파일 오류
          // review_img_url: img_file,
          review_img_url: "img파일",
          content: content,
        },
        { headers }
      )
      .then((response) => {
        console.log(response);
        alert("저장 성공");
        navigate(-1);
      })
      .catch((err) => console.log(err.response));
  };

  //input debounce
  const inputDebounce = _.debounce((text) => {
    setState({
      ...state,
      content: text,
    });
  }, 500);

  const handleContentInput = (e) => {
    const text = e.target.value;
    inputDebounce(text);
  };

  //img input
  const handleImgInput = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      setLoaded("loading");
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setState({
        ...state,
        [e.target.name]: e.target.files[0],
        img_file: fileReader.result,
      });
      setLoaded(true);
    };
  };

  const getRating = (score) => {
    setState({
      ...state,
      rating: score,
    });
  };

  const handleSubmit = () => {
    if (state.content.length < 1) {
      contnetInput.current.focus();
      return;
    }

    onCreate(state.content, state.img_file, state.rating);
    // console.log(state);
  };

  return (
    <ReviewWritinghWrapper>
      <Container className="text-center">
        <header>
          <h1>리뷰 작성하기</h1>
          {/* TODO  */}
          {/* 퍼블리싱 */}
        </header>

        <Row className="mt-5">
          <Col>
            <h3>매장명</h3>
          </Col>
          <Col>
            <h3>메뉴명</h3>
          </Col>
        </Row>
        <hr />
        <Row className="mb-5">
          <Col>{store_name}</Col>
          <Col>{menu}</Col>
        </Row>

        {/* 리뷰 입력 줄 */}
        <Row className="mt-5">
          <Col className="d-flex align-items-center">
            <Form.Group controlId="formFile" className="mb-3 ">
              <Card class="card">
                {loaded === false || loaded === true ? (
                  <img src={state.img_file}></img>
                ) : (
                  <span>이미지 불러오는 중</span>
                )}
              </Card>
              <Form.Control
                type="file"
                accept="image/*"
                name="img_url"
                onChange={handleImgInput}
              />
            </Form.Group>
          </Col>
          <Col lg={8}>
            <div class="form-group">
              <textarea
                name="content"
                class="form-control"
                id="exampleTextarea"
                rows="10"
                placeholder="음식은 어떠셨나요? 후기를 남겨주세요."
                ref={contnetInput}
                // value={state.content}
                onChange={handleContentInput}
              ></textarea>
            </div>
          </Col>
        </Row>
        <Row
          className="d-flex flex-column justify-content-center mt-5"
          id="rating"
        >
          <div>
            <p>별점을 매겨주세요</p>
          </div>
          <Rating className="rating" getRating={getRating} />
        </Row>

        {/* 리뷰등록버튼 */}
        <Row className="d-inline-flex mt-5">
          <button
            size="mg"
            class="btn btn-outline-secondary"
            variant="outline-secondary"
            onClick={handleSubmit}
          >
            리뷰등록
          </button>{" "}
          <button
            id="cancle_btn"
            type="button"
            class="btn btn-outline-danger"
            onClick={() => navigate(-1)}
          >
            취소
          </button>
        </Row>
      </Container>
    </ReviewWritinghWrapper>
  );
};

export default ReviewWriting;
