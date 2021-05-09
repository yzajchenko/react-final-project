import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Box } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import ROUTES from "../../../../routes/routesNames";
import styles from "./styles";
import logo from "../../img/logo.png";

const HeaderPageLayout = ({
  isAuth,
  handleClose,
  handleMenu,
  anchorEl,
  classes,
  handleLogOut
}) => {
  const open = Boolean(anchorEl);
  return (
    <>
      {isAuth && (
        <Box className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <img src={logo} width="auto" height="50px" />
              </Typography>
              <Box>
                <IconButton color="inherit">
                  <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
                </IconButton>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <Link to={ROUTES.SIGN_IN_PAGE}>
                    <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                  </Link>
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
};

export default withStyles(styles)(HeaderPageLayout);
