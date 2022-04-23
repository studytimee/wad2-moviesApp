import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from './authContext';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appbar: {
    // background: 'none',
    margin: 70,
    padding: 0,
    width: 390,
    fontSize: 22,
    height: 50
  },
  offset: theme.mixins.toolbar,
}));

const BaseAuthHeader = (props) => {
  const classes = useStyles();
  const context = useContext(AuthContext);
  const { history } = props;

  return (
    <>
      <AppBar className={classes.appbar}
        position="fixed" elevation={0} color='primary'>
        <Toolbar>
          {context.isAuthenticated ? (
            <>
              <p>
                Welcome {context.email}! <button onClick={() => context.signout()}>Sign out</button>
              </p>
            </>
          ) : (
            <>
              <p>
                You are not logged in{" "}
                <button onClick={() => history.push("/login")}>Login</button>
              </p>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withRouter(BaseAuthHeader);