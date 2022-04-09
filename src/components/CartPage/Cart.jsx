import React from "react";
import classes from "./Cart.module.css";
import CartItemList from "./CartItemList";
import { Container, Row, Col, Card } from "react-bootstrap";

const Cart = () => {
  return (
    <Container>
      <section className="title">
        <h1>Cart</h1>
      </section>
      <section className="storeName">
        <h2>Foodtruck Name</h2>
      </section>
      <section className="menuBar">
        <span>메뉴명</span>
        <span>수량</span>
        <span>가격</span>
      </section>
      <section className="itemList">
        <CartItemList />
      </section>
      <section className="totalPrice">
        <h2>Total Price :</h2>
        <h2>금액계산(동적)</h2>
      </section>
      <section className="orderBtn">
        {/* 버튼 누르면 주문되었습니다 팝업 */}
        <button type="button" class="btn btn-outline-secondary">
          order
        </button>
      </section>

      <h1>Cart</h1>
      <Row className="StoreName">
        <h4>Store Name</h4>
      </Row>
      <Row>
        <h5>수량</h5>
        <h5>가격</h5>
        <h5>메뉴</h5>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Cart;
