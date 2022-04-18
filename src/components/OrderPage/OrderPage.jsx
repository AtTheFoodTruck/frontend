import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OrderPageMenu from "./OrderPageMenu";

const OrderPage = () => {
  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${params.name}?api_key=e2604cc00e2d6cf3166131fbe7c76bd7&language=en-US&page=1`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
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
              return <OrderPageMenu key={genre.id} genre={genre} />;
            })}
        </div>
      </section>
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
