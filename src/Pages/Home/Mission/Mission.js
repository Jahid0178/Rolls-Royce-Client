import { Container, Grid } from "@mui/material";
import React from "react";

const Mission = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          1
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          2
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mission;
