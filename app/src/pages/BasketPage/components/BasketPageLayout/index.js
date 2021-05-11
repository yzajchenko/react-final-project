import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { List, Box, CardMedia, Button, Typography } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

import ROUTES from "../../../../routes/routesNames";
import styles from "./styles";

const BasketPageLayout = ({
  classes,
  itemList,
  totalPrice,
  handleIncrementQuantity,
  handleDecrementQuantity,
  handleOrder
}) => {
  return (
    <>
      <Box className={classes.root}>
        <Typography className={classes.title}>Список Заказов</Typography>
        <Typography className={classes.totalPrice}>
          Общая Стоимость Заказа: {totalPrice} $
        </Typography>
        <List component="nav" aria-label="secondary mailbox folder">
          {itemList.map(product => {
            return (
              <ListItem key={product.id}>
                <ListItemText primary={product.name} className={classes.name} />
                <Box className={classes.productImg}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                  />
                </Box>
                <ListItemText
                  primary={`${product.price} $`}
                  className={classes.price}
                />

                <Button
                  color="primary"
                  onClick={() => handleDecrementQuantity(product)}
                >
                  -
                </Button>

                <ListItemText
                  className={classes.quantity}
                  primary={product.quantity}
                />

                <Button
                  color="primary"
                  onClick={() => handleIncrementQuantity(product)}
                >
                  +
                </Button>
              </ListItem>
            );
          })}
        </List>
        <Box className={classes.btn}>
          <Button color="primary" variant="contained" onClick={handleOrder}>
            Заказать
          </Button>
        </Box>
      </Box>
      <Link to={ROUTES.PRODUCTS_PAGE}>
        <Button
          color="primary"
          variant="contained"
          className={classes.btnCatalog}
        >
          Перейти в каталог
        </Button>
      </Link>
    </>
  );
};

export default withStyles(styles)(BasketPageLayout);
