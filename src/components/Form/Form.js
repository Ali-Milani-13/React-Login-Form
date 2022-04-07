import React from "react";
import { Container, Box, Button } from "@mui/material";
import Input from "../Input/Input";
import InputScss from "../../scss/Input/Input.module.scss";
import useHandlers from "../../hooks/useHandlers";
import useSignUp from "../../hooks/useSignUp";
import SnackBar from "../Snackbar/SnackBar";

const Form = () => {
  const { HandleUserName, HandlePassword, HandleEmail } = useHandlers();
  const { HandleSubmit } = useSignUp();
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <Container className={InputScss.Container}>
          <Box className={InputScss.Box}>
            <Input label="User name" type="text" onChnage={HandleUserName} />
            <Input
              label="Password"
              type="password"
              isPassword={true}
              onChnage={HandlePassword}
            />
          </Box>
          <Input label="Email" type="email" onChnage={HandleEmail} />
          <Button variant="contained" color="primary" type="submit">
            SignUp
          </Button>
        </Container>
      </form>
      <SnackBar />
    </>
  );
};

export default Form;
