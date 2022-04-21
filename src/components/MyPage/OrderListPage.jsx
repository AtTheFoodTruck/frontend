import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import OrderList from './OrderList';
import axios from 'axios';

const OrderListPage = () => {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  // const headers = {
  //   Authorization: `Bearer ${accessToken}`,
  // };

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
      .get('https://apifood.blacksloop.com/orders/v1/customer/order')
      .then(function (response) {
        console.log(response);
      });
  }, []);

  // const getData = async (request) => {
  //   axios
  //     .get(
  //       request, // 카트목록조회 URL
  //       //'http://localhost:8000/order-service/orders/v1/customer/carts',
  //       {
  //         // body
  //         user_id: 1,
  //       },
  //       {
  //         headers: headers,
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       // return 받은 데이터를 newCart 객체로 담기
  //       const newCart = {
  //         orderItemId: response.data.data.orderItemId,
  //         storeName: response.data.data.storeName,
  //         itemId: response.data.data.itemId,
  //         itemName: response.data.data.itemName,
  //         itemImgUrl: response.data.data.itemImgUrl,
  //         count: response.data.data.count,
  //         totalPrice: response.data.data.totalPrice,
  //       };

  // 위에서 선언한 cartArray에 newCart를 담기, cartArray에 담긴 객체를 화면에 출력해줘야함!!!!
  //       cartArray.push(newCart);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

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
