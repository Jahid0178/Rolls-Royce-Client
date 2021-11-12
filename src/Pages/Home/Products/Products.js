import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://frozen-eyrie-42081.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", my: 2 }}>
        Our Products
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
