import React from "react";

const HomePagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i); //totalPosts 100 / postsPerPage 8
    //Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다.
  }

  return (
    <nav>
      <ul className="pagination pagination-lg justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item ">
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomePagination;
