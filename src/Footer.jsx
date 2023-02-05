import React from "react";

const Footer = () => {
  return (
    <>
      <h1>Blogr</h1>
      <div className="footer_content">
        <div className="footer_links_1">
          <div className="footer_links_heading">Product</div>
          <ol>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ol>
        </div>
        <div className="footer_links_2">
          <div className="footer_links_heading">Company</div>
          <ol>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ol>
        </div>
        <div className="footer_links_3">
          <div className="footer_links_heading">Connect</div>
          <ol>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Footer;
