import React from "react";
import img1 from "../src/images/illustration-editor-desktop.svg";
import Common from "./Common";
import Sdata from "./Sdata";

const Intro = () => {
  return (
    <>
      <h1 className="heading">Designed for the future</h1>
      <div className="intro_des">
        <div className="intro_des_layer">
          <div className="des">
            {Sdata.map((val, ind) => {
              return <Common key={ind} heading={val.heading} para={val.para} />;
            })}
          </div>
          <img src={img1} alt="image" />
        </div>
      </div>
    </>
  );
};

export default Intro;
