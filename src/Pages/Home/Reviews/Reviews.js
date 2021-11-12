import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import DisplayReview from "../DisplayReview/DisplayReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Box sx={{ background: "#ccc", py: 3 }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        Review
      </Typography>
      {reviews.map((review) => (
        <DisplayReview key={review._id} review={review}></DisplayReview>
      ))}
    </Box>
  );
};

export default Reviews;
