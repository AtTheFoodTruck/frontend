import { Link } from 'react-router-dom';
import { Row, Col, Button, Card } from 'react-bootstrap';

const OrderListItem = ({
  orderId,
  storeName,
  orderItems,
  storeImgUrl,
  totalPrice,
  orderTime,
  storeId,
}) => {
  console.log(orderItems);
  return (
    <Row key={orderId} className='d-flex align-items-center mb-5'>
      <Col className='MenuImg'>
        <Card
          className='d-flex align-items-center'
          style={{ width: '10rem', height: '10rem' }}
        >
          <Card.Img
            style={{ width: '9.5rem', height: '9.5rem' }}
            variant='top'
            src={storeImgUrl}
          />
        </Card>
      </Col>
      <Col className='StoreName'>
        <p>{storeName}</p>
      </Col>
      <Col className='MenuName'>
        <p>{orderItems[0].itemName}</p>
      </Col>
      <Col className='Price'>
        <p>{totalPrice}</p>
      </Col>
      <Col className='Date'>
        <p>{orderTime}</p>
      </Col>
      <Col className='Waiting'>
        <p>{storeId}</p>
      </Col>
      <Col className='ReviewBtn'>
        <Link to='/review-writing'>
          <Button variant='outline-secondary'>리뷰쓰기</Button>{' '}
        </Link>
      </Col>
    </Row>
  );
};

export default OrderListItem;
