import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="pagination">
      <div></div>
      <div>
        <span
          onClick={() => {
            setPage(--page);
          }}
        >
          <i>
            <FontAwesomeIcon icon="backward" />
          </i>
        </span>
        {page}
        <span
          onClick={() => {
            setPage(++page);
          }}
        >
          <i>
            <FontAwesomeIcon icon="forward" />
          </i>
        </span>
      </div>
      <div>
        <input
          type="number"
          id="pageSearch"
          name="pageSearch"
          min="1"
          max={totalPages}
          placeholder={page}
          onChange={(e) => {
            setPage(e.target.value);
          }}
        ></input>{" "}
        / {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
