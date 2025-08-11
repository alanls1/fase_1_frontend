import {
  Button,
  IconButton,
  Snackbar,
  type SnackbarCloseReason,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import useFeedback from "../../hook/useFeedback";

const Feedback = () => {
  const setIsVisible = useFeedback((state) => state.setIsVisible);
  const setMessage = useFeedback((state) => state.setMessage);
  const message = useFeedback((state) => state.message);
  const isVisible = useFeedback((state) => state.isVisible);

  const handleClose = (
    _: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsVisible(false);
    setMessage("");
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
      open={isVisible}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};

export default Feedback;
