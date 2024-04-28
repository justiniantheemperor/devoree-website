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

import CommercialReel from "assets/voiceover/Devoree_Ellis_Commercial_Reel_VO.wav";
import AudioBookReel from "assets/voiceover/Devoree_Ellis_AudioBook_Reel_VO.wav";
import NarrationReel from "assets/voiceover/Devoree_Ellis_Narration_Reel_VO.wav";
const AnimationReel = "";


function Voiceovers() {
  return (
    <MKBox
      component="section"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      sx={{ background: "linear-gradient(195deg, #222, #000000)" }}
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
              Voiceover Reels
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Devoree also enjoys recording voiceover reels in her home studio
            </MKTypography>
          </Grid>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <figure>
                <figcaption>Commercial:</figcaption>
                <audio controls src={CommercialReel}></audio>
              </figure>
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <figure>
                <figcaption>Audio Book:</figcaption>
                <audio controls src={AudioBookReel}></audio>
              </figure>
            </Grid>
          </Grid>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <figure>
                <figcaption>Narration / Industrial:</figcaption>
                <audio controls src={NarrationReel}></audio>
              </figure>
            </Grid>
            <Grid item xs={12} lg={6} display="flex" justifyContent="center">
              <figure>
                <figcaption>Animation (coming soon):</figcaption>
                <audio controls src={AnimationReel}></audio>
              </figure>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Voiceovers;
