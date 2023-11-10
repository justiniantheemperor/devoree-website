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
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";

// Material Kit 2 React components
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import resumeGraphic from "assets/images/graphics/HR-graphic.png";
import Icon from "assets/theme/components/icon";

import resume from "assets/files/Devoree-Ellis-HR.pdf";

function Resume() {
  const onDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Devoree-Ellis-HR.pdf";
    link.click();
    window.open(resume, "_blank");
  };

  return (
    <Container>
      <Grid item xs={12} md={8} sx={{ mb: 2, textAlign: "center" }}>
        <MKTypography variant="h3" color="white">
          Resume
        </MKTypography>
        <MKTypography variant="body2" color="white" opacity={0.8}>
          Click on the image below to view and download my resume and headshot.
        </MKTypography>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{ mb: 2, display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            background: "linear-gradient(180deg, #E7827F, #F9DCDC)",
            alignItems: "center",
            "&:hover": {
              ".MuiCardMedia-root": {
                transform: "scale3d(1.06, 1.06, 1)",
              },
            },
          }}
        >
          <CardMedia
            className="Media"
            component="img"
            image={resumeGraphic}
            title="Click below to download Devoree's Headshot/Resume"
            onClick={onDownload} 
            sx={{
              width: "70%",
              marginBottom: "1.5rem",
            }}
          ></CardMedia>
        </Card>
      </Grid>
      <Grid item xs={12} md={8} sx={{ mb: 6, textAlign: "center" }}>
        <MKButton onClick={onDownload} variant="gradient" color="info">
          <DownloadIcon></DownloadIcon>Download H/R
        </MKButton>
      </Grid>
    </Container>
  );
}

export default Resume;
