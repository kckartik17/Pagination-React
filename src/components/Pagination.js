import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination" style={{ justifyContent: "center" }}>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              href="!#"
              onClick={() => paginate(number)}
              className="page-link"
              style={{ cursor: "pointer" }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
