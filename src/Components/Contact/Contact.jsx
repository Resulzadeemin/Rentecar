import React from "react";
import "./Contact.css";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Contact() {
  return (
    <div className="container">
      <div id="contact">
        <h3>Contact</h3>
        <h2>Contact</h2>
      </div>

      <div className="contact-display">
        <div>
          <div data-aos="fade-up" className="contact-content">
            <h2>If you got any questions please do not hesitate to send us amessage</h2>
          </div>
          <div data-aos="fade-down" className="contact-social">
            <FaFacebookF type="fbk" className="contact-socialNet" />
            <IoLogoGoogleplus type="goo" className="contact-socialNet" />
            <AiOutlineTwitter type="twt" className="contact-socialNet" />
            <FaLinkedinIn type="lnk" className="contact-socialNet" />
          </div>
        </div>

        <div data-aos="fade-down" className="contact-inp-pad">
          <div className="contact-form">
            <input placeholder="Name.." type="text" />
          </div>
          <div className="contact-form">
            <input placeholder="Email.." type="email" />
          </div>
          <div className="contact-form">
            <input placeholder="Phone.." type="number" />
          </div>
          <div className="contact-form">
            <textarea placeholder="Message.." cols="40" rows="5"></textarea>
          </div>
          <div className="contact-btn">
            <button type="submit">send messages</button>
          </div>
        </div>
      </div>

      <div className="contact-iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.42999643055!2d49.71487488757584!3d40.39450797931408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2z0JHQsNC60YMsINCQ0LfQtdGA0LHQsNC50LTQttCw0L0!5e0!3m2!1sru!2s!4v1648209494938!5m2!1sru!2s"
          width="100%"
          height="500"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
