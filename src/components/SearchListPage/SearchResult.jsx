import { Container, Row, Col, Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import StarRating from "../MyPage/StarRating";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const ImgSize = styled.img`
  height: 15rem;
  object-fit: cover;
`;

const SearchResult = ({ store }) => {
  const { storeId, storeImgUrl, storeName, avgRating } = store;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/order-page", {
      state: {
        storeId: storeId,
      },
    });
  };
  // store list
  // console.log(card);

  console.log("storeId = " + storeId);
  console.log("storeImgUrl = " + storeImgUrl);
  console.log("storeName = " + storeName);
  console.log("avgRating = " + avgRating);
  console.log("----------");
  return (
    <motion.section
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="py-2 "
    >
      <div className="col mb-5 " key={storeId}>
        <div className="card h-100 ">
          <ImgSize
            className="card-img-top img-fluid"
            src="/img/pizza.jpg"
            // 이미지
            // src={storeImgUrl}
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{storeName}</h5>
              <div className="d-flex justify-content-center small  mb-2">
                <div className="bi-star-fill text-warning"></div>&ensp;
                {avgRating}
              </div>
              {/* <div>store Id = {item.storeId}</div> */}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                className="btn btn-outline-dark mt-auto"
                cvariant="outline-secondary"
                onClick={handleClick}
              >
                주문하기
              </button>
              {/* <Link
                className="btn btn-outline-dark mt-auto"
                to={"/order-page/" + item.storeId}
              >
                주문하기
              </Link>
              <Button cvariant="outline-secondary" onClick={handleClick}>
                주문하기
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </motion.section>

    // <Row className="d-inline-flex p-2 mt-5" key={storeId}>
    //   <Col>
    //     <Card style={{ width: "13rem" }}>
    //       <Card.Img variant="top" src={storeImgUrl} />
    //       <Card.Body className="text-center">
    //         <Card.Title>{storeName}</Card.Title>
    //         <Card.Text>
    //           <StarRating rating={avgRating} />
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //   </Col>
    // </Row>
  );
};

export default SearchResult;
