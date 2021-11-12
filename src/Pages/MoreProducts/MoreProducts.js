import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";

const MoreProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://frozen-eyrie-42081.herokuapp.com/moreProduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductDetails key={product._id} product={product}></ProductDetails>
        ))}
      </Grid>
    </Container>
  );
};

export default MoreProducts;
