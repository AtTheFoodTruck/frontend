import styled from "styled-components";

const DivTop = styled.div`
  /* margin-top: 11%; */
`;

const OrderPage = () => {
  return (
    <DivTop className="">
      <section className="Title container text-center ">
        <h1>동대문 엽기 떡볶이</h1>
      </section>
      <section className="Waiting container text-center mt-3">
        <button type="button" className="btn btn-secondary disabled">
          대기 13번
        </button>
      </section>
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
      <section className="Notice container mt-5">
        <h4>Notice</h4>
        <div className="Notice card">
          <div className="card-body">
            <h5 className="card-subtitle mb-2 text-muted">sajangnim alarm</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <h5 className="card-subtitle mb-2 text-muted">Time</h5>
            <p className="card-text">09:00 ~ 11:00</p>
            <h5 className="card-subtitle mb-2 text-muted">Place</h5>
            <p className="card-text">Seoul City</p>
            <h5 className="card-subtitle mb-2 text-muted">Phone Number</h5>
            <p className="card-text">010-12344-12234</p>
          </div>
        </div>
      </section>
      <section className="Menus container mt-4">
        <h4>Menu</h4>
        <div className="MenuList row text-center">
          <div className="MenuItems col">
            <div className="MenuItem card">
              <img
                src="https://image.ytn.co.kr/general/jpg/2018/0809/201808091525069109_d.jpg"
                className="card-img-top"
                alt="menuimage"
              />
              <div className="card-body">
                <h5>menu name</h5>
                <h6>13,000</h6>
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
              <img
                src="https://image.ytn.co.kr/general/jpg/2018/0809/201808091525069109_d.jpg"
                className="card-img-top"
                alt="menuimage"
              />
              <div className="card-body">
                <h5>menu name</h5>
                <h6>13,000</h6>
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
              <img
                src="https://image.ytn.co.kr/general/jpg/2018/0809/201808091525069109_d.jpg"
                className="card-img-top"
                alt="menuimage"
              />
              <div className="card-body">
                <h5>menu name</h5>
                <h6>13,000</h6>
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
              <img
                src="https://image.ytn.co.kr/general/jpg/2018/0809/201808091525069109_d.jpg"
                className="card-img-top"
                alt="menuimage"
              />
              <div className="card-body">
                <h5>menu name</h5>
                <h6>13,000</h6>
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
        </div>
      </section>
    </DivTop>
  );
};

export default OrderPage;
