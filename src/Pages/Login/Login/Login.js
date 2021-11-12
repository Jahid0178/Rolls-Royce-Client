import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, loginUser } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logInData };
    console.log(newLoginData);
    newLoginData[field] = value;
    setLogInData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(logInData?.email, logInData?.password, history, location);
    e.preventDefault();
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Login
        </Typography>
        <form onSubmit={handleLoginSubmit}>
          <TextField
            label="Your Email"
            type="email"
            name="email"
            value={logInData.email}
            onChange={handleOnBlur}
            variant="standard"
            sx={{ width: "100%", mb: 2 }}
          />
          <br />
          <TextField
            label="Your Password"
            type="password"
            name="password"
            value={logInData.password}
            onChange={handleOnBlur}
            variant="standard"
            sx={{ width: "100%" }}
          />
          <br />
          <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2 }}>
            Login
          </Button>
        </form>
        <div>-----------------------OR-----------------------</div>
        <Box>
          <Button
            onClick={handleGoogleSignIn}
            variant="contained"
            sx={{ mt: 3 }}
          >
            Google Login
          </Button>
        </Box>
        <NavLink to="/register" style={{ textDecoration: "none" }}>
          <Button sx={{ mt: 1 }}>New user? please register</Button>
        </NavLink>
      </Box>
    </Container>
  );
};

export default Login;
