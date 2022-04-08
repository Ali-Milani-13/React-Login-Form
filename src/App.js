import React from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import Router from "./routes/Router";
import Navbar from "./components/Navbar/Navbar";
import useStates from "./hooks/useStates";

export const UserContext = React.createContext();
function App() {
  const states = useStates();
  return (
    <UserContext.Provider
      value={{
        ...states,
      }}
    >
      <CssBaseline />
      <Navbar />
      <Router />
    </UserContext.Provider>
  );
}

export default App;
