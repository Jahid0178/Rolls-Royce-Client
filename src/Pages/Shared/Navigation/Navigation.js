import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box
      style={{ position: "sticky", top: 0, zIndex: 999 }}
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="static" sx={{ background: "#333" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rolls Royce
          </Typography>
          <NavLink to="/moreProducts" style={{ textDecoration: "none" }}>
            <Button variant="contained">More Products</Button>
          </NavLink>
          {user.email ? (
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button onClick={logOut} variant="contained">
                Log Out
              </Button>
            </NavLink>
          ) : (
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button variant="contained">Log In</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
