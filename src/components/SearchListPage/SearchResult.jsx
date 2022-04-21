import { Container, Row, Col, Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";

const SearchBar = ({ card }) => {
  // store list
  // console.log(card);
  const { id, category, item, store_img, store_name, rating } = card;
  return (
    <Row className="d-inline-flex p-2 mt-5" key={id}>
      <Col>
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src={store_img} />
          <Card.Body className="text-center">
            <Card.Title>{store_name}</Card.Title>
            <Card.Text>
              <AiFillStar className="text-warning" /> {rating}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SearchBar;
