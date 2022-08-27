import AboutUs from "./Landing page/AboutUs";
// import WhyUs from "./Landing page/WhyUs";
import Footer from "./Landing page/Footer";
import Hero from "./Landing page/Hero";
import Services from "./Landing page/Services";
// import Testimonials from "./Landing page/Testimonials";
import { Box } from "@chakra-ui/react";
import React from "react";

import Navbar from "./NavBar";

function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      {/* <Testimonials />
      <WhyUs /> */}
      <Footer />
    </Box>
  );
}

export default Home;
