import React from "react";
import "./HappyClients.css";
import happyClient3 from "../img/hap-3.jpg"
import happyClient2 from "../img/hap-2.jpg"
import happyClient1 from "../img/hap-1.jpg"
function HappyClients() {
  return (
    <div>
      <div id="happyClients">
        <h3>Happy Clients</h3>
        <h2>Happy Clients</h2>
      </div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img style={{height:"70vh"}} src={happyClient1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img style={{height:"70vh"}} src={happyClient2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img style={{height:"70vh"}} src={happyClient3} class="d-block w-100" alt="..." />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
        </div>
    </div>
  );
}

export default HappyClients;
