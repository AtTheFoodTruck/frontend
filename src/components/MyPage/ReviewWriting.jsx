import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Rating from "./star/Rating";
import { Route, Routes, useNavigate } from "react-router-dom";
const ReviewWritinghWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

const ReviewWriting = () => {
  const navigate = useNavigate();
  const contnetInput = useRef();
  const imgurlInput = useRef();
  // const date = new Date().getTime();

  //dataId = useRef(0)
  const onCreate = (content, img_url, rating, created_date) => {
    const newData = {
      content,
      img_url,
      rating,
      created_date,
      // id : dataId.current
    };
    // dataId.current += 1;
    console.log(newData);
  };

  const [state, setState] = useState({
    content: "",
    img_url: "",
    rating: 0,
    created_date: new Date().getTime(),
    // created_date: new Date(date).toLocaleString(),
  });

  const handleContentInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleImgInput = (e) => {
    const url = e.target.files[0].name;
    console.log(url);
    setState({
      ...state,
      [e.target.name]: url,
    });
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

    if (!state.img_url) {
      imgurlInput.current.focus();
      return;
    }

    onCreate(state.content, state.img_url, state.rating, state.created_date);
    // console.log(state);
    alert("저장 성공");
    navigate(-1);
  };

  return (
    <ReviewWritinghWrapper>
      <Container className="text-center">
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
              <Form.Label>사진을 올려주세요</Form.Label>
              <Form.Control
                type="file"
                ref={imgurlInput}
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
                value={state.content}
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
