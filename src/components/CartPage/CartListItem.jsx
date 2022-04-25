import { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

const CartListItem = ({
  orderItemId,
  count,
  totalPrice,
  itemImgUrl,
  itemName,
  unitPrice,
  handTotalPrice,
  onRemove,
  initPriceHandle,
}) => {
  const userId = localStorage.getItem('userId');
  // const orderItemId = orderItemId;
  const [number, setNumber] = useState(count);
  const [unitPrices, setUnitPrices] = useState(totalPrice);
  const [itemUnitPrices, setItemUnitPrices] = useState(unitPrice);
  const [price, setPrice] = useState(0);
  const [initPrice, setInitPrice] = useState(0);
  const accessToken = localStorage.getItem('Authorization');

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  useEffect(() => {
    initPriceHandle(totalPrice);
  }, [totalPrice]);

  const increaseNumber = () => {
    //메뉴 갯수 1개 증가
    axios.patch(
      `https://apifood.blacksloop.com/order-service/orders/v1/customer/carts`,
      {
        order_item_id: orderItemId,
        plus_minus: true,
      },
      {
        headers: headers,
      }
    );
    setNumber(number + 1); // 수량 증가
    setUnitPrices((prev) => prev + itemUnitPrices); // totalPrice 값 증가
    handTotalPrice(itemUnitPrices); // 총 금액 조정 함수 호출
  };
  const decreaseNumber = () => {
    //메뉴 갯수 1개 감소
    axios.patch(
      `https://apifood.blacksloop.com/order-service/orders/v1/customer/carts`,
      {
        order_item_id: orderItemId,
        plus_minus: false,
      },
      {
        headers: headers,
      }
    );
    if (number <= 0) {
      setNumber(0);
      setPrice(0);
    } else {
      setNumber(number - 1); // 수량 감소
      setUnitPrices((prev) => prev - itemUnitPrices); // totalPrice 값 증가
      handTotalPrice(-1 * itemUnitPrices); // 총 금액 조정 함수 호출
    }
  };

  //메뉴 삭제
  const handleClickRemove = () => {
    axios.delete(
      `https://apifood.blacksloop.com/order-service/orders/v1/customer/carts`,
      {
        user_id: userId,
        order_item_id: orderItemId,
      },
      {
        //header
        headers: headers,
      }
    );
  };

  return (
    <>
      <Row key={orderItemId}>
        {' '}
        <Col lg={4} className='d-flex justify-content-start'>
          <Card style={{ width: '8rem', height: '8rem' }}>
            <Card.Img
              variant='top'
              src={itemImgUrl}
              style={{ width: '7.5rem', height: '7.5rem' }}
            />
          </Card>
        </Col>
        <Col className='d-flex justify-content-start text-center'>
          <Col lg={3} className='d-flex align-items-center me-2'>
            {itemName}
          </Col>
          <Col lg={3} className='d-flex align-items-center'>
            <Button onClick={decreaseNumber} variant='outline-secondary'>
              -
            </Button>{' '}
            <Button variant='outline-secondary disabled'>{number}</Button>{' '}
            <Button onClick={increaseNumber} variant='outline-secondary'>
              +
            </Button>{' '}
          </Col>
          <Col lg={3} className='d-flex align-items-center ms-5'>
            {/* {price.toLocaleString()} */}
            {unitPrices}
          </Col>
          <Col lg={3} className='d-flex align-items-center ms-3'>
            <Button onClick={handleClickRemove}>삭제</Button>
          </Col>
        </Col>
      </Row>

      <hr className='mt-5' />
    </>
  );
};

export default CartListItem;
