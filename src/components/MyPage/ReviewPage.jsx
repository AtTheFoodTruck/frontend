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

export default function ReviewPage({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  console.log(numPages, total, limit);
  return (
    <Nav>
      <button
        type="button"
        className="btn btn-outline-dark "
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </button>

      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            type="button"
            className="btn btn-outline-dark"
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </button>
        ))}

      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={() => setPage(page + 1)}
        disabled={page === numPages}
      >
        &gt;
      </button>
    </Nav>
  );
}
