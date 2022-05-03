import { Card, Container, Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import StarRating from './StarRating';
import ReviewPagination from './ReviewPagination';
import { useNavigate } from 'react-router-dom';
const ReviewHistoryWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

const ReviewHistory = () => {
  //axios
  const authorization = localStorage.getItem('Authorization');
  const userId = localStorage.getItem('userId');
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
  const navigate = useNavigate();

  useEffect(() => {
    const getTotalPage = async () => {
      await axios
        .get(
          `https://apifood.blacksloop.com/order-service/orders/v1/customer/reviews/${userId}?page=0&size=${size}`,
          // `https://apifood.blacksloop.com/order-service/orders/v1/customer/reviews/${userId}?page=0&size=${size}`,
          { headers }
        )
        .then((res) => {
          console.log(res.data);
          setTotalPage(res.data.data.page.totalPage);
        })
        .catch((err) => console.log(err));
    };
    getTotalPage();
  }, []);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          // `https://apifood.blacksloop.com/order-service/orders/v1/customer/reviews/${userId}?page=${currentPage}&size=${size}`,
          `https://apifood.blacksloop.com/order-service/orders/v1/customer/reviews/${userId}?page=${currentPage}&size=${size}`,
          { headers }
        )
        .then((res) => {
          setReviewList(res.data.data.reviewHistoryDtoList);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, [currentPage]);

  const deleteReview = async (e) => {
    console.log('userId : ' + userId);
    console.log('데이터 갯수 : ' + reviewList.length);
    if (window.confirm('리뷰를 삭제하시겠습니까?')) {
      const data = {
        user_id: userId,
        review_id: e.target.value,
      };
      axios
        .delete(
          // "https://apifood.blacksloop.com/order-service/orders/v1/customer/reviews",
          'https://apifood.blacksloop.com/order-service/orders/v1/customer/reviews',
          { headers, data }
        )
        .then((res) => {
          alert('삭제 완료하였습니다');
          navigate(0);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <ReviewHistoryWrapper>
        <Container className="ReviewPage text-center mt-5">
          <p className="fs-3">리뷰관리</p>
          <Row className=" mt-5">
            {/* <Col lg={3}></Col> */}
            <Col className="d-flex justify-content-center p-0 ms-3 fs-5">
              <p>메장명</p>
            </Col>
            <Col className="d-flex justify-content-center p-0 fs-5">
              <p>가격</p>
            </Col>
            <Col className="d-flex justify-content-center p-0 fs-5">
              <p>별점</p>
            </Col>
            <Col className="d-flex justify-content-center p-0 fs-5">
              <p>작성일</p>
            </Col>
            <Col className="d-flex justify-content-center p-0 fs-5">
              <p>리뷰내용</p>
            </Col>
          </Row>
          {reviewList.map((it) => (
            <Row
              className="mt-5 mb-5 d-flex align-items-center justify-content-center"
              // key={it.item_id}
              key={it.reviewId}
            >
              <Col className="d-flex justify-content-center">
                <Card style={{ width: '8rem', height: '8rem' }}>
                  <Card.Img variant="top" src={it.reviewImgUrl} />
                </Card>
              </Col>

              {/* 항목 */}
              <Col lg={9}>
                <Row>
                  <Col className="MenuName">
                    <h5>{it.storeName}</h5>
                  </Col>
                  <Col className="Price">
                    <h5>{it.oderPrice}</h5>
                  </Col>
                  <Col className="Rating text-warning">
                    <StarRating rating={it.rating} />
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
                <Row className="mt-3 ms-5 text-start">
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
            className="mt-5"
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
