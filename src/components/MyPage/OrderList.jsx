import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleTop = styled.section`
  position: absolute;
  left: 45%;
  top: 20%;
`;
const StyleImg = styled.img`
  height: 10rem;
  object-fit: cover;
`;

const StyleSection = styled.section`
  position: relative;
  right: 40%;
  /* left: 50%; */
`;

const StyleTh = styled.th``;

const OrderList = () => {
  return (
    <>
      <StyleTop className="container">
        <h1>OrderList</h1>
        <StyleSection>
          <table class="table table-hover ">
            <thead className="fs-1 ">
              <tr>
                <th scope="col"></th>
                <th scope="col">store</th>
                <th scope="col">menu</th>
                <th scope="col">price</th>
                <th scope="col">order date</th>
                <th scope="col">waiting </th>
                <th scope="col">Column heading</th>
              </tr>
            </thead>
            <tbody className="fs-5 text-center ">
              <tr>
                <td>
                  <Link type="img" to="/">
                    <StyleImg src="img/food1.jpg" alt="food" />
                  </Link>
                </td>
                <td className="">졸리다</td>
                <StyleTh>살려줘</StyleTh>
                <td>5억만</td>
                <td>2022.4.10</td>
                <td>50</td>
                <td>
                  <div>
                    <Link
                      type="button"
                      className="btn btn-primary btn-lg"
                      to="/reviewwriting"
                    >
                      리뷰쓰기
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Link type="img" to="/">
                    <StyleImg src="img/food1.jpg" alt="food" />
                  </Link>
                </td>
                <td className="">졸리다</td>
                <StyleTh>살려줘</StyleTh>
                <td>5억만</td>
                <td>2022.4.10</td>
                <td>50</td>
                <td>
                  <div>
                    <Link
                      type="button"
                      className="btn btn-primary btn-lg"
                      to="/reviewwriting"
                    >
                      리뷰쓰기
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </StyleSection>
      </StyleTop>
    </>
  );
};

export default OrderList;
