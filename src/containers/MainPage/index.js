import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Container, Typography } from "@material-ui/core";
import AdList from "./../AdList";
import NewAddForm from "../NewAdForm";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(30),
  },
  title: {
    fontWeight: 700,
    paddingBottom: theme.spacing(3),
  },
}));

const MainPage = () => {
  const classes = useStyles();

  // Local State
  const [modalOpen, setModalOpen] = useState(false);

  // Handle Modal
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const configModal = {
    modalOpen,
    handleModalClose,
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant="h3" color="primary" className={classes.title}>
        What's hot!
      </Typography>
      {/* <Typography variant="body1">
        Scroll and click to see the ads from local business. Lets help each
        others to get through this tough time :-)
      </Typography> */}
      <AdList />
      <Button onClick={handleModalOpen}>Add</Button>
      <NewAddForm {...configModal} />
    </Container>
  );
};

export default MainPage;
