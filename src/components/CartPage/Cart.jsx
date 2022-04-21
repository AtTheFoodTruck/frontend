import { React, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import CartList from './CartList';

const handleClick = () => alert(`주문 완료되었습니다!`);

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handTotalPrice = (price) => setTotalPrice(totalPrice + price);

  return (
    <CartWrapper>
      <Container className='mt-5'>
        <h1 className='text-center'>Cart</h1>

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
        <Row>
          <CartList cartlists={DUMMY_DATA} handTotalPrice={handTotalPrice} />
          <Row className='text-end mt-5'>
            <h4>총 금액 : {totalPrice.toLocaleString()}</h4>
          </Row>
        </Row>
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

const DUMMY_DATA = [
  {
    id: 's1',
    store_name: '비빔밥 세상',
    menu: '돌솥비빔밥',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg',
    price: 6000,
  },
  {
    id: 's2',
    store_name: '비빔밥 세상',
    menu: '날치알비빔밥',
    image:
      'https://d1hk7gw6lgygff.cloudfront.net/uploads/recipe/image_file/4472/Flying_Fish_Roe_Bibimbap_I01.jpg',
    price: 7000,
  },
  {
    id: 's3',
    store_name: '쉐프의 스테이크',
    menu: '큐브 스테이크',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg',
    price: 10000,
  },
  {
    id: 's4',
    store_name: '쉐프의 스테이크',
    menu: '오늘의 추천메뉴',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Minute_steak_in_Tulppio.jpg/220px-Minute_steak_in_Tulppio.jpg',
    price: 16999,
  },
];
export default Cart;
