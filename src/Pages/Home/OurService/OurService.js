import { Container, Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import "./OurService.css";
import OurServiceImg from "../../../Images/about.jpg";

const alignment = {
  display: "flex",
  alignItems: "center",
};

const OurService = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ my: 7, py: 3 }}>
        <Grid item xs={12} sm={12} md={6}>
          <img src={OurServiceImg} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} style={alignment}>
          <Box sx={{ ml: 3 }}>
            <Typography variant="h3" sx={{ fontWeight: 500 }}>
              We Are Always Ready To Assist Our Service
            </Typography>
            <Typography sx={{ my: 5 }}>
              Best Frederick locations continues its 10+ plus years tradition of
              quality auto repair services. vehicle owners in the derrick, MD
              area should be well aware of the Dynamic Automotive brand of
              service. We strive to go above and beyond for all of our
              customers, who we pair services. vehicle owners.
            </Typography>
            <Button variant="contained" sx={{ width: 210, height: 60 }}>
              About More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurService;
