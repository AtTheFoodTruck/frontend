import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import OrderList from './OrderList';

// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const DUMMYDATA = [
  {
    id: 1,
    store_name: '엽기떡볶이',
    menu: '엽기떡볶이',
    price: 5000,
    ordered_date: '2022.02.12',
    waiting_num: 13,
    menu_img: 'https://via.placeholder.com/150/24f355',
  },
  {
    id: 2,
    store_name: '맛나분식',
    menu: '김밥',
    price: 4000,
    ordered_date: '2022.11.12',
    waiting_num: 15,
    menu_img: 'https://via.placeholder.com/150/24f355',
  },
  {
    id: 3,
    store_name: '천재치킨',
    menu: '양념치킨',
    price: 23000,
    ordered_date: '2022.02.10',
    waiting_num: 3,
    menu_img: 'https://via.placeholder.com/150/24f355',
  },
  {
    id: 4,
    store_name: '쉐프의 스테이크',
    menu: '오늘의 스테이크',
    price: 12200,
    ordered_date: '2022.02.03',
    waiting_num: 23,
    menu_img: 'https://via.placeholder.com/150/24f355',
  },
  {
    id: 5,
    store_name: '밥버거',
    menu: '제육밥버거',
    price: 5200,
    ordered_date: '2012.02.22',
    waiting_num: 16,
    menu_img: 'https://via.placeholder.com/150/24f355',
  },
];

const OrderListPage = () => {
  return (
    <OrderListWrapper>
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

        <OrderList orderList={DUMMYDATA} />
      </Container>
    </OrderListWrapper>
  );
};

const OrderListWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 100%;
  top: 20%;
`;

export default OrderListPage;
