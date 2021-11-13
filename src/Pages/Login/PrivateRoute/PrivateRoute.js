import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { Box, CircularProgress } from "@mui/material";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  console.log(user);
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
