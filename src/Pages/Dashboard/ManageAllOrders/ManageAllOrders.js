import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const url = "http://localhost:4000/purchaseProducts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const handleOnStatus = (status, id) => {
    let modifyOrders = [];
    allOrders.forEach((order) => {
      if (order._id === id) {
        order.status = status;
      }
      modifyOrders.push(order);
    });
    setAllOrders(modifyOrders);
    const modifyStatus = {
      id,
      status,
    };
    fetch("http://localhost:4000/purchaseProduct", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(modifyStatus),
    });
  };

  return (
    <Container>
      <h2>My Orders</h2>
      <TableContainer sx={{ minHeight: 450 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order Name</TableCell>
              <TableCell align="center">Client Email</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allOrders.map((row) => (
              <TableRow
                key={row._id}
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
                <TableCell align="center">
                  <select
                    name="status"
                    onChange={(e) => handleOnStatus(e.target.value, row._id)}
                    defaultValue={row.status}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Done">Done</option>
                  </select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageAllOrders;
