import React from "react";
import ReactPaginate from 'react-paginate';

import styles from "../styles/Pagination.module.scss"



function Pagination({onChangePage}) {

    return(
      <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=""
      previousLabel=""
      onPageChange={event => onChangePage(event.selected + 1)}
      pageRangeDisplayed={1}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
    )
}

export default Pagination