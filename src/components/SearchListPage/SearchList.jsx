import { Container, Row, Col, Card } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

const SearchList = () => {
  return (
    <SearchWrapper>
      <Container className='text-center mt-5'>
        <h3 className='mb-5'>000에 대한 총 00건의 검색 결과가 있습니다.</h3>
        <hr />
        <Row className='d-inline-flex p-2 mt-5'>
          <Col>
            <Card style={{ width: '13rem' }}>
              <Card.Img
                variant='top'
                src='https://upload.wikimedia.org/wikipedia/commons/2/20/Korean_fried_chicken_3_banban.jpg'
              />
              <Card.Body className='text-center'>
                <Card.Title>쉐프의스테이크</Card.Title>
                <Card.Text>
                  {' '}
                  <AiFillStar className='text-warning' /> 4.2점
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '13rem' }}>
              <Card.Img
                variant='top'
                src='https://upload.wikimedia.org/wikipedia/commons/2/20/Korean_fried_chicken_3_banban.jpg'
              />
              <Card.Body className='text-center'>
                <Card.Title>쉐프의스테이크</Card.Title>
                <Card.Text>
                  {' '}
                  <AiFillStar className='text-warning' /> 4.2점
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '13rem' }}>
              <Card.Img
                variant='top'
                src='https://upload.wikimedia.org/wikipedia/commons/2/20/Korean_fried_chicken_3_banban.jpg'
              />
              <Card.Body className='text-center'>
                <Card.Title>쉐프의스테이크</Card.Title>
                <Card.Text>
                  {' '}
                  <AiFillStar className='text-warning' /> 4.2점
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '13rem' }}>
              <Card.Img
                variant='top'
                src='https://upload.wikimedia.org/wikipedia/commons/2/20/Korean_fried_chicken_3_banban.jpg'
              />
              <Card.Body className='text-center'>
                <Card.Title>쉐프의스테이크</Card.Title>
                <Card.Text>
                  {' '}
                  <AiFillStar className='text-warning' /> 4.2점
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </SearchWrapper>
  );
};

export default SearchList;
