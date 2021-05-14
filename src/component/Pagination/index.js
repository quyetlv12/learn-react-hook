import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
};
function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { page, limit, totalRows } = pagination;
  const totalPages = Math.ceil(totalRows / limit);
  function handleChangePage(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <div>
      <button
        className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        disabled={page >= 1}
        onClick={() => handleChangePage(page - 1)}
      >
        NEXT
      </button>
      <button
      className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        disabled={page >= totalPages}
        onClick={() => handleChangePage(page + 1)}
      >
        PREV
      </button>
    </div>
  );
}

export default Pagination;
