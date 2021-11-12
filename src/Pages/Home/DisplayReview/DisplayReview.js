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

const DisplayReview = (props) => {
  const [review, setReview] = useState(3);
  const { imageLink, name, rating, commentBox, profession } = props.review;

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
    <Box>
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
          <SwiperSlide>
            <div className="review_card">
              <img
                style={{ width: "100px", height: "100px" }}
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
        </Swiper>
      </Container>
    </Box>
  );
};

export default DisplayReview;
