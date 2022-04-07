import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const Input = ({ label, type, isPassword, onChnage }) => {
  const [values, setValues] = React.useState(false);
  const handleClickShowPassword = () => {
    setValues(!values);
  };
  return (
    <TextField
      variant="outlined"
      label={label}
      color="info"
      type={values ? "text" : type}
      InputProps={
        isPassword && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {values ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }
      }
      onChange={onChnage}
    />
  );
};

export default Input;
