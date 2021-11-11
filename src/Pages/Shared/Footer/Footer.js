import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ background: "#272A30", color: "#fff" }}>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5">Contact US</Typography>
            <Typography variant="h6" sx={{ my: 2 }}>
              Rolls Royce
            </Typography>
            <Typography>9863-9867 Mill Road, Cambridge</Typography>
            <Typography>MG09 99HT</Typography>
            <Typography sx={{ mt: 5 }}>Phone: 800 603 6035</Typography>
            <Typography>Fax: 800 889 9898</Typography>
            <Typography>E-mail: example@example.com</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5">Opening Hour</Typography>
            <Typography variant="h6" sx={{ my: 2 }}>
              Sales:
            </Typography>
            <Typography>Mon - Sat: 9:00 AM - 6:00PM</Typography>
            <Typography>Sunday is closed</Typography>
            <Typography variant="h6" sx={{ mt: 5 }}>
              Service:
            </Typography>
            <Typography>Mon-Sat: 9:00 AM - 6:00 PM</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5">Services</Typography>
            <ul>
              <li>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="#">
                  New Car Collection
                </Link>
              </li>
              <li>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="#">
                  Pre-Orders Cars
                </Link>
              </li>
              <li>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="#">
                  Car Valuations{" "}
                </Link>
              </li>
              <li>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="#">
                  Financing & Insurance
                </Link>
              </li>
              <li>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="#">
                  Service & Repair
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            4
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
