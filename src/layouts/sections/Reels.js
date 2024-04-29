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

const demoReel = "https://www.youtube.com/embed/LwKTurcpgUQ?si=oFjyZrB5S_QT_Gc_";
const comedicReel = "https://www.youtube.com/embed/mzphwC6GO64?si=M5ANFOj3RY6P_ACi";
const dramaticReel = "https://www.youtube.com/embed/8LFtlpzmdPc?si=Jtl7HsWjEVzALj2m";
const comedy_crazystupidlove = "https://www.youtube.com/embed/NlmM458wyzw?si=Nge1ioVORAv5Kezq";
const drama_IandYou = "https://www.youtube.com/embed/vGWNORwO4jk?si=8bsOKrmkXpxPz4dp";
const drama_stardust = "https://www.youtube.com/embed/MjAJ9ypiXJk?si=SZmBj-CR5GopbpYy";
const houseOfDesires = "https://www.youtube.com/embed/pqAHSRs867g?si=HmjQEQD_H0jQa9I7";
const shakespeare_juliet = "https://www.youtube.com/embed/3ReNCJr4c0A?si=a5QplMhZaxRYu_vG";
const shakespeare_margaret = "https://www.youtube.com/embed/2TVrK_C61uo?si=b26eyVFSZcO9BeCj";
const singingReel = "https://www.youtube.com/embed/N4X-R1ghe6g?si=vhNf3UTnP4nWAV7y";
const dialectReel = "https://www.youtube.com/embed/pFkR6ogSKwE?si=ZWimUOmoIGVmYGSy";
const fightReel = "https://www.youtube.com/embed/0B3bKc9M75g?si=ODambE5Gs3V26zrt";

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
            {/* <MKTypography variant="body2" color="white" opacity={0.8}>
            </MKTypography> */}
          </Grid>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={demoReel}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={comedicReel}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={dramaticReel}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={comedy_crazystupidlove}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={drama_IandYou}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={drama_stardust}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={houseOfDesires}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={shakespeare_juliet}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={shakespeare_margaret}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={singingReel}
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
                src={fightReel}
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
