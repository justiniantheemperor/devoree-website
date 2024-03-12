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
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Images
import byu from "assets/images/logos/BYU monogram_white@2x.png";
import csssa from "assets/images/logos/csssa-logo-white.png";
import ocreg from "assets/images/logos/oc-register-logo-white.png";
import stellaadler from "assets/images/logos/stella-adler-logo-white.png";
import utba from "assets/images/logos/utah-theater-blogger.png";



function Brands() {
  return (
    <MKBox component="section" pt={3}>
        <Grid container spacing={3} sx={{justifyContent:"center", alignItems:"center"}}>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={byu} alt="Brigham Young University" width="100%" opacity={0.8} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={stellaadler} alt="Stella Adler Acting Studio" width="100%" opacity={0.8} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={utba} alt="Utah Theater Blogger Association" width="100%" opacity={0.8} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={ocreg} alt="OC Register" width="100%" opacity={0.8} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={csssa} alt="California State Summer School for the Arts" width="100%" opacity={0.8} />
          </Grid>
        </Grid>
    </MKBox>
  );
}

export default Brands;
