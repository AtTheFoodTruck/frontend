import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const OrderPageMenu = ({
  item,
  handleClick,
  increaseNumber,
  decreaseNumber,
  number,
}) => {
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
                onClick={() => handleClick(item)}
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
