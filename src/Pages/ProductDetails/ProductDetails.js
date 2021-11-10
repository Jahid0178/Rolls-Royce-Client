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

const ProductDetails = (props) => {
  const {
    img,
    name,
    price,
    desc,
    fuelType,
    engine,
    powerAndTorque,
    driveTrain,
  } = props.product;
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} sx={{ mt: 2 }}>
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
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
          <Box sx={{ display: "flex", my: 2 }}>
            <Typography sx={{ mr: 2 }} variant="body1" color="text.secondary">
              Fuel Type: {fuelType}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Engine: {engine}
            </Typography>
          </Box>
          <Typography sx={{ my: 2 }}>{powerAndTorque}</Typography>
          <Typography variant="body1" color="text.secondary">
            Drive Train: {driveTrain}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Purchase</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductDetails;
