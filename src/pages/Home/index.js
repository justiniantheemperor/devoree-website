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

// About Us page sections
import Header from "pages/Home/sections/Header";
import About from "pages/Home/sections/About";
import Reels from "pages/Home/sections/Reels";
import Gallery from "pages/Home/sections/Gallery";
// import Contact from "pages/Home/sections/Contact";
import Footer from "pages/Home/sections/Footer";

// Routes
import footerRoutes from "footer.routes";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Reels />
      <Gallery />
      {/* <Contact /> */}
      <Footer content={footerRoutes} />
    </>
  );
}

export default Home;
