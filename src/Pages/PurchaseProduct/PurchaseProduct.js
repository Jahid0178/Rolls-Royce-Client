import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const PurchaseProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    const url = `http://localhost:4000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  const handlePurchase = () => {
    const url = `http://localhost:4000/purchaseProduct/${user.email}`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...singleProduct, status: "Pending" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("Product added successfully");
        }
      });
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 345, my: 3 }}>
        <CardMedia
          component="img"
          height="180"
          image={singleProduct?.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {singleProduct?.name}
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Price: {singleProduct?.price}
          </Typography>
          <Typography variant="body2">{singleProduct?.desc}</Typography>
          <Box sx={{ display: "flex", my: 2 }}>
            <Typography sx={{ mr: 2 }} variant="body1">
              Fuel Type: {singleProduct?.fuelType}
            </Typography>
            <Typography variant="body1">
              Engine: {singleProduct?.engine}
            </Typography>
          </Box>
          <Typography sx={{ my: 2 }}>
            {singleProduct?.powerAndTorque}
          </Typography>
          <Typography variant="body1">
            Drive Train: {singleProduct?.driveTrain}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => handlePurchase(singleProduct?._id)}
            variant="contained"
          >
            Purchase
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default PurchaseProduct;
