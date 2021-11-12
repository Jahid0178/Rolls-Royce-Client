import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { useState } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination } from "swiper";
import Rating from "react-rating";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

// install Swiper modules
SwiperCore.use([Pagination]);

const Reviews = () => {
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

  return (
    <Box sx={{ background: "#ccc", py: 3 }}>
      <Container className="pb-5 pt-3 review_container">
        <h1
          style={{
            color: "var(--main-color)",
          }}
          className="text-center mb-5"
        >
          Review And Rating
        </h1>
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
          <SwiperSlide>
            <div className="review_card">
              <img
                src="https://pinax-ng.envytheme.com/assets/img/client2.jpg"
                alt=""
              />
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
                initialRating="4"
                readonly
                className="rating"
              />
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit, voluptates?
              </p>
              <h5>Sohel Rana</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review_card">
              <img
                src="https://pinax-ng.envytheme.com/assets/img/client2.jpg"
                alt=""
              />
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
                initialRating="4"
                readonly
                className="rating"
              />
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit, voluptates?
              </p>
              <h5>Sohel Rana</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review_card">
              <img
                src="https://pinax-ng.envytheme.com/assets/img/client2.jpg"
                alt=""
              />
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
                initialRating="4"
                readonly
                className="rating"
              />
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit, voluptates?
              </p>
              <h5>Sohel Rana</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review_card">
              <img
                src="https://pinax-ng.envytheme.com/assets/img/client2.jpg"
                alt=""
              />
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
                initialRating="4"
                readonly
                className="rating"
              />
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit, voluptates?
              </p>
              <h5>Sohel Rana</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Reviews;
