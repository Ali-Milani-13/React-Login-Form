import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import logo from "../../assets/Images/cube_logo.png";
import NavbarScss from "../../scss/Navbar/Navbar.module.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <AppBar className={NavbarScss.AppBar}>
      <Toolbar className={NavbarScss.Toolbar}>
        <img src={logo} alt="SITE_LOGO" className={NavbarScss.logo} />
        <Box className={NavbarScss.linkGroup}>
          <Link to={"/Login"}>Login</Link>
          <Link to={"/"}>Signup</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
