import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import servicesLogo from "../../../Images/services.png";
import "./Services.css";

const alignment = {
  display: "flex",
  alignItems: "center",
};

const Services = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" sx={{ textAlign: "center", my: 2 }}>
        Services
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <img src={servicesLogo} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} style={alignment}>
          <Box>
            <Typography variant="h5">Our Service</Typography>
            <ul>
              <li>You can repair our service center</li>
              <li>Find our service center in your area</li>
              <li>We are delivery soon</li>
              <li>You can best service from us</li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
