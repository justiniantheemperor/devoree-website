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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <MKBox>
      <Container>
        <MKBox>
          <Grid container spacing={3}>
            <Grid xs={12} sx={{ textAlign: "center", marginTop: "12px" }}>
              <MKTypography fontWeight="regular" color="white" opacity={0.7}>
                Website designed by{" "}
                <a
                  href="https://justiniantheemperor.github.io/"
                  target="_blank"
                >
                  Justin Ellis
                </a>
              </MKTypography>
            </Grid>
            <Grid xs={12} sx={{ textAlign: "center", paddingTop: "0px" }}>
              <MKTypography
                variant="button"
                color="white"
                fontWeight="lighter"
                fontSize="small"
                opacity={0.7}
              >
                All rights reserved. Copyright &copy; {date} Material Kit by
                Creative Tim.
              </MKTypography>
            </Grid>
          </Grid>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default Footer;
