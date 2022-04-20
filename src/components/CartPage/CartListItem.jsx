import { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

const CartListItem = (props, id) => {
  const [number, setNumber] = useState(0);
  const [unitPrice, setUnitPrice] = useState(props.price);
  const [price, setPrice] = useState(0);
  const accessToken = localStorage.getItem('Authorization');

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const increaseNumber = () => {
    //메뉴 갯수 1개 증가
    axios.patch(`http://localhost:8000/user-service/orders/v1/customer/carts`);
    setNumber(number + 1);
    setPrice(price + unitPrice);
    props.handTotalPrice(unitPrice);
  };
  const decreaseNumber = () => {
    //메뉴 갯수 1개 감소
    if (number <= 0) {
      setNumber(0);
      setPrice(0);
    } else {
      setNumber(number - 1);
      setPrice(price - unitPrice);
      props.handTotalPrice(-1 * unitPrice);
    }
  };

  //메뉴 삭제
  const handleClickRemove = () => {
    axios.delete(
      `http://localhost:8000/user-service/orders/v1/customer/carts`,
      {
        user_id: 1,
        order_item_id: id,
      },
      {
        //header
        headers: headers,
      }
    );
    // onpointermove(id);
  };

  return (
    <>
      <Row>
        {' '}
        <Col lg={6} className='d-flex justify-content-start'>
          <Card style={{ width: '8rem', height: '8rem' }}>
            <Card.Img
              variant='top'
              src={props.image}
              style={{ width: '7.5rem', height: '7.5rem' }}
            />
          </Card>
        </Col>
        <Col lg={6} className='d-flex justify-content-start'>
          <Col className='d-flex align-items-center me-5'>{props.menu}</Col>
          <Col className='d-flex align-items-center ms-3 me-5'>
            <Button onClick={decreaseNumber} variant='outline-secondary'>
              -
            </Button>{' '}
            <Button variant='outline-secondary disabled'>{number}</Button>{' '}
            <Button onClick={increaseNumber} variant='outline-secondary'>
              +
            </Button>{' '}
          </Col>
          <Col className='d-flex align-items-center ms-5'>
            {price.toLocaleString()}
          </Col>
          <Col>
            <Button onClick={handleClickRemove}>삭제</Button>
          </Col>
        </Col>
      </Row>

      <hr className='mt-5' />
    </>
  );
};

export default CartListItem;
