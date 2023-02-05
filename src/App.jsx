import { Button } from "@mui/material";
import React from "react";
import Intro from "./Intro";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <div className="landing">
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
      <div className="intro_section">
        <Intro />
      </div>
    </>
  );
};

export default App;
