import React from "react";
import { withStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

const ProductsDetailsPageLayout = ({ classes, products, handleAddToOrder }) => {
  const [age, setAge] = React.useState("");
  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.product}>
        <Box className={classes.productImg}>
          <CardMedia
            component="img"
            image={products.image}
            title={products.name}
          />
        </Box>
        <CardContent>
          <Typography
            className={classes.nameProduct}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {products.name}
          </Typography>
          <Typography color="textSecondary" component="p">
            {products.price}$
          </Typography>
        </CardContent>
      </Box>
      <CardActions className={classes.action}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleAddToOrder(products)}
        >
          ADD to Cart
        </Button>
      </CardActions>
    </Box>
  );
};

export default withStyles(styles)(ProductsDetailsPageLayout);
