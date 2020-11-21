import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="pagination">
      <div></div>
      <div>
        <span
          onClick={() => {
            setPage(--page);
          }}
        >{`<`}</span>{" "}
        {page}{" "}
        <span
          onClick={() => {
            setPage(++page);
          }}
        >
          {">"}
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
