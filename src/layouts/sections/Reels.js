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

import { Container, Grid, CardMedia } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const actingReel = "https://www.youtube.com/embed/8-YPG6Yfv6c?si=tmJ1Nc9h2yBKp0Ax";
const coffeeReel ="https://www.youtube.com/embed/4UdBxE6Gf-4?si=nGqSH9-3q2fwxO7H";
const dialectReel = "https://www.youtube.com/embed/pFkR6ogSKwE?si=gLnqGmIHwb3KfqRN";

function Reels() {
  return (
    <MKBox
      component="section"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      sx={{ background: "linear-gradient(195deg, #5C1E2C, #1F0A0F)"}}
    >
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Grid item xs={12} md={8} sx={{ mb: 6, textAlign: "center" }}>
            <MKTypography variant="h3" color="white">
              Acting Reels
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There's nothing I really wanted to do in life that I wasn't able
              to get good at. That's my skill.
            </MKTypography>
          </Grid>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={actingReel}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={dialectReel}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={coffeeReel}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Reels;