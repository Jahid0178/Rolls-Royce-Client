import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";
import registerImg from "../../../Images/Login.svg";

const Register = () => {
  const { registerUser } = useAuth();
  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleOnSubmit = (e) => {
    if (loginData.password !== loginData.confirmPassword) {
      alert("Your password didn't matched");
      return;
    }
    registerUser(
      loginData?.email,
      loginData?.password,
      loginData?.name,
      history
    );
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h5">Register Your Account</Typography>
          <form onSubmit={handleOnSubmit}>
            <TextField
              sx={{ width: "75%", mb: 1 }}
              label="Your Name"
              type="text"
              variant="standard"
              name="name"
              onBlur={handleOnBlur}
            />
            <TextField
              sx={{ width: "75%", mb: 1 }}
              label="Your Email"
              type="email"
              variant="standard"
              name="email"
              onBlur={handleOnBlur}
            />
            <TextField
              sx={{ width: "75%", mb: 1 }}
              label="Password"
              type="password"
              variant="standard"
              name="password"
              onBlur={handleOnBlur}
            />
            <TextField
              sx={{ width: "75%", mb: 1 }}
              label="Confirm Password"
              type="password"
              variant="standard"
              name="confirmPassword"
              onBlur={handleOnBlur}
            />
            <Button
              sx={{ width: "75%", mt: 1 }}
              variant="contained"
              type="submit"
            >
              Register
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img src={registerImg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
