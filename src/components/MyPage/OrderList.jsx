import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
<<<<<<< HEAD
=======
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
>>>>>>> feature-orderlist

const OrderListWrapper = styled.div`
  position: absolute;
  align-items: center;
<<<<<<< HEAD
  width: 40%;
  top: 20%;
  left: 30%;
=======
  width: 100%;
  top: 20%;
>>>>>>> feature-orderlist
`;

const OrderList = () => {
  return (
    <OrderListWrapper>
<<<<<<< HEAD
      <div>주문 내역 페이지 입니다.</div>
      <Link to='/review-writing'>
        <button>리뷰 쓰기</button>
      </Link>
=======
      <Container className='text-center'>
        <h1>주문내역</h1>

        <Row className='mt-5 d-flex justify-content-center'>
          <Col />
          <Col className='TitleStoreName'>
            <h4>매장명</h4>
          </Col>
          <Col className='TitleMenuName'>
            <h4>메뉴명</h4>
          </Col>
          <Col className='TitlePrice'>
            <h4>가격</h4>
          </Col>
          <Col className='TitleDate'>
            <h4>주문일</h4>
          </Col>
          <Col className='TitleWaiting'>
            <h4>대기번호</h4>
          </Col>
          <Col />
        </Row>
        <hr />

        <Row className='d-flex align-items-center mb-5'>
          <Col className='MenuImg'>
            <Card style={{ width: '10rem', height: '10rem' }}>
              <Card.Img
                style={{ width: '9rem', height: '9rem' }}
                variant='top'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Gimbap_%28pixabay%29.jpg/1280px-Gimbap_%28pixabay%29.jpg'
              />
            </Card>
          </Col>
          <Col className='StoreName'>
            <p>롯데리아</p>
          </Col>
          <Col className='MenuName'>
            <p>불고기버거</p>
          </Col>
          <Col className='Price'>
            <p>21,000</p>
          </Col>
          <Col className='Date'>
            <p>2020.2.2</p>
          </Col>
          <Col className='Waiting'>
            <p>12번</p>
          </Col>
          <Col className='ReviewBtn'>
            <Link to='/review-writing'>
              <Button variant='outline-secondary'>리뷰쓰기</Button>{' '}
            </Link>
          </Col>
        </Row>

        <Row className='d-flex align-items-center'>
          <Col className='MenuImg'>
            <Card style={{ width: '10rem', height: '10rem' }}>
              <Card.Img
                style={{ width: '9rem', height: '9rem' }}
                variant='top'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Gimbap_%28pixabay%29.jpg/1280px-Gimbap_%28pixabay%29.jpg'
              />
            </Card>
          </Col>
          <Col className='StoreName'>
            <p>롯데리아</p>
          </Col>
          <Col className='MenuName'>
            <p>불고기버거</p>
          </Col>
          <Col className='Price'>
            <p>21,000</p>
          </Col>
          <Col className='Date'>
            <p>2020.2.2</p>
          </Col>
          <Col className='Waiting'>
            <p>12번</p>
          </Col>
          <Col className='ReviewBtn'>
            <Link to='/review-writing'>
              <Button variant='outline-secondary'>리뷰쓰기</Button>{' '}
            </Link>
          </Col>
        </Row>
      </Container>
>>>>>>> feature-orderlist
    </OrderListWrapper>
  );
};

export default OrderList;
