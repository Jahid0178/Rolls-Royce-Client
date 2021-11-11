import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <h2>Make An Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button>Make Admin</Button>
      </form>
    </Container>
  );
};

export default MakeAdmin;
