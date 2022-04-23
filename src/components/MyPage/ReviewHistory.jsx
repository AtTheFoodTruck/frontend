import { Card, Container, Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Star from "./star";
import { FaStar } from "react-icons/fa";
import ReviewPagination from "./ReviewPagination";
import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import { useNavigate } from "react-router-dom";
const ReviewHistoryWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

const ReviewHistory = () => {
  const navigate = useNavigate();
  const authorization = localStorage.getItem("Authorization");
  const userId = localStorage.getItem("userId");
  //develop MERGE 전 https://apifood.blacksloop.com/
  //리뷰 리스트
  const [reviewList, setReviewList] = useState([]);
  //page 당 게시글 수
  const size = 4;
  //페이지 [현재 페이지,총 페이지 수]
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  useEffect(() => {
    const getTotalPage = async () => {
      await axios
        .get(
          `http://localhost:8000/order-service/orders/v1/customer/reviews/${userId}?page=0&size=${size}`,
          { headers }
        )
        .then((res) => {
          console.log(res);
          setTotalPage(res.data.data.page.totalPage);
        })
        .catch((err) => console.log(err));
    };
    getTotalPage();
  }, []);

  useEffect(() => {
    const getData = async () => {
      console.log(`getData() 함수 불러오기 전 currentPage : ` + currentPage);
      console.log(`getData() 함수 불러오기 전 totalPage : ` + totalPage);
      await axios
        .get(
          `http://localhost:8000/order-service/orders/v1/customer/reviews/${userId}?page=${currentPage}&size=${size}`,
          { headers }
        )
        .then((res) => {
          setReviewList(res.data.data.reviewHistoryDtoList);
        })
        .catch((err) => console.log(err));
      console.log("getData() complete");
    };
    getData();
  }, [currentPage]);

  const deleteReview = async (e) => {
    if (window.confirm("리뷰를 삭제하시겠습니까?")) {
      const data = {
        user_id: userId,
        review_id: e.target.value,
      };
      console.log(userId, e.target.value);
      axios
        .delete(
          "http://localhost:8000/order-service/orders/v1/customer/reviews",
          { headers, data }
        )
        .then((res) => {
          console.log(res);
          navigate(0);
        })
        .catch((err) => console.log(err));
    }
  };

  //배열내에 고유한 값을 가지고 있는 변수 예> id , 가 있다면 굳이 idx를 쓰기보다는
  //그 값을 쓰는게 좋다 이유는 삭제 수정을 하면서 약간씩 오류가 발생할 수 있기 때문

  console.log(
    `현재 url : http://localhost:8000/order-service/orders/v1/customer/reviews/${userId}?page=${currentPage}&size=${size}`
  );
  http: return (
    <>
      <ReviewHistoryWrapper>
        <Container className="ReviewPage text-center mt-5">
          <h1>리뷰관리</h1>

          {reviewList.map((it) => (
            <Row
              className="mt-5 mb-5 d-flex align-items-center justify-content-center"
              // key={it.item_id}
              key={it.reviewId}
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
                    <h5>{it.oderPrice}</h5>
                  </Col>
                  <Col className="Rating text-warning">
                    <Star rating={it.rating} />
                  </Col>
                  <Col className="Date">
                    <h5>{it.reviewTime}</h5>
                  </Col>
                  <Col className="deleteBtn">
                    <Button
                      value={it.reviewId}
                      variant="outline-secondary"
                      onClick={deleteReview}
                    >
                      삭제
                    </Button>
                  </Col>
                </Row>

                {/* 리뷰텍스트 */}
                <Row className="mt-3">
                  <Card.Body>
                    <Card.Text>{it.content}</Card.Text>
                  </Card.Body>
                </Row>
              </Col>
              <hr className="mt-5" />
            </Row>
          ))}
          {/*페이징 처리*/}
          <ReviewPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage}
            reviewList={reviewList}
            size={size}
          />
        </Container>
      </ReviewHistoryWrapper>
    </>
  );
};

export default ReviewHistory;
