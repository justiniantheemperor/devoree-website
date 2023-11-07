/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { Box, Container, Grid, Typography } from "@mui/material";

// Material Kit 2 React components
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";

// Images
import projectImg from "assets/images/headshots/happy.jpg";

function CurrentProject() {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        lg={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        lg={5}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
        }}
      >
        <Box px={3} py={{ xs: 2, sm: 6 }}>
          <Typography variant="h2" mb={1}>
            Current Project
          </Typography>
          <Typography variant="h4" mb={1}>
            House of Desires - BYU
          </Typography>
          <Typography variant="h4" mb={1}>
            Role: Ana
          </Typography>
          <Typography variant="body1" color="text" mb={2}>
            Devoree is from Orange County, California. She completed her
            training in April 2024, receiving a BFA in Acting from Brigham Young
            University.
          </Typography>
          <MKButton variant="gradient" color="info">
            Learn More
          </MKButton>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        lg={4}
        position="relative"
        width="100%"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          alt="Devoree Headshot"
          src={projectImg}
          height="20rem"
        />
      </Grid>
    </Grid>
  );
}

export default CurrentProject;
