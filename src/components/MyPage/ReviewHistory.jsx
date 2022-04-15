import { Card, Container, Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Star from "./star";
import { FaStar } from "react-icons/fa";
const ReviewHistoryWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

const ReviewHistory = () => {
  const [test, setTest] = useState([]);

  const test2 = [
    {
      postId: 1,
      id: 1,
      name: "피자",
      price: 12000,
      email: "ada@gardner.biz",
      body: "lasi\nreiciendis et nam sapiente accusantium",
      rating: 3,
    },
    {
      postId: 2,
      id: 2,
      name: "햄버거",
      price: 8000,
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptateapiente accusantium",
      rating: 4,
    },
    {
      postId: 3,
      id: 3,
      name: "핫도그",
      price: 4000,
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptateapiente accusantium",
      rating: 5,
    },

    {
      postId: 3,
      id: 3,
      name: "핫도그",
      price: 4000,
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptateapiente accusantium",
      rating: 4,
    },
    {
      postId: 3,
      id: 3,
      name: "핫도그",
      price: 4000,
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptateapiente accusantium",
      rating: 3,
    },
  ];

  const testList = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments/").then((res) => {
      setTest(res.data);
    });
  };

  useEffect(() => {
    testList();
  }, []);

  //img
  //음식이름
  //가격
  //별점 rating
  //삭제
  //리뷰 내용

  //배열내에 고유한 값을 가지고 있는 변수 예> id , 가 있다면 굳이 idx를 쓰기보다는
  //그 값을 쓰는게 좋다 이유는 삭제 수정을 하면서 약간씩 오류가 발생할 수 있기 때문
  return (
    <ReviewHistoryWrapper>
      <Container className="ReviewPage text-center mt-5">
        <h1>리뷰관리</h1>
        {/* 이미지 */}
        {test2.map((it) => (
          <Row
            className="mt-5 mb-5 d-flex align-items-center justify-content-center"
            key={it.id}
          >
            <Col className="d-flex justify-content-center">
              <Card style={{ width: "8rem", height: "8rem" }}>
                <Card.Img
                  variant="top"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/999285_1575800181007324.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"
                />
              </Card>
            </Col>

            {/* 항목 */}
            <Col lg={9}>
              <Row>
                <Col className="MenuName">
                  <h5>{it.name}</h5>
                </Col>
                <Col className="Price">
                  <h5>{it.price}</h5>
                </Col>
                <Col className="Rating text-warning">
                  <Star rating={it.rating} />
                </Col>
                <Col className="Date">
                  <h5>2222.22.22</h5>
                </Col>
                <Col className="deleteBtn">
                  <Button variant="outline-secondary">삭제</Button>
                </Col>
              </Row>

              {/* 리뷰텍스트 */}
              <Row className="mt-3">
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Row>
            </Col>
            <hr className="mt-5" />
          </Row>
        ))}
        ;{/*페이징 처리*/}
        <div className="d-flex justify-content-center">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#">
                &laquo;
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                4
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                5
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                &raquo;
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </ReviewHistoryWrapper>
  );
};

export default ReviewHistory;
