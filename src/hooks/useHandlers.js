import { useContext } from "react";
import { UserContext } from "../App";

const useHandlers = () => {
  const Context = useContext(UserContext);
  const HandleUserName = (e) => {
    Context.setUserName(e.target.value);
  };
  const HandlePassword = (e) => {
    Context.setPassword(e.target.value);
  };
  const HandleEmail = (e) => {
    Context.setEmail(e.target.value);
  };
  const HandleClose = () => {
    Context.setError(false);
  };
  const HandleLoginUserName = (e) => {
    Context.setLoginUserName(e.target.value);
  };
  const HandleLoginPassword = (e) => {
    Context.setLoginPassword(e.target.value);
  };
  const HandleLogin = (e) => {
    e.preventDefault();
    Context.setLoginError(true);
  };
  const HandleLoginSnackbar = () => {
    Context.setLoginError(false);
  };
  return {
    HandleUserName,
    HandlePassword,
    HandleEmail,
    HandleClose,
    HandleLoginUserName,
    HandleLoginPassword,
    HandleLogin,
    HandleLoginSnackbar,
  };
};

export default useHandlers;
