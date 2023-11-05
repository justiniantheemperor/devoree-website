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

// Images
import bgImage from "assets/images/headshots/main.jpg";

function About() {
  return (
    <Box py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <Box
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
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
                  justifyContent:"center",
                }}
              >
                <Box
                  component="img"
                  alt="Devoree Headshot"
                  src={bgImage}
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
                  <Typography variant="h2" mb={1}>
                    About Me
                  </Typography>
                  <Typography variant="body1" color="text" mb={2}>
                    Devoree is from Orange County, California. She completed her
                    training in April 2024, receiving a BFA in Acting from
                    Brigham Young University.
                  </Typography>
                  <MKButton variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
