import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import OrderList from './OrderList';
import axios from 'axios';

const OrderListWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 100%;
  top: 20%;
`;

const OrderListPage = () => {
  const [orderList, setOrderList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const authorization = localStorage.getItem('Authorization');
  const userId = localStorage.getItem('userId');
  const size = 4;
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  useEffect(() => {
    const getTotalPage = async () => {
      await axios
        .get(
          // `https://apifood.blacksloop.com/order-service/orders/v1/customer/order/list/${userId}?page=0&size=${size}`,
          `http://localhost:8000/order-service/orders/v1/customer/order/list/${userId}?page=0&size=${size}`,
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
          // `https://apifood.blacksloop.com/order-service/orders/v1/customer/order/list/${userId}?page=0&size=${size}`,
          `http://localhost:8000/order-service/orders/v1/customer/order/list/${userId}?page=0&size=${size}`,
          { headers }
        )
        .then((res) => {
          console.log('response 데이터 ' + res.data);
          setOrderList(res.data.data.orderHistoryList);
          console.log('orderHistoryList의 데이터 ' + orderList[0]);
        })
        .catch((err) => console.log(err));
      console.log('getData() complete');
    };
    getData();
  }, [currentPage]);

  return (
    <OrderListWrapper>
      <Container className='text-center'>
        <h1>My Orders</h1>

        <Row className='mt-5 d-flex justify-content-center'>
          <Col />
          <Col className='TitleStoreName fs-5 mt-5'>
            <p>매장명</p>
          </Col>
          <Col className='TitleMenuName fs-5 mt-5'>
            <p>메뉴명</p>
          </Col>
          <Col className='TitlePrice fs-5 mt-5'>
            <p>가격</p>
          </Col>
          <Col className='TitleDate fs-5 mt-5'>
            <p>주문일</p>
          </Col>
          <Col className='TitleWaiting fs-5 mt-5'>
            <p>대기번호</p>
          </Col>
          <Col />
        </Row>
        <hr />

        <OrderList orderList={orderList} />
      </Container>
    </OrderListWrapper>
  );
};

export default OrderListPage;
