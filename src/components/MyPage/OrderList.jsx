import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OrderListWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

const OrderList = () => {
  return (
    <OrderListWrapper>
      <div>주문 내역 페이지 입니다.</div>
      <Link to='/review-writing'>
        <button>리뷰 쓰기</button>
      </Link>
    </OrderListWrapper>
  );
};

export default OrderList;
