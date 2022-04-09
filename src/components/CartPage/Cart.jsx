import React from 'react';
import classes from './Cart.module.css';
import CartItemList from './CartItemList';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = () => {
  return (
    <Container>
      <h1>Cart</h1>
      <Row className='StoreName d-flex justify-content-start'>
        <h4>Store Name</h4>
      </Row>
      <Row className='d-flex justify-content-evenly'>
        <Col lg={5}></Col>
        <Col className='d-flex justify-content-center p-0 ms-5 me-4'>
          <h5>Menu</h5>
        </Col>
        <Col className='d-flex justify-content-center p-0 me'>
          <h5>Amout</h5>
        </Col>
        <Col className='d-flex justify-content-center p-0 me-3'>
          <h5>Price</h5>
        </Col>
      </Row>
      <Row>
        <Col lg={6} className='d-flex justify-content-start'>
          <Card style={{ width: '8rem', height: '8rem' }}>
            <Card.Img
              variant='top'
              src='https://mp-seoul-image-production-s3.mangoplate.com/999285_1575800181007324.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80'
            />
          </Card>
        </Col>
        <Col className='d-flex align-items-center'>카레라이스</Col>
        <Col className='d-flex align-items-center ms-4'>
          <Button variant='outline-secondary'>+</Button>{' '}
          <Button variant='outline-secondary disabled'>0</Button>{' '}
          <Button variant='outline-secondary'>-</Button>{' '}
        </Col>
        <Col className='d-flex align-items-center'>12,000</Col>
        <Row className='text-end'>
          <h4>총 금액 : 20,000</h4>
        </Row>
      </Row>
    </Container>
  );
};

export default Cart;
