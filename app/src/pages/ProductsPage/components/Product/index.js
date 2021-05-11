import React from "react";
import { withStyles, CardMedia, Typography } from "@material-ui/core";
import { Box, Button } from "@material-ui/core";
import styles from "./styles";

const Product = ({
  handleGoToProductDetails,
  product,
  classes,
  handleAddToOrder
}) => {
  return (
    <Box className={classes.product} item>
      <Box className={classes.productImg}>
        <CardMedia component="img" image={product.image} title={product.name} />
      </Box>
      <Typography className={classes.name} gutterBottom>
        {product.name}
      </Typography>
      <Typography gutterBottom>
        {product.price}
        {"$"}
      </Typography>
      <Box className={classes.handle}>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={handleAddToOrder}
        >
          add cart
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleGoToProductDetails(product.id)}
        >
          details
        </Button>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(Product);
