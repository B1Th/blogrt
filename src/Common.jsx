import React from "react";

const Common = (props) => {
  return (
    <>
      <h1>{props.heading}</h1>
      <p>{props.para}</p>
    </>
  );
};

export default Common;
