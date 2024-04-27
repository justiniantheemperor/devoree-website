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
              <MKTypography variant="body2" color="white" opacity={0.9} mb={2}>
                Originally from Southern California, Devoree Ellis is a recent
                BFA Acting graduate from BYU who is exploding with excitement
                and thrilled to be moving to New York. While she loves stage
                acting, classical acting, musical theater, voiceover, and
                working as a freelance dialect coach, she has found her home in
                Acting for Film & TV. Since studying last year in the Acting for
                Film & TV Intensive at the Stella Adler Art of Acting Studio in
                LA for a rigorous 5 weeks (and since binging all of The Office
                and The Marvel Infinity Saga during COVID), she’s been
                completely smitten with film acting. Since signing with the SLC
                Agency TMG last year, she has been having the time of her life
                on a variety of film sets and can’t get enough.
              </MKTypography>
              <MKTypography variant="body2" color="white" opacity={0.9} mb={2}>
                Favorite stage credits include: Ana in House of Desires, Matilda in Matilda the
                Musical, Pamela/Annabella/Margaret in The 39 Steps, Gloria in
                Wait Until Dark, Smee in Peter and the Starcatcher, Puck in A
                Midsummer Night’s Dream, and Dorothy Gale in The Wizard of Oz,
                among others.
              </MKTypography>
              <MKTypography variant="body2" color="white" opacity={0.9} mb={2}>
                She also earned the title of "Orange County Actor
                of the Year" from The Orange County Register, among various
                other accolades in acting, playwriting, comedy, and musical
                theater.
              </MKTypography>
              <MKTypography variant="body2" color="white" opacity={0.9} mb={2}>
                Devoree’s long term goal is to have at least two
                Oscars, two corgis, and to own a mansion in Malibu with her best
                friend and partner, Justin, acting her face off and
                collaborating with the best artists in the industry by day, and
                working as a very posh, (yet kind,) food critic by night.
                <br></br>
                Instagram: @devoree_
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
