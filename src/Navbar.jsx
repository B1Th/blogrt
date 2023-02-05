import React from "react";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <>
      <div className="nav_bar">
        <a href="#landing" className="home">
          Blogr
        </a>
        <ol>
          <li>
            <a href="#intro_section">Product</a>
          </li>
          <li>
            <a href="#mobile_section">Company</a>
          </li>
          <li>
            <a href="#footer">Connect</a>
          </li>
        </ol>
        <div className="signin_up">
          <Button variant="elivated" size="small">
            Login
          </Button>
          <Button variant="contained" size="small">
            Signup
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
