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
import { Box, Container, Grid, CardMedia } from "@mui/material";

// Material Kit 2 React components
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

// Video
  const recentProject = "https://www.youtube.com/embed/yTWxktwk404?si=uY2NsrK3YVLv1oDH";


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
            Recent Projects
          </MKTypography>
          <MKTypography variant="h5" color="white" opacity={0.9} mb={1}>
            House of Desires - BYU
          </MKTypography>
          <MKTypography variant="h5" color="white" opacity={0.9} mb={1}>
            Role: Ana
          </MKTypography>
          <MKTypography variant="body2" color="white" opacity={0.8} mb={2} textAlign="justify">            
          “Devoree Ellis <strong>stole each moment she was on stage...</strong>.
            I was impressed how she managed to have such a{" "}
            <strong>distinct range of suited reactions</strong> in each moment...
            Ana is manipulative and Ellis was <strong>eager to play tactics</strong>{" "}
            that would impact those around her.{" "}
            <strong>Ana owned the story and Ellis owned the stage</strong>.”
          </MKTypography>
          <MKTypography variant="body2" color="white" opacity={0.8} mb={2} textAlign="right">
            <i> - The Utah Theater Bloggers</i>
            </MKTypography>
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
        <CardMedia
          component="iframe"
          src={recentProject}
          allowFullScreen="allowfullscreen"
          sx={{ height: "20rem", width: "100%" }}
        />
      </Grid>
    </Grid>
  );
}

export default CurrentProject;
