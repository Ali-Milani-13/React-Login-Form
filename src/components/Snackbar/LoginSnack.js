import React, { useContext } from "react";
import { Snackbar, Alert } from "@mui/material";
import { UserContext } from "../../App";
import useHandlers from "../../hooks/useHandlers";
import useValidator from "../../hooks/useValidator";
const LoginSnack = () => {
  const Context = useContext(UserContext);
  const { HandleLoginSnackbar } = useHandlers();
  const { validator } = useValidator(
    Context.loginUserName,
    Context.loginPassword
  );
  const result = validator();
  const users = JSON.parse(localStorage.getItem("users"));
  return (
    <>
      <Snackbar
        open={Context.loginError}
        autoHideDuration={6000}
        onClose={HandleLoginSnackbar}
      >
        <Alert
          severity={users?.length && result ? "success" : "error"}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {users?.length && result
            ? `Logged in successfully, Welcome ${Context.loginUserName}`
            : "Login failed, empty input or inccorect username and password"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginSnack;
