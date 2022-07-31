import React from "react";
import "./Blog.css";
import car1 from "../img/car-1.jpg";
import car2 from "../img/car-2.jpg";
import car3 from "../img/car-3.jpg";
import HappyClients from "../HappyClients/HappyClients";
function Blog() {
  return (
    <div className="container">
      <div id="blog">
        <h3>Blog</h3>
        <h2>Blog</h2>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="blog-content">
        <div className="blog-img-title">
            <img src={car1} alt="car" />
            <h4>JULY. 3, 2020 ADMIN 3</h4>
            <h2>Why Lead Generation is Key for Business Growth</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
        <div className="blog-img-title"> 
            <img src={car2} alt="car" />
            <h4>MAY. 24, 2018 ADMIN 2</h4>
            <h2>Why Lead Generation is Key for Business Growth</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
        <div className="blog-img-title">
            <img src={car3} alt="car" />
            <h4>AUGUST. 9, 2019 ADMIN 1</h4>
            <h2>Why Lead Generation is Key for Business Growth</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
      </div>
      <HappyClients />
    </div>
  );
}

export default Blog;
