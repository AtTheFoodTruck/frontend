import { render } from '@testing-library/react';
import { React, useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import styled from 'styled-components';

const CartWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

const handleClick = () => alert(`주문 완료되었습니다!`);

const Cart = () => {
  return (
    <CartWrapper>
      <Container className='mt-5'>
        <h1 className='text-center'>Cart</h1>
        <Row className='StoreName d-flex justify-content-start mt-5'>
          <h4>Store Name</h4>
        </Row>

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
        <hr />
        <Row>
          <Col lg={6} className='d-flex justify-content-start'>
            <Card style={{ width: '8rem', height: '8rem' }}>
              <Card.Img
                variant='top'
                src='https://mp-seoul-image-production-s3.mangoplate.com/999285_1575800181007324.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80'
              />
            </Card>
          </Col>
          <Col className='d-flex align-items-center me-5'>카레라이스</Col>
          <Col className='d-flex align-items-center ms-3 me-5'>
            <Button variant='outline-secondary'>+</Button>{' '}
            <Button variant='outline-secondary disabled'>0</Button>{' '}
            <Button variant='outline-secondary'>-</Button>{' '}
          </Col>
          <Col className='d-flex align-items-center ms-5'>12,000</Col>
          <hr className='mt-5' />
          <Row className='text-end mt-5'>
            <h4>총 금액 : 20,000</h4>
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

export default Cart;
