import React from "react";

const OrderPageMenu = ({ genre }) => {
  return (
    <>
      <div className="MenuItems col">
        <div className="MenuItem card">
          {/* <img
              src={"https://image.tmdb.org/t/p/w500" + genre.backdrop_path}
              className="card-img-top"
              alt="menuimage"
            /> */}
          <div className="card-body">
            <h5>{genre.id}아이디</h5>
            <h6>${genre.name}</h6>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-outline-primary">
                -
              </button>
              <button
                type="button"
                className="btn btn-outline-primary disabled"
              >
                0
              </button>
              <button type="button" className="btn btn-outline-primary">
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="MenuItems col">
        <div className="MenuItem card">
          {/* <img
              src={"https://image.tmdb.org/t/p/w500" + genre.backdrop_path}
              className="card-img-top"
              alt="menuimage"
            /> */}
          <div className="card-body">
            <h5>{genre.id}아이디</h5>
            <h6>${genre.name}</h6>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-outline-primary">
                -
              </button>
              <button
                type="button"
                className="btn btn-outline-primary disabled"
              >
                0
              </button>
              <button type="button" className="btn btn-outline-primary">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPageMenu;
