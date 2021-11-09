import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import missionImg from "../../../Images/mission.png";
import money from "../../../Images/Icons/money.png";
import like from "../../../Images/Icons/like.png";
import setting from "../../../Images/Icons/setting.png";

const Mission = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ textAlign: "center", my: 2 }}>
        Mission
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h5">
            Rolls Royce Provide Best Automotive Experience
          </Typography>
          <Box sx={{ my: 2 }}>
            <Box style={{ display: "flex" }} sx={{ my: 2 }}>
              <img style={{ width: 50 }} src={money} alt="" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6">In House Finance</Typography>
                <Typography>
                  We are open to offering you in house <br /> financing to save
                  you money!
                </Typography>
              </Box>
            </Box>
            <Box style={{ display: "flex" }} sx={{ my: 2 }}>
              <img style={{ width: 50 }} src={like} alt="" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6">Trusted Car Dealer</Typography>
                <Typography>
                  We are open to offering you in house <br /> financing to save
                  you money!
                </Typography>
              </Box>
            </Box>
            <Box style={{ display: "flex" }} sx={{ my: 2 }}>
              <img style={{ width: 50 }} src={setting} alt="" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6">Service & Maintenance</Typography>
                <Typography>
                  We are open to offering you in house <br /> financing to save
                  you money!
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img src={missionImg} style={{ width: "100%" }} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mission;
