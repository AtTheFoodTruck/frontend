import { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const CartListItem = (props) => {
  const [number, setNumber] = useState(0);
  const [unitPrice, setUnitPrice] = useState(props.price);
  const [price, setPrice] = useState(0);

  const increaseNumber = () => {
    //메뉴 갯수 1개 증가
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

  return (
    <>
      <h4>{props.store_name}</h4>
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
            <Button onClick={increaseNumber} variant='outline-secondary'>
              +
            </Button>{' '}
            <Button variant='outline-secondary disabled'>{number}</Button>{' '}
            <Button onClick={decreaseNumber} variant='outline-secondary'>
              -
            </Button>{' '}
          </Col>
          <Col className='d-flex align-items-center ms-5'>
            {price.toLocaleString()}
          </Col>
        </Col>
      </Row>

      <hr className='mt-5' />
    </>
  );
};

export default CartListItem;
