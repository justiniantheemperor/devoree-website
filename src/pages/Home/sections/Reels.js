import { Typography, Container, Grid, CardMedia } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const actingReel = "https://www.youtube.com/embed/8-YPG6Yfv6c?si=tmJ1Nc9h2yBKp0Ax";
const coffeeReel ="https://www.youtube.com/embed/4UdBxE6Gf-4?si=nGqSH9-3q2fwxO7H";
const dialectReel = "https://www.youtube.com/embed/pFkR6ogSKwE?si=gLnqGmIHwb3KfqRN";

function Reels() {
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
