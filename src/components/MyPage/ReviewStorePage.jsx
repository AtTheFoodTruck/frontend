import { Card, Container, Button, Col, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import StarRating from "./StarRating";
import ReviewPagination from "./ReviewPagination";

const ReviewStorePage = () => {
  const location = useLocation();
  const storeId = location.state.storeId;

  //axios
  const authorization = localStorage.getItem("Authorization");
  const userId = localStorage.getItem("userId");
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };
  //리뷰 리스트
  const [reviewList, setReviewList] = useState([]);
  //page 당 게시글 수
  const size = 4;
  //페이지 [현재 페이지,총 페이지 수]
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  //
  useEffect(() => {
    const getTotalPage = async () => {
      await axios
        .post(
          `https://apifood.blacksloop.com/order-service/orders/v1/owner/reviews/?page=0&size=${size}`,
          {
            user_id: userId,
            store_id: storeId,
          },
          { headers }
        )
        .then((res) => {
          console.log(res.data);
          setTotalPage(res.data.data.page.totalPage);
          console.log(res.data.data.page.totalPage);
        })
        .catch((err) => console.log(err));
    };
    getTotalPage();
  }, []);

  useEffect(() => {
    const getData = async () => {
      await axios
        .post(
          `https://apifood.blacksloop.com/order-service/orders/v1/owner/reviews`,
          {
            user_id: userId,
            store_id: storeId,
          },
          { headers }
        )
        .then((res) => {
          setReviewList(res.data.data.reviews);
          console.log(res.data.data.reviews);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, [currentPage]);

  return (
    <>
      <ReviewHistoryWrapper>
        <Container className="ReviewPage text-center mt-5">
          <h1>Reviews</h1>

          {reviewList.map((it) => (
            <Row
              className="mt-5 mb-5 d-flex align-items-center justify-content-center"
              // key={it.item_id}
              key={it.storeId}
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
                    <h5>{it.userName}</h5>
                  </Col>
                  <Col className="Rating text-warning">
                    <StarRating rating={it.rating} />
                  </Col>
                  <Col className="Date">
                    <h5>{it.createdDate}</h5>
                  </Col>
                </Row>

                {/* 리뷰텍스트 */}
                <Row className="mt-3 ms-5 text-start" >
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
            key={storeId}
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
const ReviewHistoryWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

export default ReviewStorePage;
