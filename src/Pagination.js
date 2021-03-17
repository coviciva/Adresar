import React from "react";
import "./Pagination.scss";

const Pagination = ({ contactsPerPage, totalContacts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <b key={number} className="pageNum">
            {" "}
            <a onClick={() => paginate(number)} href="#!" className="page">
              {number}
            </a>
          </b>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
