import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import axios from "axios";

const OrderPageMenu = ({ storeId, item, handleClick }) => {
  //컴포넌트마다 가지고 있어야하는 상태
  const [number, setNumber] = useState(0);

  const authorization = localStorage.getItem("Authorization");
  const userId = localStorage.getItem("userId");
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  //TODO장바구니 추가
  async function postCart(item) {
    const data = {
      user_id: userId,
      store_id: storeId,
      item_id: item.itemId,
      itemImgUrl: item.itemImgUrl,
      price: item.itemPrice,
      count: number,
    };

    await axios.post(
      "https://apifood.blacksloop.com/order-service/orders/v1/customer/carts",
      data,
      { headers }
    );
    console.log(data);
  }

  //메뉴 갯수 1개 증가
  const increaseNumber = (num) => {
    setNumber(num + 1);
  };

  //메뉴 갯수 1개 감소
  const decreaseNumber = (num) => {
    if (num <= 0) {
      setNumber(0);
    } else {
      setNumber(num - 1);
    }
  };

  return (
    <>
      <div className="MenuItems col">
        <div className="MenuItem card">
          <img
            // src={item.itemImg}
            src="/img/pizza.jpg"
            className="card-img-top"
            alt="menuimage"
          />
          <div className="card-body">
            <h5>{item.itemName}</h5>
            <h6>${item.price}</h6>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                onClick={() => increaseNumber(number)}
                className="btn btn-outline-primary"
              >
                +
              </button>
              <button
                type="button"
                className="btn btn-outline-primary disabled"
              >
                {number}
              </button>
              <button
                type="button"
                onClick={() => decreaseNumber(number)}
                className="btn btn-outline-primary"
              >
                -
              </button>
              <button
                onClick={() => postCart(item)}
                className="btn btn-outline-primary"
              >
                <FaCartPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPageMenu;
