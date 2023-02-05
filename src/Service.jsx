import React from "react";
import img4 from "../src/images/illustration-laptop-desktop.svg";
import Common from "./Common";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="service_des">
        <div className="service_des_layer">
          <img src={img4} alt="image" />
          <div className="des">
            {Sdata.map((val, ind) => {
              return <Common key={ind} heading={val.heading} para={val.para} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
