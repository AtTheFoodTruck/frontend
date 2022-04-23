import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  button:hover {
    cursor: pointer;
    transform: translateY(-1.7px);
    background: #6e6e6e;
  }
  button[disabled] {
    cursor: revert;
    transform: revert;
  }
  button[aria-current] {
    background: #555555;
    color: white;
  }
`;

export default function ReviewPage({
  currentPage,
  setCurrentPage,
  totalPage,
  reviewList,
  getData,
}) {
  console.log("currentPage : " + currentPage);
  console.log("totalPage : " + totalPage);
  console.log(reviewList);

  return (
    <Nav>
      <button
        type="button"
        className="btn btn-outline-dark "
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
        disabled={currentPage === 0}
      >
        &lt;
      </button>

      {Array(totalPage + 1)
        .fill()
        .map((_, i) => (
          <button
            type="button"
            className="btn btn-outline-dark"
            key={i + 1}
            onClick={() => {
              setCurrentPage(i);
            }}
            aria-current={currentPage === i ? "page" : null}
          >
            {i + 1}
          </button>
        ))}

      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
        disabled={currentPage === totalPage}
      >
        &gt;
      </button>
    </Nav>
  );
}
