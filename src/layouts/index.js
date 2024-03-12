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

import * as React from "react";
import {
  Link as ScrollLink,
  Events,
  animateScroll as scroll,
} from "react-scroll";

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
  window.addEventListener("load", () => {
    const sections = document.querySelectorAll("section[id]");

    document.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top==0) {
          const location = window.location.toString().split("#")[0];
          history.replaceState(null, null, location);
        }
        else if (rect.top > 0 && rect.top < 150) {
          const location = window.location.toString().split("#")[0];
          history.replaceState(null, null, location + "#" + section.id);
        }
      });
    });
  });

  return (
    <>
      <section id="home">
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="reels">
        <Reels />
      </section>
      <MKBox
        component="section"
        position="relative"
        px={{ xs: 2, lg: 0 }}
        mx={-2}
        sx={{
          background:
            "linear-gradient(195deg, #42424a, #191919, #42424a, #191919)",
        }}
      >
        <section id="resume">
          <Resume />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </MKBox>
    </>
  );
}

export default Index;
