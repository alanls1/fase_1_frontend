import {
  Button,
  IconButton,
  Snackbar,
  type SnackbarCloseReason,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

interface prop {
  setOpen: React.Dispatch<
    React.SetStateAction<{ isVisible: boolean; message: string }>
  >;
  open: { isVisible: boolean; message: string };
}

const Feedback = ({ open, setOpen }: prop) => {
  const handleClose = (
    _: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({ isVisible: false, message: "" });
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={open.isVisible}
      autoHideDuration={6000}
      onClose={handleClose}
      message={open.message}
      action={action}
    />
  );
};

export default Feedback;
