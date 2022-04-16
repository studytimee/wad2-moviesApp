import React from "react";
import Header from "../headerGeneric";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CelebrityList from "../celebrityList";

const useStyles = makeStyles((theme) => ({
  root: { 
    backgroundColor: "#bfbfbf",
    minHeight: "100vh",
    paddingTop: theme.spacing(7),
  }
}));

function CelebritiesListPageTemplate({ celebrities,title, action }) {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Grid container >
          <Grid item xs={12}>
            <Header title={title} />
          </Grid>
          <Grid item container spacing={5}>
            <CelebrityList action={action} celebrities={celebrities}></CelebrityList>
          </Grid>
        </Grid>

      </div>
  );
}
export default CelebritiesListPageTemplate;