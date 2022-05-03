import React, {useEffect,useState} from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const OrderListItem = ({
  orderId,
  storeName,
  orderItems,
  storeImgUrl,
  totalPrice,
  orderTime,
  storeId,
  orderStatus
}) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  console.log(orderItems);
  const handleClick = () => {
    navigate("/review-writing", {
      state: {
        orderId: orderId,
        storeName: storeName,
        itemName: orderItems[0].itemName,
      },
    });
  };

  useEffect( () => {
    if( orderStatus === "ORDER") {
      setStatus("주문 상태");
    } else if( orderStatus === "ACCEPTED") {
      setStatus("주문 수락");
    } else if( orderStatus === "REJECTED") {
      setStatus("주문 거절");
    } else if( orderStatus === "COMPLETED") {
      setStatus("조리 완료");
    } else {
      setStatus("취소");
    }

    }, [orderStatus])

  return (
    <Row key={orderId} className="d-flex align-items-center mb-5">
      <Col className="MenuImg">
        <Card
          className="d-flex align-items-center"
          style={{ width: "10rem", height: "10rem" }}
        >
          <Card.Img
            style={{ width: "9.5rem", height: "9.5rem" }}
            variant="top"
            src={storeImgUrl}
          />
        </Card>
      </Col>
      <Col className="StoreName">
        <p>{storeName}</p>
      </Col>
      <Col className="MenuName">
        <p>{orderItems[0].itemName}</p>
      </Col>
      <Col className="Price">
        <p>{totalPrice}</p>
      </Col>
      <Col className="Date">
        <p>{orderTime}</p>
      </Col>
      <Col className="Status">
        <p>{status}</p>
      </Col>
      <Col className="Waiting">
        <p>{storeId}</p>
      </Col>
      <Col className="ReviewBtn">
        { orderStatus === "COMPLETED"
          ? <Button disabled={false} variant="outline-secondary" onClick={handleClick}> 리뷰쓰기 </Button>
          : <Button disabled={true} variant="outline-secondary" onClick={handleClick}> 리뷰쓰기 </Button>
        }
      </Col>
    </Row>
  );
};

export default OrderListItem;
