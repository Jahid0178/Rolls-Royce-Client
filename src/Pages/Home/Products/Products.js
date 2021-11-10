import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Product from "../Product/Product";

const products = [
  {
    img: "https://i.ibb.co/jg65hk0/rolls-royce-boat-tail.jpg",
    name: "Rolls Royce Phantom",
    price: "9.50 Core",
    desc: "There is nothing in the global car market that competes with the Phantom and for good reasons. It’s grand in appearance, has top levels of luxuries and technology along with a sofa-like rear seat. The legendary 6.75-litre V12 engine is supremely powerful and smooth at  It remains an unachievable dream car for many.",
    fuelType: "Petrol",
    engine: "6749 cc",
    powerAndTorque: "563 bhp & 900 Nm",
    driveTrain: "RWD",
  },
  {
    img: "https://i.ibb.co/NV7QDPd/Rolls-Royce-Cullinan.jpg",
    name: "Rolls Royce Cullinan",
    price: "6.95 Core",
    desc: "Rolls-Royce Cullinan is the brand's first SUV that redefines luxury and bespoke craftsmanship. It is audacious, luxuriously practical and is an overload of opulence. It is also a capable off-roader and continues to offer the ‘magic carpet’ ride quality that Rolls-Royce cars are known for. So, if you’ve got the cash to splurge,",
    fuelType: "Petrol",
    engine: "6749 cc",
    powerAndTorque: "563 bhp & 900 Nm",
    driveTrain: "AWD",
  },
  {
    img: "https://i.ibb.co/RbypG94/Rolls-Royce-Wraith.jpg",
    name: "Rolls Royce Wraith",
    price: "5.00 Core",
    desc: "The Wraith is Rolls Royce’s most powerful series-production car to be ever built. It offers incredible performance, unparalleled levels of luxury, and a unique coupe design. The ‘magic-carpet’ ride quality means it still isn’t a sharp handler, and the coupe design makes the rear seat uncomfortable.",
    fuelType: "Petrol",
    engine: "6592 cc",
    powerAndTorque: "591 bhp & 850 Nm",
    driveTrain: "RWD",
  },
  {
    img: "https://i.ibb.co/xsfFJr0/Rolls-Royce-Dawn.jpg",
    name: "Rolls Royce Dawn",
    price: "5.92 Core",
    desc: "If you want a wind-in-your-hair driving experience with Spirit of Ecstasy leading the way, there’s no other car better than the Dawn. Although it’s a genuine four-seater, the rear seats aren’t half as luxurious as Rolls Royce standard. But it still is an unmatched grand tourer which is lavish and opulent. ",
    fuelType: "Petrol",
    engine: "6598 cc",
    powerAndTorque: "563 bhp & 820 Nm",
    driveTrain: "RWD",
  },
  {
    img: "https://i.ibb.co/PYXpPhT/rolls-royce-ghost.jpg",
    name: "Rolls Royce Ghost",
    price: "6.95 Core",
    desc: "The Ghost is Rolls Royce’s most powerful series-production car to be ever built. It offers incredible performance, unparalleled levels of luxury, and a unique coupe design. The ‘magic-carpet’ ride quality means it still isn’t a sharp handler, and the coupe design makes the rear seat uncomfortable. ",
    fuelType: "Petrol",
    engine: "6598 cc",
    powerAndTorque: "563 bhp & 820 Nm",
    driveTrain: "RWD",
  },
  {
    img: "https://i.ibb.co/jg65hk0/rolls-royce-boat-tail.jpg",
    name: "Rolls Royce Boat Tail",
    price: "5.92 Core",
    desc: "If you want a wind-in-your-hair driving experience with Spirit of Ecstasy leading the way, there’s no other car better than the Dawn. Although it’s a genuine four-seater, the rear seats aren’t half as luxurious as Rolls Royce standard. But it still is an unmatched grand tourer which is lavish and opulent. ",
    fuelType: "Petrol",
    engine: "6598 cc",
    powerAndTorque: "563 bhp & 820 Nm",
    driveTrain: "RWD",
  },
];

const Products = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", my: 2 }}>
        Our Products
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
