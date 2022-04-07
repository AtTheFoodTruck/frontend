import classes from './ReviewPage.module.css';
import {
  Card,
  Container,
  Pagination,
  Button,
  Col,
  Row,
  Stack,
} from 'react-bootstrap';

const ReviewPage = () => {
  return (
    <Container className='ReviewPage text-center mt-5'>
      <h1>Review</h1>
      {/*리뷰페이지 네브바 */}
      <Container className='Navbar text-center mt-5'>
        <Button variant='outline-secondary'>Notice</Button>
        <Button variant='outline-secondary'>Menu</Button>
        <Button variant='outline-secondary'>Review</Button>
      </Container>

      {/*리뷰 리스트 */}
      <Card>
        <Row className='ReviewList'>
          <Col xs={3} className='MenuImg'>
            <Card.Img
              className={classes.Img}
              variant='left rounded'
              src='https://cdn.imweb.me/upload/S2017041358eed92818b4f/59fc0ee9bc7c3.jpg'
            />
          </Col>
          <Col gap={3} className='ReviewContents'>
            <Stack direction='horizontal' gap={1} clssName='MetaInfo'>
              <Col className='NickName'>
                <h5>NickName</h5>
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
            </Stack>
            <Row className='Text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Row>
          </Col>
        </Row>
      </Card>

      {/*페이징 처리*/}
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </Container>
  );
};

export default ReviewPage;
