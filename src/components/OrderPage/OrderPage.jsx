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
  const [getcount, setGetCount] = useState({});

  //Load more
  const [postsPerPage, setPostsPerPage] = useState(4); //페이지당 게시물
  const [filteredMenu, setFilteredMenu] = useState([]);
  const currentPosts = filteredMenu.slice(0, postsPerPage);
  const loadMore = () => {
    setPostsPerPage(postsPerPage + 4);
  };

  //토큰
  const authorization = localStorage.getItem("Authorization");
  const userId = localStorage.getItem("userId");
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  // TODO - https://apifood.blacksloop.com/ dvelop푸시할때 변경하기
  //Axios 가게 정보 GET
  async function fetchDetails() {
    const foodtruck = await axios.get(
      `http://localhost:8000/item-service/items/v1/customer/stores/${params.storeId}?page=0&size=20`,
      { headers }
    );
    setDetails(foodtruck.data.data);
  }

  //Axios가게 메뉴 목록 GET
  async function fetchDetailsMenu() {
    const foodtruck = await axios.get(
      `  http://localhost:8000/item-service/items/v1/owner/item/${params.storeId}?page=0&size=20`,
      { headers }
    );
    setDetailsMenu(foodtruck.data.data.itemsDto);
    setFilteredMenu(foodtruck.data.data.itemsDto);

    console.log(foodtruck.data.data.itemsDto);

    // console.log(foodtruck.data.data.itemsDto);
  }
  /**
   * Promise는 프로미스가 생성된 시점에는 알려지지 않았을 수도 있는 값을 위한 대리자로,
   * 비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있습니다.
   * await연산자는 Promise를 기다리기 위해 사용됩니다. 연산자는 async function 내부에서만 사용할 수 있습니다.
   * await 키워드를 만나면 프라미스가 처리(settled)될 때까지 기다립니다. 결과는 그 이후 반환됩니다.
   * async가 붙은 함수는 반드시 프라미스를 반환하고, 프라미스가 아닌 것은 프라미스로 감싸 반환합니다.
   * 프라미스가 처리가 완료되어 resolve(값) 되면 값만 따로 추출해서 리턴한다.
   */
  //TODO장바구니 가져오기
  async function getCart() {
    const foodtruck = await axios.get(
      `http://localhost:8000/order-service/orders/v1/customer/carts/${params.storeId}?page=0&size=20`,
      { headers }
    );
    setGetCount(foodtruck.data.data.cartList);
    console.log("장바구니 가져오기 =" + foodtruck);
    console.log(foodtruck.data.data.cartList);
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

    console.log(cart);
  };
  // //Load More
  // const loadMore = () => {
  //   setPostsPerPage(postsPerPage + 4);
  // };

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
        <button
          type="button"
          onClick={getCart}
          className="btn btn-outline-secondary"
        >
          장바구니 가져오기
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
          {currentPosts &&
            currentPosts.map((item) => {
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
        onClick={() => loadMore()}
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
