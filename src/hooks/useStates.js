import React from "react";

const useStates = () => {
  const [users, setUsers] = React.useState([]);
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [Error, setError] = React.useState(false);
  const [loginUserName, setLoginUserName] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const [loginError, setLoginError] = React.useState(false);

  const initialRender = React.useRef(true);
  React.useEffect(() => {
    if (localStorage.getItem("users") !== []) {
      const information = localStorage.getItem("users");
      localStorage.setItem("users", information);
    }
  }, []);

  React.useEffect(() => {
    if (!initialRender.current) {
      localStorage.setItem("users", JSON.stringify(users));
    }
    initialRender.current = false;
  }, [users]);

  return {
    users,
    setUsers,
    userName,
    setUserName,
    email,
    setEmail,
    Error,
    setError,
    password,
    setPassword,
    loginUserName,
    setLoginUserName,
    setLoginPassword,
    loginPassword,
    loginError,
    setLoginError,
  };
};

export default useStates;
