import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AdList from "./../AdList";
import NewAdForm from "../NewAdForm";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(20),
    position: "relative",
  },
  title: {
    fontWeight: 700,
    paddingBottom: theme.spacing(3),
  },
  addButton: {
    position: "absolute",
    right: 0,
    marginRight: theme.spacing(5),
  },
}));

const MainPage = () => {
  const classes = useStyles();

  // Local State
  const [dialogOpen, setDialogOpen] = useState(false);

  // Handle Dialog
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const configDialog = {
    dialogOpen,
    handleDialogClose,
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleDialogOpen}
        className={classes.addButton}
      >
        <AddIcon />
      </Fab>
      <NewAdForm {...configDialog} />

      <Typography variant="h3" color="primary" className={classes.title}>
        What's hot!
      </Typography>
      <AdList />
    </Container>
  );
};

export default MainPage;
