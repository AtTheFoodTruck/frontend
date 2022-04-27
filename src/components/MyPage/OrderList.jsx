import React from "react";
import OrderListItem from "./OrderListItem";

const OrderList = ({ orderList }) => {
  return (
    <span className="list">
      {orderList.map((orderItem) => (
        <OrderListItem key={orderItem.orderId} {...orderItem} />
      ))}
    </span>
  );
};

export default OrderList;
