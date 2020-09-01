import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  IconButton,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { addAdStart } from "./../../store/Ad/ad.actions";

const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiFormControl-root": {
      marginBottom: theme.spacing(2),
      width: "100%",
    },
    "& .MuiDialogActions-root": {
      marginTop: theme.spacing(5),
    },
  },
  success: {
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
  },
}));

const NewAdForm = ({ dialogOpen, handleDialogClose }) => {
  // Globle State
  const dispatch = useDispatch();

  // Local State
  const classes = useStyles();
  const [isSubmitted, setSubmitted] = useState(false);
  const [adTitle, setAdTitle] = useState("");
  const [adDesc, setAdDesc] = useState("");
  const [adUrl, setAdUrl] = useState("");
  const [adFile, setAdFile] = useState(null);

  const handleCancleClick = (e) => {
    e.preventDefault();
    handleDialogClose();
    resetForm();
  };

  // Handle Form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addAdStart({
        adTitle,
        adDesc,
        adUrl,
        adFile,
      })
    );

    setSubmitted(true);
    setTimeout(() => {
      handleDialogClose();
      resetForm();
    }, 3000);
  };

  const resetForm = () => {
    handleDialogClose();
    setSubmitted(false);
    setAdTitle("");
    setAdDesc("");
    setAdUrl("");
    setAdFile(null);
  };

  const Form = (
    <form
      autoComplete="off"
      onSubmit={handleFormSubmit}
      className={classes.form}
    >
      <TextField
        label="Title"
        required
        value={adTitle}
        onChange={(e) => setAdTitle(e.target.value)}
      />
      <TextField
        label="Descripition"
        required
        value={adDesc}
        onChange={(e) => setAdDesc(e.target.value)}
      />
      <TextField
        label="Website"
        required
        value={adUrl}
        onChange={(e) => setAdUrl(e.target.value)}
      />
      <input
        type="file"
        id="file"
        accept="video/*"
        onChange={(e) => setAdFile(e.target.files[0])}
      />

      <DialogActions>
        <Button onClick={handleCancleClick}>Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Go Viral
        </Button>
      </DialogActions>
    </form>
  );

  const successMessage = (
    <DialogContentText color="primary" className={classes.success}>
      <IconButton aria-label="success" color="inherit">
        <CheckCircleIcon fontSize="large" />
      </IconButton>
      <Typography color="inherit" variant="h4" component="span">
        Post success!
      </Typography>
    </DialogContentText>
  );

  return (
    <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="md">
      <DialogTitle>Share Your Idea</DialogTitle>
      <DialogContent>{isSubmitted ? successMessage : Form}</DialogContent>
    </Dialog>
  );
};

export default NewAdForm;
