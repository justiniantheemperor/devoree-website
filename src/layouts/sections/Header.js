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
import { Container, Grid, Stack, useMediaQuery } from "@mui/material";
import { HashLink, NavHashLink } from "react-router-hash-link";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/graphics/header.jpg";
import bgImageMobile from "assets/images/graphics/dark.jpg";

//Components
import HeaderNav from "layouts/sections/HeaderNav.js";

function Header() {
  const isSmallScreen = useMediaQuery("(max-width:450px)");

  return (
    <MKBox
      component="header"
      position="relative"
      height="100%"
      minHeight="30rem"
    >
      <HeaderNav />
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="30rem"
        sx={{
          backgroundImage: ({
            palette: { gradients },
            functions: { linearGradient, rgba },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${isSmallScreen ? bgImageMobile : bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={6}
            flexDirection="column"
            justifyContent="center"
          >
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Devoree Ellis
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.9}
              pr={6}
              mr={6}
            >
              Connection • Empathy • Authenticity
            </MKTypography>
            <MKTypography
              variant="body2"
              fontSize="0.9rem"
              color="white"
              opacity={0.7}
              pr={6}
              mr={6}
            >
              Represented by
              <a href="mailto:joshua@litehousemanagement.com"> Litehouse Management</a>
            </MKTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton variant="gradient" color="info">
                <HashLink smooth to={"#contact"}>
                  Contact Me
                </HashLink>
              </MKButton>
              <MKButton variant="text" color="white">
                <HashLink smooth to={"#reels"}>
                  View Reels
                </HashLink>
              </MKButton>
            </Stack>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Header;
