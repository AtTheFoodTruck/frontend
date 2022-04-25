import { React, useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import CartList from './CartList';
import axios from 'axios';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [storeName, setStoreName] = useState('');
  const authorization = localStorage.getItem('Authorization');
  const userId = localStorage.getItem('userId');
  const size = 4;
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  // 총 가격
  const handTotalPrice = (price) => setTotalPrice(totalPrice + price);

  useEffect(() => {
    const getTotalPage = async () => {
      await axios
        .get(
          `https://apifood.blacksloop.com/order-service/orders/v1/customer/carts/${userId}?page=0&size=${size}`,
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
          `https://apifood.blacksloop.com/order-service/orders/v1/customer/carts/${userId}?page=0&size=${size}`,
          { headers }
        )
        .then((res) => {
          console.log('response 데이터 ' + res.data);
          setStoreName(res.data.data.storeName);
          setCartList(res.data.data.cartList);
          console.log('orderHistoryList 데이터 ' + cartList);
        })
        .catch((err) => console.log(err));
      console.log('getData() complete');
    };
    getData();
  }, [currentPage]);

  // 아이템 삭제 버튼 클릭 이벤트
  const onRemove = async (orderItemId) => {
    axios.delete(
      'https://apifood.blacksloop.com/order-service/orders/v1/customer/order',
      {
        user_id: userId,
        order_item_id: orderItemId,
      },
      {
        headers: headers,
      }
    );
    const newCartList = cartList.filter((list) => list.id !== orderItemId);
    setCartList(newCartList);
  };

  //주문생성 및 주문 완료 버튼
  async function handleClick() {
    axios.post(
      'https://apifood.blacksloop.com/order-service/orders/v1/customer/order',
      {
        //body
        user_id: userId,
        //
      },
      {
        headers: headers,
      }
    );
    alert(`주문 완료되었습니다!`);
  }

  return (
    <CartWrapper>
      <Container className='mt-5'>
        <h1 className='text-center'>Cart</h1>
        <h4> {storeName} </h4>
        <Row className='d-flex justify-content-evenly mt-5'>
          <Col lg={5}></Col>
          <Col className='d-flex justify-content-center p-0 ms-5 me-4'>
            <h5>Menu</h5>
          </Col>
          <Col className='d-flex justify-content-center p-0'>
            <h5>Amout</h5>
          </Col>
          <Col className='d-flex justify-content-center p-0 me-3'>
            <h5>Price</h5>
          </Col>
        </Row>

        <Row className='StoreName d-flex justify-content-start mt-5'>
          <hr />
        </Row>

        {/* 카트리스트 */}
        <Row>
          <CartList
            cartlists={cartList}
            onRemove={onRemove}
            handTotalPrice={handTotalPrice}
          />
          <Row className='text-end mt-5'>
            <h4>총 금액 : {totalPrice.toLocaleString()}</h4>
          </Row>
        </Row>

        {/* 주문하기 버튼 */}
        <Container className='text-center'>
          <Button
            onClick={handleClick}
            className='mt-5'
            size='lg'
            variant='outline-secondary'
          >
            주문하기
          </Button>{' '}
        </Container>
      </Container>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

export default Cart;
