import { Row, Col, Card, Button } from 'react-bootstrap';

const CartListItem = (props) => {
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
            <Button variant='outline-secondary'>+</Button>{' '}
            <Button variant='outline-secondary disabled'>0</Button>{' '}
            <Button variant='outline-secondary'>-</Button>{' '}
          </Col>
          <Col className='d-flex align-items-center ms-5'>{props.price}</Col>
        </Col>
      </Row>

      <hr className='mt-5' />
    </>
  );
};

export default CartListItem;
