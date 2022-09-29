import React from "react";
import { useSelector } from "react-redux";

import Style from "./PaginationTool.module.scss";

const PaginationTool = ({ elementsPerPage, totalCountries, paginate }) => {
  const page = useSelector((state)=> state.currentPage)

  const totalPages = [];
  for (let i = 1; i <= Math.ceil(totalCountries / elementsPerPage); i++) {
    totalPages.push(i);
  }

  return (
    <div className={Style.PaginationContainer}>
      {totalPages &&
        totalPages.map((el) => (
          <button
            key={el}
            className={page!==el ?Style.buttonPagination:Style.currentPage}
            onClick={() => paginate(el)}
          >
            {el}
          </button>
        ))}
    </div>
  );
};

export default PaginationTool;
