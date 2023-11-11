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

import React from "react";

// @mui material components
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  Grow,
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
  const [hovered, setHovered] = React.useState(false);

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
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            height: "25rem",
            "@media (max-width: 770px)": {
                // Adjust the height for screens below 770px
                height: "15rem",
            },
            background: "linear-gradient(180deg, #E7827F, #F9DCDC)",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            "&:hover": {
              background:
                "linear-gradient(180deg, rgba(231, 130, 127, .7), rgba(249, 220, 220, .7))",
              transition: "1s",
              ".MuiCardMedia-root": {
                filter: "brightness(115%)", 
                transform: "scale3d(1.06, 1.06, 1)",
                transition: ".8s",
              },
            },
          }}
        >
          <CardMedia
            className="Media"
            image={resumeGraphic}
            title="Click to download Devoree's Headshot/Resume"
            onClick={onDownload}
            sx={{
              backgroundSize: "contain",
              height: "100%",
              width: "80%",
              marginBottom: "1.5rem",
              display: "flex",
              alignContent: "start",
              justifyContent: "center",

            }}
          ></CardMedia>
          <Grow in={hovered}>
            <Button
              onClick={onDownload}
              title="Download Headshot/Resume"
              sx={{
                height: "10rem",
                width: "10rem",
                position: "absolute",
              }}
            >
              <DownloadIcon
                sx={{
                  height: "100%",
                  width: "100%",
                  color: "#F8DFDD",
                  "&:hover": {
                    color: "#fff",
                    transition: ".3s",
                  },
                }}
              />
            </Button>
          </Grow>
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
