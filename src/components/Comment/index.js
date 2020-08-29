import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));

const Comment = ({ comment }) => {
  const { commentText, commentDate } = comment;
  const date = new Date(commentDate.seconds * 1000).toLocaleDateString();

  const classes = useStyles();

  return (
    <>
      <Grid
        container
        justify="space-between"
        alignItems="flex-start"
        className={classes.root}
      >
        <Grid item>
          <AccountCircle color="primary" />
          <Typography>{commentText}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{date}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Comment;
