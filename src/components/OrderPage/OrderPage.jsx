import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OrderPageMenu from "./OrderPageMenu";
import Cart from "../CartPage/Cart";
import { CartContext } from "../../context/CartContext";
import axios from "axios";

const OrderPage = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [cart, setCart] = useState([]);
  const [number, setNumber] = useState(0);

  //토큰
  const accessToken = localStorage.getItem("Authorization");

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  //axios
  async function fetchDetails() {
    try {
      const detailData = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.name}?api_key=e2604cc00e2d6cf3166131fbe7c76bd7&language=en-US&page=1`
      );
      // console.log(movies);
      // console.log(movies.data);

      console.log(detailData.data.results);
      setDetails(detailData);
      console.log(detailData);
    } catch (error) {
      console.error(error);
    }
  }

  //fetch
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
    fetchDetails();
  }, []);

  return (
    <StoreWrapper className="container">
      {/* Title */}
      <section className="Title container text-center ">
        <h1>{details.title}</h1>
      </section>

      {/* Waiting Number */}
      <section className="Waiting container text-center mt-3">
        <button type="button" className="btn btn-secondary disabled">
          대기 13번
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
            <p className="card-text">{details.overview}</p>
            <h5 className="card-subtitle mb-2 text-muted">Time</h5>
            <p className="card-text">{details.id}</p>
            <h5 className="card-subtitle mb-2 text-muted">Place</h5>
            <p className="card-text">{details.homepage}</p>
            <h5 className="card-subtitle mb-2 text-muted">Phone Number</h5>
            <p className="card-text">{details.vote_count}</p>
          </div>
        </div>
      </section>

      {/* MenuList */}

      <section className="Menus container mt-4">
        <h4>Menu</h4>
        <div className="MenuList row gx-4 gx-lg-5  row-cols-md-3 row-cols-xl-4  text-center">
          {details.genres &&
            details.genres.map((genre) => {
              return (
                <OrderPageMenu
                  key={genre.id}
                  genre={genre}
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
