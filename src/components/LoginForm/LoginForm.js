import { Container, TextField, Button } from "@mui/material";
import React from "react";
import LoginFormScss from "../../scss/LoginForm/LoginForm.module.scss";
import useHandlers from "../../hooks/useHandlers";
import LoginSnack from "../Snackbar/LoginSnack";
const LoginForm = () => {
  const { HandleLoginUserName, HandleLoginPassword, HandleLogin } =
    useHandlers();
  return (
    <>
      <form onSubmit={HandleLogin}>
        <Container className={LoginFormScss.Container}>
          <TextField
            variant="standard"
            label="Username"
            color="info"
            onChange={HandleLoginUserName}
          />
          <TextField
            variant="standard"
            label="Password"
            color="info"
            onChange={HandleLoginPassword}
          />
          <Button variant="contained" color="info" type="submit">
            Login
          </Button>
        </Container>
      </form>
      <LoginSnack />
    </>
  );
};

export default LoginForm;
