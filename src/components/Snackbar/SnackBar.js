import React, { useContext } from "react";
import { Alert, Snackbar } from "@mui/material";
import { UserContext } from "../../App";
import useHandlers from "../../hooks/useHandlers";
import SnackScss from "../../scss/Snackbar/Snackbar.module.scss";
const SnackBar = () => {
  const Context = useContext(UserContext);
  const { HandleClose } = useHandlers();

  return (
    <Snackbar
      open={Context.Error}
      autoHideDuration={3000}
      onClose={HandleClose}
    >
      <Alert
        severity={
          Context.userName.length &&
          Context.password.length &&
          Context.email.length > 0
            ? "success"
            : "error"
        }
        className={SnackScss.Alert}
        variant="filled"
      >
        {Context.userName.length &&
        Context.password.length &&
        Context.email.length > 0
          ? "Registration completed"
          : "Please fill all fields"}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
