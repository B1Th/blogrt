import { Button } from "@mui/material";
import React from "react";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Common from "./Common";
import img2 from "../src/images/illustration-phones.svg";
import img3 from "../src/images/bg-pattern-circles.svg";
import Service from "./Service";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <div className="landing" id="landing">
        <Navbar />
        <div className="landing_des">
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div className="start">
            <Button variant="contained">Start for Free</Button>
            <Button variant="contained">Learn More</Button>
          </div>
        </div>
      </div>

      <div className="intro_section" id="intro_section">
        <Intro />
      </div>

      <div className="mobile_section" id="mobile_section">
        <div className="mobile_img">
          <img src={img2} alt="Mobile image" className="front_img" />
          {/* <img src={img3} alt="Pattern image" className="back_img" /> */}
        </div>
        <div className="mobile_des">
          <Common
            heading="State of the Art Infrastructure"
            para="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
          />
        </div>
      </div>

      <div className="service_section" id="service_section">
        <Service />
      </div>

      <div className="footer" id="footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
