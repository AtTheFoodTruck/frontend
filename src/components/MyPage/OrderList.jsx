import React from "react";
import { Link } from "react-router-dom";

const OrderList = () => {
  return (
    <>
      <div>주문 내역 페이지 입니다.</div>
      <Link to="/reviewwriting">
        <button>리뷰 쓰기</button>
      </Link>
    </>
  );
};

export default OrderList;
