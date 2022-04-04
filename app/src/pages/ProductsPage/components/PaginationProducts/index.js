import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const PaginationProducts = ({ handleChangeToPage }) => {
  return (
    <div>
      <Pagination
        count={44}
        onChange={event => handleChangeToPage(event)}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
};

export default PaginationProducts;
