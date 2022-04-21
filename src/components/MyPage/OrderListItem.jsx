import { Link } from 'react-router-dom';
import { Row, Col, Button, Card } from 'react-bootstrap';

const OrderListItem = ({
  id,
  store_name,
  menu,
  price,
  ordered_date,
  waiting_num,
  menu_img,
}) => {
  return (
    <Row key={id} className='d-flex align-items-center mb-5'>
      <Col className='MenuImg'>
        <Card
          className='d-flex align-items-center'
          style={{ width: '10rem', height: '10rem' }}
        >
          <Card.Img
            style={{ width: '9.5rem', height: '9.5rem' }}
            variant='top'
            src={menu_img}
          />
        </Card>
      </Col>
      <Col className='StoreName'>
        <p>{store_name}</p>
      </Col>
      <Col className='MenuName'>
        <p>{menu}</p>
      </Col>
      <Col className='Price'>
        <p>{price}</p>
      </Col>
      <Col className='Date'>
        <p>{ordered_date}</p>
      </Col>
      <Col className='Waiting'>
        <p>{waiting_num}</p>
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
