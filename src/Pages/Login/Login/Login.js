import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const history = useHistory();

  const handleGoogleSignIn = () => {
    signInWithGoogle(history);
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Login
        </Typography>
        <form>
          <TextField
            label="Email"
            variant="standard"
            sx={{ width: "100%", mb: 2 }}
          />
          <br />
          <TextField
            label="Password"
            variant="standard"
            sx={{ width: "100%" }}
          />
          <br />
          <Button variant="contained" sx={{ mt: 2, mb: 2 }}>
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
