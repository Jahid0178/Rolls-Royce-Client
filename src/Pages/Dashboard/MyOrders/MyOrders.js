import { Button, Container, TableContainer } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "../../../hooks/useAuth";
import DeleteIcon from "@mui/icons-material/Delete";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user.email) {
      const url = `http://localhost:4000/purchaseProduct?email=${user.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user.email]);

  const handleOrderDelete = (id) => {
    const url = `http://localhost:4000/purchaseProduct/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remainingOrders = orders.filter((order) => order._id !== id);
          setOrders(remainingOrders);
        }
      });
  };

  return (
    <Container>
      <h2>My Orders {orders.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order Name</TableCell>
              <TableCell align="center">Your Email</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Cancel</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={row.img}
                    style={{ width: "50px", marginRight: "10px" }}
                    alt=""
                  />
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.email} </TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleOrderDelete(row._id)}>
                    <DeleteIcon></DeleteIcon>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default MyOrders;
