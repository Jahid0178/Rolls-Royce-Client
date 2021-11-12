import { Button, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import "./AddNewProduct.css";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const AddNewProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged === true) {
          alert("Product Added Successfully");
        }
      });
  };
  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", pt: 3 }}>
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="field-container">
          <input
            {...register("img", {
              required: true,
            })}
            placeholder="Image Link"
          />
          <input {...register("name", { required: true })} placeholder="Name" />
          <input type="text" {...register("price")} placeholder="Price" />
          <input type="text" {...register("desc")} placeholder="Description" />
          <input
            type="text"
            {...register("fuelType")}
            placeholder="Fuel Type"
          />
          <input type="text" {...register("engine")} placeholder="Engine" />
          <input
            type="text"
            {...register("powerAndTorque")}
            placeholder="Power And Torque"
          />
          <input
            type="text"
            {...register("driveTrain")}
            placeholder="Drive Train"
          />
          <input type="submit" value="Add" />
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Back
            </Button>
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default AddNewProduct;
