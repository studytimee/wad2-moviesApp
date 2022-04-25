import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from './authContext';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  fab: {
    marginTop: theme.spacing(9),
    position: "fixed",
    top: theme.spacing(0),
    right: theme.spacing(47),
    width: 200,
    height: 100,
    fontSize: 15,
},
  offset: theme.mixins.toolbar,
}));

const BaseAuthHeader = (props) => {
  const classes = useStyles();
  const context = useContext(AuthContext);
  const { history } = props;

  return (
    <>
      <Fab className={classes.fab}
        position="fixed" elevation={0} color='primary'>
        <Toolbar>
          {context.isAuthenticated ? (
            <>
              <p>
                Welcome {context.email}! <button onClick={() => context.signout()}>Logout</button>
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
      </Fab>
    </>
  );
};

export default withRouter(BaseAuthHeader);