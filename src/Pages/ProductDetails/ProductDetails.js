import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";

const ProductDetails = (props) => {
  const {
    _id,
    img,
    name,
    price,
    desc,
    fuelType,
    engine,
    powerAndTorque,
    driveTrain,
  } = props.product;

  const history = useHistory();

  const handleViewDetails = (id) => {
    history.push(`/purchaseProduct/${id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ my: 2 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Price: {price}
          </Typography>
          <Typography variant="body2">{desc}</Typography>
          <Box sx={{ display: "flex", my: 2 }}>
            <Typography sx={{ mr: 2 }} variant="body1">
              Fuel Type: {fuelType}
            </Typography>
            <Typography variant="body1">Engine: {engine}</Typography>
          </Box>
          <Typography sx={{ my: 2 }}>{powerAndTorque}</Typography>
          <Typography variant="body1">Drive Train: {driveTrain}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={() => handleViewDetails(_id)}>
            Go To Purchase
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductDetails;
