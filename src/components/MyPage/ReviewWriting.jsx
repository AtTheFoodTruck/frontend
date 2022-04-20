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
  width: 40%;
  top: 20%;
  left: 30%;
`;
const Card = styled.div`
  img {
    width: 250px;
    height: 200px;
    margin-bottom: 15px;
  }
`;

const ReviewWriting = () => {
  const navigate = useNavigate();
  const contnetInput = useRef();

  //order_id,user_id 포함해야함!
  const [state, setState] = useState({
    // user_id: 1,
    // order_id: 1,
    content: "",
    img_url: "",
    img_file: "img/default_image.png",
    rating: 0,
  });
  //image 상태
  const [loaded, setLoaded] = useState(false);

  console.log(state);

  //${accessToken}
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0SkhAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY1MTAyMzgxMH0.l6ciZhzih-0m8DBwypBojnNXAKQDhSunyTbOztnjl0OA2vy_F_l7W6HEfeRZ2lq_7pgYzuMrr2DKNweqL_2-1g`,
  };

  const onCreate = (content, img_file, rating) => {
    axios
      .post(
        "http://localhost:8000/order-service/orders/v1/customer/reviews",

        //data (user/order_id 변수로 )
        {
          //변수처리
          // user_id: 1,
          // order_id: 1,
          rating: rating,
          //이미지 파일 오류
          // review_img_url: img_file,
          review_img_url: "img파일",
          content: content,
          user_id: 1,
          order_id: 1,
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
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => navigate(-1)}
          >
            X
          </button>
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
          <Col>동대문엽기떡볶이</Col>
          <Col>엽기떡볶이</Col>
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
        <Row className="mt-5">
          <p>별점을 매겨주세요</p>
          <p className="text-warning">
            {/* <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar /> */}
            <Rating getRating={getRating} />
          </p>
        </Row>

        {/* 리뷰등록버튼 */}
        <Row className="d-inline-flex mt-5">
          <Button size="lg" variant="outline-secondary" onClick={handleSubmit}>
            리뷰등록
          </Button>{" "}
        </Row>
      </Container>
    </ReviewWritinghWrapper>
  );
};

export default ReviewWriting;
