import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router";

const PurchaseProduct = () => {
  const { id } = useParams();
  return (
    <Container>
      <h2>This {id}</h2>
    </Container>
  );
};

export default PurchaseProduct;
