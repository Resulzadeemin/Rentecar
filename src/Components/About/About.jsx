import React from "react";
import "./About.css"
import { IoMdSettings } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { RiReservedLine } from "react-icons/ri";
import { MdEmojiTransportation } from "react-icons/md";
function About() {
  return (
    <div className="container">
      <div id="about">
        <h3>OUR SERVICE</h3>
        <h2>OUR SERVICE</h2>
      </div>
      <div className="our-service">
        <div data-aos="zoom-out-right" className="service-content">
          <h2><IoMdSettings className="service-icon" />24/7 Car Support</h2>
          <p>A small river named Duden flows by their place and supplies it with you</p>
        </div>
        <div data-aos="zoom-out-right" className="service-content">
          <h2><MdLocationOn className="service-icon" />Lots of location</h2>
          <p>A small river named Duden flows by their place and supplies it with you</p>
        </div>
        <div data-aos="zoom-out-left" className="service-content">
          <h2><RiReservedLine className="service-icon" />Reservation</h2>
          <p>A small river named Duden flows by their place and supplies it with you</p>
        </div>
        <div data-aos="zoom-out-left" className="service-content">
          <h2><MdEmojiTransportation className="service-icon" />Rental Cars</h2>
          <p>A small river named Duden flows by their place and supplies it with you</p>
        </div>
      </div>
    </div>
  );
}

export default About;
