import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, TextField } from "@material-ui/core";
import { addAdStart } from "./../../store/Ad/ad.actions";

const NewAddForm = ({ modalOpen, handleModalClose }) => {
  // Globle State
  const dispatch = useDispatch();

  // Local State

  const [adTitle, setAdTitle] = useState("");
  const [adDesc, setAdDesc] = useState("");
  const [adUrl, setAdUrl] = useState("");

  // Handle Form
  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addAdStart({
        adTitle,
        adDesc,
        adUrl,
      })
    );

    resetForm();
  };

  const resetForm = () => {
    handleModalClose();
    setAdTitle("");
    setAdDesc("");
    setAdUrl("");
  };

  return (
    <Modal open={modalOpen} onClose={handleModalClose}>
      <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
        <h1>Add New Ad</h1>
        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          value={adTitle}
          onChange={(e) => setAdTitle(e.target.value)}
        />
        <TextField
          label="Descripition"
          fullWidth
          variant="outlined"
          value={adDesc}
          onChange={(e) => setAdDesc(e.target.value)}
        />
        <TextField
          label="URL"
          fullWidth
          variant="outlined"
          value={adUrl}
          onChange={(e) => setAdUrl(e.target.value)}
        />
        <Button type="submit">Go Viral</Button>
      </form>
    </Modal>
  );
};

export default NewAddForm;
