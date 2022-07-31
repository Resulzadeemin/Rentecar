import React from "react";
import Form from "../Form/Form";
import "./Haeder.css";
function Header() {
  return (
    <div>
      <div className="header-bg">
        <div className="container">
          <div className="header-flex">
            <div data-aos="fade-right" className="header-content">
              <h1>Now It's easy for you rent a car</h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts
              </p>
            </div>
              <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
