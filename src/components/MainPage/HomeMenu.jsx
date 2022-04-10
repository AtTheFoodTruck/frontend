import React from "react";
import styled from "styled-components";

const ImgSize = styled.img`
  height: 15rem;
  object-fit: cover;
`;
const HomeMenu = () => {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <ImgSize
                  className="card-img-top img-fluid"
                  src="img/food8.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Fancy Product</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    4.9
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      주문하기
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  // style="top: 0.5rem; right: 0.5rem"
                >
                  Sale
                </div>

                <ImgSize
                  class="card-img-top embed-responsive-item"
                  src="img/food5.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">Special Item</h5>
                    {/* <!-- Product reviews--> */}
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    4.9
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Sale badge--> */}
                <div
                  class="badge bg-dark text-white position-absolute"
                  // style="top: 0.5rem; right: 0.5rem"
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <ImgSize class="card-img-top" src="img/food2.jpg" alt="..." />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">Sale Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    4.9
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Product image--> */}
                <ImgSize class="card-img-top" src="img/food3.jpg" alt="..." />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">Popular Item</h5>
                    {/* <!-- Product reviews--> */}
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    4.9
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Sale badge--> */}
                <div
                  class="badge bg-dark text-white position-absolute"
                  // style="top: 0.5rem; right: 0.5rem"
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <ImgSize class="card-img-top" src="img/food6.jpg" alt="..." />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">Sale Item</h5>
                    {/* <!-- Product price--> */}
                    <span class="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Product image--> */}
                <ImgSize class="card-img-top " src="img/food8.jpg" alt="..." />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">Fancy Product</h5>
                    {/* <!-- Product price--> */}
                    $120.00 - $280.00
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Sale badge--> */}
                <div
                  class="badge bg-dark text-white position-absolute"
                  // style="top: 0.5rem; right: 0.5rem"
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <ImgSize class="card-img-top" src="img/food7.jpg" alt="..." />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">Special Item</h5>
                    {/* <!-- Product reviews--> */}
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    <span class="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Product image--> */}
                <ImgSize class="card-img-top" src="img/food4.jpg" alt="..." />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">Popular Item</h5>
                    {/* <!-- Product reviews--> */}
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMenu;
