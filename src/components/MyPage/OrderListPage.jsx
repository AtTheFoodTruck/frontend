import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import OrderList from './OrderList';
import axios from 'axios';

const OrderListPage = () => {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const accessToken = localStorage.getItem('Authorization');

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  // const getData = async () => {
  //   const res = await fetch(
  //     'https://apifood.blacksloop.com/orders/v1/customer/order'
  //   ).then((res) => res.json());

  //   const initData = res.slice(0, 20).map((list) => {
  //     return {
  //       store_name: list.title,
  //       menu: list.title,
  //       price: 5000,
  //       ordered_date: '2022.12.23',
  //       waiting_num: list.albumId,
  //       menu_img: list.thumbnailUrl,
  //       id: dataId.current++,
  //     };
  //   });
  //   setData(initData);
  // };

  useEffect(() => {
    axios
      .get(
        'https://apifood.blacksloop.com/orders/v1/customer/order',
        {
          store_id: 1,
          item_id: dataId,
        },
        {
          headers: headers,
        }
      )
      .then(function (response) {
        console.log(response);
        setData(response.data.data);
      });
  }, []);

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

        <OrderList orderList={data} />
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
