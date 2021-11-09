import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Mission from "../Mission/Mission";
import Products from "../Products/Products";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <Services></Services>
      <Mission></Mission>
    </div>
  );
};

export default Home;
