import React from "react";

const HomePagination = () => {
  return (
    <>
      <div>
        <ul class="pagination pagination-lg justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#">
              &laquo;
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              4
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              5
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              &raquo;
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePagination;
