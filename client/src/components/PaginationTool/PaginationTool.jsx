import React from "react";
import Style from "./PaginationTool.module.scss";

const PaginationTool = ({ elementsPerPage, totalCountries, paginate }) => {
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
            className={Style.buttonPagination}
            onClick={() => paginate(el)}
          >
            {el}
          </button>
        ))}
    </div>
  );
};

export default PaginationTool;
