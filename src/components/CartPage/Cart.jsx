import React from 'react';
import classes from './Cart.module.css';
import CartItemList from './CartItemList';

const Cart = () => {
  return (
    <div className={classes.Cart}>
      <section className='title'>
        <h1>Cart</h1>
      </section>
      <section className='storeName'>
        <h2>Foodtruck Name(동적으로 받아와야함)</h2>
      </section>
      <section className='menuBar'>
        <span>메뉴명</span>
        <span>수량</span>
        <span>가격</span>
      </section>
      <section className='itemList'>
        <CartItemList />
      </section>
      <section className='totalPrice'>
        <h2>Total Price :</h2>
        <h2>금액계산(동적)</h2>
      </section>
      <section className='orderBtn'>
        {/* 버튼 누르면 주문되었습니다 팝업 */}
        <button type='button' class='btn btn-outline-secondary'>
          order
        </button>
      </section>
    </div>
  );
};

export default Cart;
