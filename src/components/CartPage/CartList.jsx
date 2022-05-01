import React from "react";
import CartListItem from "./CartListItem";

// Q. 받아와야 할 장바구니 아이템 데이터: 메뉴이미지, 메뉴 단가, 메뉴명
const CartList = ({ cartlists, handTotalPrice, onRemove, initPriceHandle }) => {

  return (
    <span className="list">
      {cartlists && cartlists.map((cartlists) => (
        <CartListItem
          key={cartlists.orderItemId}
          {...cartlists}
          handTotalPrice={handTotalPrice}
          onRemove={onRemove}
          initPriceHandle={initPriceHandle}
        />
      ))}
    </span>
  );
};

export default CartList;
