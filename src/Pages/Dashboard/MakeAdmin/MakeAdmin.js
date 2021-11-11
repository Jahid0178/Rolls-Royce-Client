import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:4000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Admin Added Successfully");
          setEmail("");
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <Container>
      <Typography variant="h5" sx={{ textAlign: "center", mt: 2 }}>
        Make An Admin
      </Typography>
      <form onSubmit={handleAdminSubmit} style={{ textAlign: "center" }}>
        <TextField
          sx={{ width: 350 }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <Button type="submit" sx={{ mt: 1 }} variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Admin Added Success</Alert>}
    </Container>
  );
};

export default MakeAdmin;
