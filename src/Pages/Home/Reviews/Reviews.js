import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Pagination]);

const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);
  const [review, setReview] = useState(3);

  const handleReview = () => {
    const width = window.innerWidth;
    if (width <= 992) {
      setReview(1);
    } else {
      setReview(3);
    }
  };
  window.addEventListener("resize", handleReview);

  useEffect(() => {
    fetch("http://localhost:4000/review")
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);
  return (
    <Box sx={{ background: "#ddd", py: 2 }}>
      <Typography variant="h4" sx={{ my: 2, textAlign: "center" }}>
        Review
      </Typography>
      <Container className="pb-5 pt-3 review_container">
        <Swiper
          slidesPerView={review}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          style={{
            color: "#fff",
          }}
        >
          {reviewData.map((item) => {
            const { imageLink, rating, commentBox, name, profession } = item;
            return (
              <SwiperSlide key={item._id}>
                <div className="review_card">
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={imageLink}
                    alt=""
                  />
                  <Rating
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    fractions={2}
                    initialRating={rating}
                    readonly
                    className="rating"
                  />
                  <p style={{ color: "#000" }}>{commentBox}</p>
                  <h5 style={{ color: "#000" }}>{name}</h5>
                  <h6 style={{ color: "#000" }}>{profession}</h6>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Reviews;
