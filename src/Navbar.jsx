import React from "react";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <>
      <div className="nav_bar">
        <a href="" className="home">
          Blogr
        </a>
        <ol>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Connect</a>
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
