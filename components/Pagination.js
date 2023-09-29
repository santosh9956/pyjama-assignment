import React from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const PaginationComponent = (props) => {
    const { PaginationChange, total, pageSize, current, PrevNextArrow, PerPageChange} = props;

  return (
    <div style={{margin:'1.5rem 0'}}>
        <Pagination
        className="pagination-data"
        showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
        onChange={PaginationChange}
        total={total}
        current={current}
        pageSize={pageSize}
        showSizeChanger={false}
        itemRender={PrevNextArrow}
        onShowSizeChange={PerPageChange}
    />
    </div>
  )
}

export default PaginationComponent;