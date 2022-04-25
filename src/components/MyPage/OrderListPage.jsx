import React, { useEffect, useState, useRef } from 'react';
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
          `https://apifood.blacksloop.com/order-service/orders/v1/customer/order/list/${userId}?page=0&size=${size}`,
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
          `https://apifood.blacksloop.com/order-service/orders/v1/customer/order/list/${userId}?page=0&size=${size}`,
          { headers }
        )
        .then((res) => {
          console.log('response 데이터 ' + res);
          setOrderList(res.data.data.orderHistoryList);
        })
        .catch((err) => console.log(err));
      console.log('getData() complete');
    };
    getData();
  }, [currentPage]);

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

        <OrderList orderList={orderList} />
      </Container>
    </OrderListWrapper>
  );
};

export default OrderListPage;
