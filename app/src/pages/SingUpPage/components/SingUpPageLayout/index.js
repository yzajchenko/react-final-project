import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link as LinkMaterialUi } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box, withStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

import ROUTES from "../../../../routes/routesNames";
import styles from "./styles";

const SingUpPageLayout = ({
  handleChange,
  handleSubmit,
  classes,
  success,
  errors,
  isLoading
}) => {
  return (
    <>
      {isLoading ? (
        <CircularProgress className={classes.progress} disableShrink />
      ) : (
        ""
      )}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className={classes.paper}>
          {success ? (
            <>
              <Typography component="h5" variant="h5">
                You have successfully registered
              </Typography>
              <Link className={classes.link} to={ROUTES.SIGN_IN_PAGE}>
                <LinkMaterialUi variant="body2">
                  Go to login page?
                </LinkMaterialUi>
              </Link>
            </>
          ) : (
            <>
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
                  autoFocus
                  name="email"
                  type="text"
                  label="Email"
                  variant="outlined"
                  onChange={event => handleChange(event)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  name="firstName"
                  type="text"
                  label="First Name"
                  variant="outlined"
                  onChange={event => handleChange(event)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  type="text"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  onChange={event => handleChange(event)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  type="text"
                  name="gender"
                  label="Gender"
                  variant="outlined"
                  onChange={event => handleChange(event)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  type="text"
                  name="password"
                  label="Password"
                  variant="outlined"
                  onChange={event => handleChange(event)}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  type="text"
                  name="phone"
                  label="Phone"
                  variant="outlined"
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
                  <Link className={classes.link} to={ROUTES.SIGN_IN_PAGE}>
                    <LinkMaterialUi variant="body2">
                      "Have an account? Sign In"
                    </LinkMaterialUi>
                  </Link>
                </Grid>
              </form>
            </>
          )}
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

export default withStyles(styles)(SingUpPageLayout);
