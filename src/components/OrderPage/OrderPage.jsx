import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import OrderPageMenu from './OrderPageMenu';
import Cart from '../CartPage/Cart';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { AiFillSound, AiFillPhone } from 'react-icons/ai';
import { BiTimeFive, BiMapAlt } from 'react-icons/bi';

const OrderPage = () => {
  // 이전 화면에서 전달받은 props
  const location = useLocation();
  const storeId = location.state.storeId;

  // 변수 선언
  const navigate = useNavigate();
  let params = useParams();
  const [details, setDetails] = useState({});
  const [detailsMenu, setDetailsMenu] = useState({});
  const [cart, setCart] = useState([]);

  // 로그인 정보
  const authorization = localStorage.getItem('Authorization');
  const userId = localStorage.getItem('userId');
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  // 리뷰 페이지로 전달할 props
  const reviewNavigate = () => {
    navigate('/review-storepage', {
      state: {
        storeId: storeId,
      },
    });
  };

  // //Axios 가게 정보 GET
  async function fetchDetails() {
    const foodtruck = await axios
      .get(
        // `https://apifood.blacksloop.com/item-service/items/v1/customer/stores/${storeId}?page=0&size=10`,
        `https://apifood.blacksloop.com/item-service/items/v1/customer/stores/${storeId}?page=0&size=10`,
        { headers }
      )
      .then((res) => {
        setDetails(res.data.data); // 가게 정보 저장
        setDetailsMenu(res.data.data); // 메뉴 정보 저장
      });
  }
  // const handleClick = (item) => {
  //   //indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째
  //   //인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item]);

  //   console.log(cart);
  // };

  // 최초 렌더링
  useEffect(() => {
    fetchDetails();
    // fetchDetailsMenu();
  }, []);

  return (
    <StoreWrapper className="container">
      {/* Title */}
      <section className="Title container text-center ">
        <p className="fs-2">{details.storeName}</p>
      </section>
      {/* Waiting Number */}
      <section className="Waiting container text-center mt-3">
        <button type="button" className="btn btn-secondary disabled">
          주문 번호 {details.totalWaitingCount}
        </button>
      </section>
      {/* Navigation Bar */}
      <section className="Navbar container text-center mt-5">
        <button onClick={reviewNavigate} className="btn btn-outline-secondary">
          reviews
        </button>
      </section>
      {/* Notice */}
      <section className="Notice container mt-5">
        <h4>Notice</h4>
        <div className="Notice card">
          <div className="card-body ms-5">
            <p className="card-subtitle mb-2 text-muted fs-5">
              <AiFillSound className="me-3" />
              공지사항
            </p>
            <p className="card-text ms-4 ps-3">{details.notice}</p>
            <p className="card-subtitle mb-2 text-muted fs-5 mt-3">
              <BiTimeFive className="me-3" /> 영업시간
            </p>
            <p className="card-text ms-4 ps-3">{details.openTime}</p>
            <p className="card-subtitle mb-2 text-muted fs-5 mt-3">
              <BiMapAlt className="me-3" />
              주소
            </p>
            <p className="card-text ms-4 ps-3">{details.address}</p>
            <p className="card-subtitle mb-2 text-muted fs-5 mt-3">
              <AiFillPhone className="me-3" />
              전화번호
            </p>
            <p className="card-text ms-4 ps-3">{details.phoneNum}</p>
          </div>
        </div>
      </section>
      {/* MenuList */}
      <section className="Menus container mt-4">
        <h4>Menu</h4>
        <div className="MenuList row gx-4 gx-lg-5  row-cols-md-3 row-cols-xl-4   text-center">
          {detailsMenu.searchItemResults &&
            detailsMenu.searchItemResults.map((item) => {
              return (
                <OrderPageMenu
                  key={item.itemId}
                  item={item}
                  storeId={details.storeId}
                />
              );
            })}
        </div>
      </section>
      {/* TODO - LOAD MORE Button */}
      {/* <button
        // onClick={() => loadMore()}
        className="btn btn-dark d-block w-100 mt-5 mb-5"
      >
        장바구니 이동
      </button> */}
    </StoreWrapper>
  );
};

const StoreWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 10%;
  left: 30%;
`;

export default OrderPage;
