import { Container, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./NotFound.css";
import notFoundImg from "../../Images/not-found.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="notFound-container">
      <Box className="notFound-inner-content">
        <Box>
          <img src={notFoundImg} style={{ width: "550px" }} alt="" />
          <Typography sx={{ textAlign: "center" }} variant="h4">
            Page Not Found
          </Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              sx={{ width: "50%", display: "block", margin: "auto", my: 2 }}
              variant="contained"
            >
              Back To Home
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
