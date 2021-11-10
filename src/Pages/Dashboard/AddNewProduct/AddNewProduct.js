import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import "./AddNewProduct.css";
import { Box } from "@mui/system";

const AddNewProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
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
        </Box>
      </form>
    </Container>
  );
};

export default AddNewProduct;
