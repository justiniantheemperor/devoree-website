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
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import Featuring from "pages/Home/sections/Featuring";
import CurrentProject from "pages/Home/sections/CurrentProject";

// Images
import aboutMe from "assets/images/graphics/main.jpg";

function About() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            lg={5}
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
              src={aboutMe}
              height="30rem"
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={7}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
            }}
          >
            <Box px={3} py={{ xs: 2, sm: 6 }}>
              <MKTypography variant="h1" color="white" mb={1}>
                About Me
              </MKTypography>
              <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
                Devoree is from Orange County, California. She completed her
                training in April 2024, receiving a BFA in Acting from Brigham
                Young University.
              </MKTypography>
              <MKButton variant="gradient" color="info">
                Send Message
              </MKButton>
            </Box>
          </Grid>
        </Grid>
        <Featuring />
        <CurrentProject />
      </Container>
    </MKBox>
  );
}

export default About;
