import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import axios from 'axios';

const OrderPageMenu = ({ storeId, item }) => {
  console.log('받아온 storeId의 값은 ? ' + storeId);

  // 유저 정보
  const authorization = localStorage.getItem('Authorization');
  const userId = localStorage.getItem('userId');
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  // 변수 선언
  // const [storeIds, setStoreIds] = useState(storeId);
  const [itemId, setItemId] = useState(item.itemId);
  const [itemImgUrl, setItemImgUrl] = useState(item.itemImgUrl);
  const [itemName, setItemName] = useState(item.itemName);
  const [price, setPrice] = useState(item.itemPrice);
  const [count, setCount] = useState(0);

  // 장바구니에 아이템 담기 메서드
  const postCart = async () => {
    // count가 < 1 일 경우 막는법
    if (count < 1) {
      return alert('수량을 확인해주세요');
    }
    // console.log(`userId: ${userId}`);
    // console.log(`storeIds: ${storeId}`);
    // console.log(`itemId: ${itemId}`);
    // console.log(`장바구니에 담긴 아이템 개수: ${count}`);
    // console.log(`장바구니에 담긴 총 가격: ${price}`);

    await axios
      .post(
        // `https://apifood.blacksloop.com/order-service/orders/v1/customer/carts`,
        `https://apifood.blacksloop.com/order-service/orders/v1/customer/carts`,
        {
          // user_id: 1, // 테스트용 UserId 픽스
          user_id: userId, // 배포용, 배포 시 주석 삭제
          store_id: storeId,
          item_id: itemId,
          price: price,
          count: count,
        },
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.log(res.data);
        setCount(0);
        alert('장바구니에 담겼습니다.');
        document.location.reload();
      })
      .catch((err) => console.log('return error' + err));
  };

  //메뉴 갯수 1개 증가
  const increaseNumber = () => {
    setCount((prev) => prev + 1); // 수량 증가
  };

  //메뉴 갯수 1개 감소
  const decreaseNumber = (num) => {
    if (num <= 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1); // 수량 증가
    }
  };

  return (
    <>
      <div className="MenuItems col">
        <div className="MenuItem card">
          {/* 이미지 출력 */}
          <img
            src={itemImgUrl}
            // src="/img/pizza.jpg"
            className="card-img-top"
            alt="menuimage"
          />
          {/* 데이터 출력 부 */}
          <div className="card-body">
            <h5>{itemName}</h5>
            <h6>${item.itemPrice}</h6>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                onClick={() => decreaseNumber(count)}
                className="btn btn-outline-primary"
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-outline-primary disabled"
              >
                {count}
              </button>
              <button
                type="button"
                onClick={() => increaseNumber()}
                className="btn btn-outline-primary"
              >
                +
              </button>
              <button
                onClick={() => postCart()}
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
