import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Reviews.css";

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
                  <Box style={{ display: "flex" }}>
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                      src={imageLink}
                      alt=""
                    />
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h5" style={{ color: "#000" }}>
                        {name}
                      </Typography>
                      <Typography variant="h6" style={{ color: "#818181" }}>
                        {profession}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fas fa-star fa-2x"
                    fractions={2}
                    initialRating={rating}
                    readonly
                    className="rating"
                  />
                  <p style={{ color: "#000" }}>{commentBox}</p>
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
