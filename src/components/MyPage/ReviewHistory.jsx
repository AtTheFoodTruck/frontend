import { Card, Container, Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const ReviewHistoryWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

const ReviewHistory = () => {
  return (
    <ReviewHistoryWrapper>
      <Container className='ReviewPage text-center mt-5'>
        <h1>리뷰관리</h1>

        {/*리뷰 리스트 */}
        {/* 음식이미지 */}
        <Row className='mt-5 mb-5 d-flex align-items-center justify-content-center'>
          <Col className='d-flex justify-content-center'>
            <Card style={{ width: '8rem', height: '8rem' }}>
              <Card.Img
                variant='top'
                src='https://mp-seoul-image-production-s3.mangoplate.com/999285_1575800181007324.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80'
              />
            </Card>
          </Col>

          {/* 항목 */}
          <Col lg={9}>
            <Row>
              <Col className='MenuName'>
                <h5>햄버거</h5>
              </Col>
              <Col className='Price'>
                <h5>10,000</h5>
              </Col>
              <Col className='Rating text-warning'>
                <i class='fa fa-star'></i>
                <i class='fa fa-star'></i>
                <i class='fa fa-star'></i>
                <i class='fa fa-star'></i>
                <i class='fa fa-star'></i>
              </Col>
              <Col className='Date'>
                <h5>2222.22.22</h5>
              </Col>
              <Col className='deleteBtn'>
                <Button variant='outline-secondary'>삭제</Button>
              </Col>
            </Row>

            {/* 리뷰텍스트 */}
            <Row className='mt-3'>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Row>
          </Col>
          <hr className='mt-5' />
        </Row>

        {/*페이징 처리*/}
        <div className='d-flex justify-content-center'>
          <ul class='pagination'>
            <li class='page-item disabled'>
              <a class='page-link' href='#'>
                &laquo;
              </a>
            </li>
            <li class='page-item active'>
              <a class='page-link' href='#'>
                1
              </a>
            </li>
            <li class='page-item'>
              <a class='page-link' href='#'>
                2
              </a>
            </li>
            <li class='page-item'>
              <a class='page-link' href='#'>
                3
              </a>
            </li>
            <li class='page-item'>
              <a class='page-link' href='#'>
                4
              </a>
            </li>
            <li class='page-item'>
              <a class='page-link' href='#'>
                5
              </a>
            </li>
            <li class='page-item'>
              <a class='page-link' href='#'>
                &raquo;
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </ReviewHistoryWrapper>
  );
};

export default ReviewHistory;
