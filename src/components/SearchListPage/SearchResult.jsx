import { Container, Row, Col, Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import StarRating from "../MyPage/StarRating";
import styled from "styled-components";

const SearchResult = ({ store }) => {
  // store list
  // console.log(card);
  const { storeId, storeImgUrl, storeName, avgRating } = store;
  console.log("storeId = " + storeId);
  console.log("storeImgUrl = " + storeImgUrl);
  console.log("storeName = " + storeName);
  console.log("avgRating = " + avgRating);
  console.log("----------");
  return (
    <Row className="d-inline-flex p-2 mt-5" key={storeId}>
      <Col>
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src={storeImgUrl} />
          <Card.Body className="text-center">
            <Card.Title>{storeName}</Card.Title>
            <Card.Text>
              <StarRating rating={avgRating} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SearchResult;
