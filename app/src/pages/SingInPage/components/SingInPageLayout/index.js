import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link as LinkMaterialUi } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import ROUTES from "../../../../routes/routesNames";

import styles from "./styles";

const SingInPageLayout = ({
  signInValue,
  handleChange,
  handleSubmit,
  isAuth,
  classes,
  errors
}) => {
  const history = useHistory();
  return (
    <>
      {isAuth && history.push(ROUTES.PRODUCTS_PAGE)}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className={classes.paper}>
          <Typography component="h1" variant="h5">
            SIGN IN
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={event => handleSubmit(event)}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoFocus
              value={signInValue.email}
              onChange={event => handleChange(event)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={signInValue.password}
              onChange={event => handleChange(event)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>

            <Grid item>
              <Link className={classes.link} to={ROUTES.SIGN_UP_PAGE}>
                <LinkMaterialUi variant="body2">
                  "Don't have an account? Sign Up"
                </LinkMaterialUi>
              </Link>
            </Grid>
          </form>
        </Box>
      </Container>
      <Typography
        className={classes.error}
        color="error"
        variant="h7"
        component="h7"
      >
        {errors}
      </Typography>
    </>
  );
};

export default withStyles(styles)(SingInPageLayout);
