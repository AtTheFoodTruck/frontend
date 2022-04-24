import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OrderPageMenu from "./OrderPageMenu";
import Cart from "../CartPage/Cart";
import axios from "axios";

const OrderPage = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [detailsMenu, setDetailsMenu] = useState({});
  const [cart, setCart] = useState([]);
  const [number, setNumber] = useState(0);

  // //토큰
  // const accessToken = localStorage.getItem("Authorization");

  // const headers = {
  //   Authorization: `Bearer ${accessToken}`,
  // };

  // TODO - https://apifood.blacksloop.com/ dvelop푸시할때 변경하기
  //Axios 가게 정보 GET
  async function fetchDetails() {
    const foodtruck = await axios.get(
      `http://localhost:8000/item-service/items/v1/customer/stores/${params.storeId}?page=0&size=10`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0dXNlckBuYXZlci5jb20iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjUwOTYwMzM0fQ.2A8AYlGJcmwpJatYDbnP7cNBMTDxBZTZOwC9aGnDYSO7zs3CLFbrG5iT9j8hYiU3K6V2fcbhILLEKw-FaxX1AQ`,
        },
      }
    );
    setDetails(foodtruck.data.data);
    // console.log(foodtruck.data.data);
  }
  //Axios가게 메뉴 목록 GET
  async function fetchDetailsMenu() {
    const foodtruck = await axios.get(
      // `http://localhost:8000/item-service/items/v1/owner/item/1?page=0&size=2`,
      `  http://localhost:8000/item-service/items/v1/owner/item/${params.storeId}?page=0&size=8`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0b3duZXJAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfTUFOQUdFUiIsImV4cCI6MTY1MDgwNTYxOX0.1fVLo4bsRExaC0NzP7PjyYH3tq-eYFsm-vL0ba33BhTHiLUBPyqgkLdHoRsE4heojjSfa-dtv3Z8OkEDQAzhdg`,
        },
      }
    );
    setDetailsMenu(foodtruck.data.data);
    console.log(foodtruck);
    console.log(foodtruck.data);
    console.log(foodtruck.data.data);

    console.log(foodtruck.data.data.itemsDto);
  }
  //fetch  예제 소스
  // const fetchDetails = async () => {
  //   const data = await fetch(
  //     `https://api.themoviedb.org/3/movie/${params.name}?api_key=e2604cc00e2d6cf3166131fbe7c76bd7&language=en-US&page=1`
  //   );
  //   const detailData = await data.json();
  //   setDetails(detailData);
  //   console.log(detailData);
  // };

  const handleClick = (item) => {
    //indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째
    //인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(item);
    console.log(cart);
  };

  const increaseNumber = () => {
    //메뉴 갯수 1개 증가
    setNumber(number + 1);
  };
  const decreaseNumber = () => {
    //메뉴 갯수 1개 감소
    if (number <= 0) {
      setNumber(0);
    } else {
      setNumber(number - 1);
    }
  };

  useEffect(() => {
    fetchDetails(params.storeId);
    fetchDetailsMenu(params.storeId);
    console.log("선택한 푸드트럭의 ID : " + params.storeId);
  }, []);

  return (
    <StoreWrapper className="container">
      {/* Title */}
      <section className="Title container text-center ">
        <h1>{details.storeName}</h1>
      </section>

      {/* Waiting Number */}
      <section className="Waiting container text-center mt-3">
        <button type="button" className="btn btn-secondary disabled">
          {details.totalWaitingCount}
        </button>
      </section>

      {/* Navigation Bar */}
      <section className="Navbar container text-center mt-5">
        <button type="button" className="btn btn-outline-secondary">
          notice
        </button>
        <button type="button" className="btn btn-outline-secondary ms-4 me-4">
          menu
        </button>
        <button type="button" className="btn btn-outline-secondary">
          reviews
        </button>
      </section>

      {/* Notice */}
      <section className="Notice container mt-5">
        <h4>Notice</h4>
        <div className="Notice card">
          <div className="card-body">
            <h5 className="card-subtitle mb-2 text-muted">sajangnim alarm</h5>
            <p className="card-text">{details.notice}</p>
            <h5 className="card-subtitle mb-2 text-muted">Time</h5>
            <p className="card-text">{details.openTime}</p>
            <h5 className="card-subtitle mb-2 text-muted">Address</h5>
            <p className="card-text">{details.address}</p>
            <h5 className="card-subtitle mb-2 text-muted">Phone Number</h5>
            <p className="card-text">{details.phoneNum}</p>
          </div>
        </div>
      </section>

      {/* MenuList */}

      <section className="Menus container mt-4">
        <h4>Menu</h4>
        <div className="MenuList row gx-4 gx-lg-5  row-cols-md-3 row-cols-xl-4  text-center">
          {detailsMenu.itemsDto &&
            detailsMenu.itemsDto.map((item) => {
              return (
                <OrderPageMenu
                  key={item.itemId}
                  item={item}
                  handleClick={handleClick}
                  increaseNumber={increaseNumber}
                  decreaseNumber={decreaseNumber}
                  number={number}
                />
              );
            })}
          <Cart cart={cart} setCart={setCart}></Cart>
        </div>
      </section>
      {/* TODO - LOAD MORE Button */}
      {/* <button>하이</button> */}
    </StoreWrapper>
    //   <CartContext.Provider value={{ cart, setCart }}>
    //   <Cart />
    // </CartContext.Provider>
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
