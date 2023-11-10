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
import { Box, Container, Grid } from "@mui/material";

// Material Kit 2 React components
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

// Images
import projectImg from "assets/images/graphics/2024-house-of-desires.jpg";

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
          <MKTypography variant="h3" color="white" mb={1}>
            Current Project
          </MKTypography>
          <MKTypography variant="h5"  color="white" opacity={0.9}  mb={1}>
            House of Desires - BYU
          </MKTypography>
          <MKTypography variant="h5"  color="white" opacity={0.9}  mb={1}>
            Role: Ana
          </MKTypography>
          <MKTypography variant="body2" color="white" opacity={0.8} mb={2}>
            Devoree is from Orange County, California. She completed her
            training in April 2024, receiving a BFA in Acting from Brigham Young
            University.
          </MKTypography>
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
