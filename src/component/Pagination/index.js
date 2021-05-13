import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination : PropTypes.object.isRequired,
    onPageChange : PropTypes.func
};
Pagination.defaultProps = {
    onPageChange : null
}
function Pagination(props) {
    const {pagination , onPageChange} = props;
    const {_page , _limit , _totalRows} = pagination
    const totalPages = Math.ceil(_totalRows / _limit)
  function handleChangePage(newPage) {
    if (onPageChange) {
        onPageChange(newPage)
    }
  }
    return (
        <div>
          <button className="bg bg-gray-500" disabled={_page >= 1} onClick={()=>handleChangePage(_page - 1)}>NEXT</button>
          <button disabled={_page >= totalPages} onClick={()=>handleChangePage(_page + 1)}>PREV</button>
        </div>
    );
}

export default Pagination;