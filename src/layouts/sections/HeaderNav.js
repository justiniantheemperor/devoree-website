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
import { useState } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/graphics/dark.jpg";
import MenuDropDown from "./MenuDropDown";
import InstagramButton from "./InstagramButton";
import YouTubeButton from "./YoutubeButton";

function HeaderNav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
      <Container>
        <Grid container flexDirection="row" alignItems="center">
          <MKTypography
            variant="button"
            color="white"
            fontWeight="regular"
            py={0.8125}
            mr={2}
          >
            <HashLink smooth to={"#"}>
              Devoree Ellis
            </HashLink>
          </MKTypography>

          <MenuDropDown />

          {/* Centered Links */}
          <MKBox
            component="ul"
            display={{ xs: "none", lg: "flex" }}
            p={0}
            my={0}
            mx="auto"
            sx={{ listStyle: "none" }}
          >
            {/* About */}
            <MKBox component="li">
              <MKTypography
                variant="button"
                color="white"
                fontWeight="regular"
                p={1}
              >
                <HashLink smooth to={"#about"}>
                  About
                </HashLink>
              </MKTypography>
            </MKBox>
            {/* Reels */}
            <MKBox component="li">
              <MKTypography
                variant="button"
                color="white"
                fontWeight="regular"
                p={1}
              >
                <HashLink smooth to={"#reels"}>
                  Reels
                </HashLink>
              </MKTypography>
            </MKBox>
            {/* Voiceover */}
            <MKBox component="li">
              <MKTypography
                variant="button"
                color="white"
                fontWeight="regular"
                p={1}
              >
                <HashLink smooth to={"#voiceover"}>
                  Voiceover
                </HashLink>
              </MKTypography>
            </MKBox>
            {/* Resume */}
            <MKBox component="li">
              <MKTypography
                variant="button"
                color="white"
                fontWeight="regular"
                p={1}
              >
                <HashLink smooth to={"#resume"}>
                  Resume
                </HashLink>
              </MKTypography>
            </MKBox>
            {/* Gallery */}
            <MKBox component="li">
              <MKTypography
                variant="button"
                color="white"
                fontWeight="regular"
                p={1}
              >
                <HashLink smooth to={"#gallery"}>
                  Gallery
                </HashLink>
              </MKTypography>
            </MKBox>
            {/* Testimonials */}
            <MKBox component="li">
              <MKTypography
                variant="button"
                color="white"
                fontWeight="regular"
                p={1}
              >
                <HashLink smooth to={"#testimonials"}>
                  Testimonials
                </HashLink>
              </MKTypography>
            </MKBox>
          </MKBox>

          {/* Social Buttons */}
          <MKBox
            component="ul"
            display={{ xs: "none", lg: "flex" }}
            p={0}
            m={0}
            sx={{ listStyle: "none" }}
          >
            <MKBox component="li" p={1}>
              <InstagramButton />
            </MKBox>
            <MKBox component="li" p={1}>
              <YouTubeButton/>
            </MKBox>
          </MKBox>
          <MKBox
            component="ul"
            display={{ xs: "none", lg: "flex" }}
            p={0}
            m={0}
            sx={{ listStyle: "none" }}
          >
            <MKBox component="li">
              <MKButton
                variant="gradient"
                color="info"
                sx={{ marginLeft: "20px" }}
              >
                <HashLink smooth to={"#contact"}>
                  Contact Me
                </HashLink>
              </MKButton>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default HeaderNav;
