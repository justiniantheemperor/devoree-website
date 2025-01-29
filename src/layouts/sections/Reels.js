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

const demoReel = "https://www.youtube.com/embed/iiJhDAp8ddg?si=WZgoUveGxAfu-NNb";
const comedicReel = "https://www.youtube.com/embed/mzphwC6GO64?si=M5ANFOj3RY6P_ACi";
const dramaticReel = "https://www.youtube.com/embed/8LFtlpzmdPc?si=Jtl7HsWjEVzALj2m";
const comedy_crazystupidlove = "https://www.youtube.com/embed/NlmM458wyzw?si=Nge1ioVORAv5Kezq";
const drama_IandYou = "https://www.youtube.com/embed/YzrZJjdqihs?si=GMAlc40_iCUTwpCj";
const drama_stardust = "https://www.youtube.com/embed/LrWNzn7kOK0?si=PpKG7gGA4AGGOEZ7";
const houseOfDesires = "https://www.youtube.com/embed/yTWxktwk404?si=uY2NsrK3YVLv1oDH";
const shakespeare_juliet = "https://www.youtube.com/embed/3ReNCJr4c0A?si=a5QplMhZaxRYu_vG";
const shakespeare_margaret = "https://www.youtube.com/embed/2TVrK_C61uo?si=b26eyVFSZcO9BeCj";
const singingReel = "https://www.youtube.com/embed/2a10ZG9HwWQ?si=IIySRyV8V_fQeJGr";
const dialectReel = "https://www.youtube.com/embed/kSPljTSwDHE?si=6Mz9yP7R1wl8gGS8";
const fightReel = "https://www.youtube.com/embed/ocxq8HRLtcc?si=N4ks-6DzpmyNRESU";
const shakespeareReel = "https://www.youtube.com/embed/pbK0wRTwCy4?si=8lM8nGqsd_j8fT1T";

const vid1 = demoReel;
const vid2 = singingReel;
const vid3 = shakespeareReel;
const vid4 = comedy_crazystupidlove;
const vid5 = drama_stardust;
const vid6 = houseOfDesires;
const vid7 = drama_IandYou;
const vid8 = dialectReel;
const vid9 = fightReel;
const vid10 = shakespeare_margaret;
const vid11 = shakespeare_juliet;
const vid12 = comedicReel;
const vid13 = dramaticReel;


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
                src={vid1}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={vid2}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={vid3}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={vid4}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={vid5}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={vid6}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={vid7}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={vid8}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={vid9}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={vid10}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={vid11}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={vid12}
                allowFullScreen="allowfullscreen"
                sx={{ height: "20rem", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <CardMedia
                component="iframe"
                src={vid13}
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
