import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Product = (props) => {
  const { img, name, price, desc } = props.product;

  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" image={img} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
            <Typography>$ {price}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained">View Details</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Product;
