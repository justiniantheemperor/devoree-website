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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// About Us page sections
import Header from "layouts/sections/Header";
import About from "layouts/sections/About";
import Reels from "layouts/sections/Reels";
import Resume from "layouts/sections/Resume";
import Gallery from "layouts/sections/Gallery";
import Contact from "layouts/sections/Contact";
import Footer from "layouts/sections/Footer";

function Index() {
  return (
    <>
      <Header />
      <About />
      <Reels />
      <MKBox
        component="section"
        position="relative"
        px={{ xs: 2, lg: 0 }}
        mx={-2}
        sx={{
          background: "linear-gradient(195deg, #42424a, #191919, #42424a, #191919)",
        }}
      >
        <Resume />
        <Gallery />
        <Contact />
      <Footer/>
      </MKBox>
    </>
  );
}

export default Index;
