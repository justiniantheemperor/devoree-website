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
import Header from "pages/Home/sections/Header";
import About from "pages/Home/sections/About";
import Reels from "pages/Home/sections/Reels";
import Resume from "pages/Home/sections/Resume";
import Gallery from "pages/Home/sections/Gallery";
import Contact from "pages/Home/sections/Contact";
import Footer from "pages/Home/sections/Footer";

// Routes
import footerRoutes from "footer.routes";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Reels />
      <MKBox
        component="section"
        position="relative"
        py={6}
        px={{ xs: 2, lg: 0 }}
        mx={-2}
        sx={{
          background: "linear-gradient(195deg, #42424a, #191919, #42424a, #191919)",
        }}
      >
        <Resume />
        <Gallery />
        <Contact />
      </MKBox>
      <Footer content={footerRoutes} />
    </>
  );
}

export default Home;
