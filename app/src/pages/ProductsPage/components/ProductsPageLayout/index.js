import React from "react";
import { withStyles, CardMedia, Typography } from "@material-ui/core";
import { Box, Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import PaginationProducts from "../PaginationProducts";
import Product from "../Product";
import styles from "./styles";

const ProductsPageLayout = ({
  classes,
  productsList,
  handleGoToProductDetails,
  handleChangeToPage,
  isLoading
}) => {
  return (
    <>
      <Box className={classes.root}>
        {isLoading ? (
          <CircularProgress className={classes.progress} disableShrink />
        ) : (
          ""
        )}
        {productsList.map(product => {
          return (
            <Product
              key={product.id}
              handleGoToProductDetails={handleGoToProductDetails}
              product={product}
            />
          );
        })}
      </Box>
      <Box className={classes.pagination}>
        <PaginationProducts
          handleChangeToPage={event => handleChangeToPage(event)}
        />
      </Box>
    </>
  );
};

export default withStyles(styles)(ProductsPageLayout);
