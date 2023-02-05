import React from "react";
import img1 from "../src/images/illustration-editor-desktop.svg";
import Common from "./Common";

const Intro = () => {
  return (
    <>
      <h1 className="heading">Designed for the future</h1>
      <div className="intro_des">
        <div className="des">
          <Common
            heading="Intoducing an extensible editor"
            para="Blogr featues an exceedignly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such  as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
          />
          <Common
            heading="Robust content management"
            para="Flexible content management enables users to easily move through posts. Increase the usabiulity of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control."
          />
        </div>
        <img src={img1} alt="image" />
      </div>
    </>
  );
};

export default Intro;
