import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from '../contexts/authContext';
import { MoviesContext } from '../contexts/moviesContext';
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  form: {
    margin: 20,
    padding: 20,
    width: 300,
    fontSize: 20
  }
});

const LoginPage = props => {
  const context = useContext(AuthContext)
  const moviesContext = useContext(MoviesContext)
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    moviesContext.setAuthenticated(context.isAuthenticated)
    return <Redirect to={from} />;
  }


  const loginSubmit = () => {
    context.authenticate(email, password);
  };

  return (
    <>
      <center>
        <form onSubmit={loginSubmit}>
          <input type="text" placeholder="Email" name="email" onChange={e => {
            setEmail(e.target.value);
          }} className={classes.form} /><br />
          <input type="password" placeholder="Password" name="password" onChange={e => {
            setPassword(e.target.value);
          }} className={classes.form} /><br />
          <button type="submit" className={classes.form}>Log in</button>
          <button type="reset" className={classes.form}>Reset</button>
        </form>
        <p>Not Registered?
          <Link to="/signup"> Sign Up!</Link></p>
      </center>
    </>
  )
};

export default LoginPage;