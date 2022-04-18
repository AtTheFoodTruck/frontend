import { Card, Container, Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Star from "./star";
import { FaStar } from "react-icons/fa";
import ReviewPage from "./ReviewPage";
import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import useFetch from "./utils/useFetch";
const ReviewHistoryWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

const ReviewHistory = () => {
  //데이터 리스트
  const [data, setData] = useState([]);
  //page 당 게시글 수  고정??
  const [limit, setLimit] = useState(5);
  //현재 페이지 번호  --> 0
  const [page, setPage] = useState(1);
  //const [currentPage,setCurrentPage] = useState(0);
  const [endPage, setEndPage] = useState();

  const getData = async () => {
    await axios
      .get(
        `http://localhost:8000/order-service/orders/v1/customer/reviews?page=${
          page - 1
        }&size=${limit}`
      )
      .then((res) => {
        setData(res.data.itemDto);
      });
  };

  const getEndPage = async () => {
    const request = `http://localhost:8000/order-service/orders/v1/customer/reviews?page=0&size=${limit}}`;
    await axios.get(request).then((res) => {
      setEndPage(res.data.page.endPage);
    });
  };

  useEffect(() => {
    getEndPage();
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

        {data.map((it) => (
          <Row
            className="mt-5 mb-5 d-flex align-items-center justify-content-center"
            // key={it.item_id}
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
                  {/* {it.item_name} */}
                  <h5>{it.name}</h5>
                </Col>
                <Col className="Price">
                  {/* {it.price} */}
                  <h5>{it.price}</h5>
                </Col>
                <Col className="Rating text-warning">
                  {/* {it.rating} rating필요 */}
                  <Star rating={it.rating} />
                </Col>
                <Col className="Date">
                  <h5>{it.date}</h5>
                </Col>
                <Col className="deleteBtn">
                  <Button variant="outline-secondary">삭제</Button>
                </Col>
              </Row>

              {/* 리뷰텍스트 */}
              <Row className="mt-3">
                <Card.Body>
                  <Card.Text>{it.body}</Card.Text>
                </Card.Body>
              </Row>
            </Col>
            <hr className="mt-5" />
          </Row>
        ))}
        {/*페이징 처리*/}
        <ReviewPage
          page={page}
          setPage={setPage}
          endPage={endPage}
          getData={getData}
        />
      </Container>
    </ReviewHistoryWrapper>
  );
};

export default ReviewHistory;
