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
import { HashLink, NavHashLink } from "react-router-hash-link";

import Brands from "layouts/sections/Brands";
import CurrentProject from "layouts/sections/CurrentProject";

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
            <Box px={4} py={{ xs: 2, sm: 6 }}>
              <MKTypography variant="h1" color="white" mb={1}>
                About Me
              </MKTypography>
              <MKTypography variant="body2" color="white" opacity={0.9} mb={2}  textAlign="justify">
                Devoree Ellis is a recent BFA Acting graduate (BYU) originally
                from Southern California. While she loves being on stage (plays,
                classical texts, musical theater, you name it), doing voiceover
                work, and being a freelance dialect coach, she has found her
                home in acting for film & TV. She’s earned the title “Orange
                County Actor of the Year'' from <i>The Orange County Register</i>,
                among various other accolades in acting, playwriting, comedy,
                and musical theater.
              </MKTypography>
              <MKButton variant="gradient" color="info">
              <HashLink smooth to={"#contact"}>
                  Send Message
                </HashLink>
              </MKButton>
            </Box>
          </Grid>
        </Grid>
        <Brands />
        <CurrentProject />
      </Container>
    </MKBox>
  );
}

export default About;
