import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import reviewImg from "../../../Images/review.svg";
import TextareaAutosize from "@mui/core/TextareaAutosize";

const alignment = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const Review = () => {
  const [review, setReview] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const reviewData = { ...review };
    reviewData[field] = value;
    setReview(reviewData);
  };

  const handleOnReview = (e) => {
    const url = "http://localhost:4000/review";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("Review Added Successfully");
          setReview("");
        }
      });
    e.preventDefault();
  };
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h4">Review</Typography>
            <Box style={alignment}>
              <form onSubmit={handleOnReview}>
                <TextField
                  sx={{ width: "63%", mt: 1 }}
                  label="Name"
                  name="name"
                  variant="standard"
                  type="text"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "63%", mt: 2 }}
                  label="Profession"
                  name="profession"
                  variant="standard"
                  type="text"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "63%", my: 2 }}
                  label="Rating"
                  name="rating"
                  type="number"
                  variant="standard"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "63%", my: 1 }}
                  label="Image Link"
                  name="imageLink"
                  type="text"
                  variant="standard"
                  onBlur={handleOnBlur}
                />
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={10}
                  placeholder="Enter your comment here"
                  name="commentBox"
                  onBlur={handleOnBlur}
                  style={{ width: 350 }}
                />
                <br />
                <Button type="submit" sx={{ mt: 1 }} variant="contained">
                  Send Reviews
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} style={alignment}>
            <img src={reviewImg} style={{ width: "80%" }} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Review;
