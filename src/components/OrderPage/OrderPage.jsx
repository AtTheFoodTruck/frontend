import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OrderPageMenu from "./OrderPageMenu";
import Cart from "../CartPage/Cart";
import axios from "axios";
import { useLocation } from "react-router-dom";

const OrderPage = () => {
  const location = useLocation();
  const storeId = location.state.storeId;

  const navigate = useNavigate();

  const reviewNavigate = () => {
    navigate("/review-storepage", {
      state: {
        storeId: storeId,
      },
    });
  };

  let params = useParams();
  const [details, setDetails] = useState({});
  const [detailsMenu, setDetailsMenu] = useState({});
  const [cart, setCart] = useState([]);

  //토큰
  const authorization = localStorage.getItem("Authorization");
  const userId = localStorage.getItem("userId");
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  // //Axios 가게 정보 GET
  async function fetchDetails() {
    const foodtruck = await axios
      .get(
        // `https://apifood.blacksloop.com/item-service/items/v1/customer/stores/${params.storeId}?page=0&size=20`,
        // `http://localhost:8000/item-service/items/v1/customer/stores/${params.storeId}?page=0&size=10`,
        `https://apifood.blacksloop.com/item-service/items/v1/customer/stores/${storeId}?page=0&size=10`,
        { headers }
      )
      .then((res) => {
        setDetails(res.data.data);
      });
  }

  //Axios가게 메뉴 목록 GET
  async function fetchDetailsMenu() {
    const foodtruck = await axios.get(
      // `https://apifood.blacksloop.com/item-service/items/v1/owner/item/${params.storeId}?page=0&size=20`,
      `https://apifood.blacksloop.com/item-service/items/v1/customer/stores/${storeId}?page=0&size=10`,
      { headers }
    );
    setDetailsMenu(foodtruck.data.data);
  }

  const handleClick = (item) => {
    //indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째
    //인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);

    console.log(cart);
  };
  // //Load More
  // const loadMore = () => {
  //   setPostsPerPage(postsPerPage + 4);
  // };

  useEffect(() => {
    fetchDetails(storeId);
    fetchDetailsMenu(storeId);
    console.log("선택한 푸드트럭의 ID : " + storeId);
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
          {detailsMenu.searchItemResults &&
            detailsMenu.searchItemResults.map((item) => {
              return (
                <OrderPageMenu
                  key={item.itemId}
                  item={item}
                  handleClick={handleClick}
                  storeId={details.storeId}
                />
              );
            })}
        </div>
      </section>
      {/* TODO - LOAD MORE Button */}
      <button
        // onClick={() => loadMore()}
        className="btn btn-dark d-block w-100 mt-5 mb-5"
      >
        Load More
      </button>
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
