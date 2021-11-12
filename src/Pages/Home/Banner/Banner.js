import { Carousel } from "react-bootstrap";
import React from "react";

const Banner = () => {
  return (
    <>
      <Carousel controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/pnB9DGf/pexels-dom-j-303316.jpg"
            alt="First slide"
            style={{ height: "90vh" }}
          />
          <Carousel.Caption>
            <h3>Rolls Royce Boat Tail</h3>
            <p>World's Most Premium & Luxurious Cars</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/rMRyb5S/pexels-jae-park-3764984.jpg"
            alt="Second slide"
            style={{ height: "90vh" }}
          />

          <Carousel.Caption>
            <h3>Rolls Royce Ghost</h3>
            <p>World's Most Premium & Luxurious Cars</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Y2xCVyz/photo-1552561040-3ff08bed3eba.jpg"
            alt="Third slide"
            style={{ height: "90vh" }}
          />

          <Carousel.Caption>
            <h3 style={{ color: "#000" }}>Rolls Royce Dawn</h3>
            <p style={{ color: "#000" }}>
              World's Most Premium & Luxurious Cars
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
