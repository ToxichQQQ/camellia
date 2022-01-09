import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headerContainer: {
    display: "flex",
    justifyContent: "center",
  },
  header: {
    padding: "5px",
    fontSize: "16px !important",
    lineHeight: "18px !important",
  },
});

export function Header({ text }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.headerContainer}>
      <Typography component="h5" variant="h5" className={classes.header}>
        {text}
      </Typography>
    </Grid>
  );
}
