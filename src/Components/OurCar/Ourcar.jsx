import React from "react";
import { useState } from "react";
import "./Ourcar.css";
import car1 from "../img/car-1.jpg";
import car2 from "../img/car-2.jpg";
import car3 from "../img/car-3.jpg";
import car4 from "../img/car-4.jpg";
import car5 from "../img/car-5.jpg";
import car6 from "../img/car-6.jpg";
import car7 from "../img/car-7.jpg";
import car8 from "../img/car-8.jpg";
import car9 from "../img/car-9.jpg";
import car10 from "../img/car-10.jpg";
import car11 from "../img/car-11.jpg";
import car12 from "../img/car-12.jpg";
import car13 from "../img/car-13.jpg";
function Ourcar() {
  const [car, setCar] = useState([  
    { img: car1, model: "Chevrolet", price: 25,details:"Chevrolet Corvette zr1 V10",id:1, },
    { img: car2, model: "Moto", price: 12,details:"JAPON Moto",id:2, },
    { img: car3, model: "SUV", price: 30,details:"Jeep 86",id:3, },
    { img: car4, model: "SUV", price: 35,details:"Range Rover 2.0T",id:4, },
    { img: car5, model: "Mercedes", price: 28,details:"Mercedes CLK 3.0",id:5, },
    { img: car6, model: "Audi", price: 23,details:"Audi A7 3.0T",id:6, },
    { img: car7, model: "Bmw", price: 20,details:"Bmw X6 4.4TwinTurbo",id:7, },
    { img: car8, model: "SUV", price: 30,details:"Jeep Wrangler Engine 3.6l v6",id:8, },
    { img: car9, model: "Bmw", price: 26,details:"Bmw E46",id:9, },
    { img: car10, model: "Mercedes", price: 45,details:"Mercedes A-Class 2T Engine",id:10, },
    { img: car11, model: "Audi", price: 30,details:"Audi Q5 2T",id:11, },
    { img: car12, model: "Mercedes", price: 37,details:"Mercedes GTR Engine 4.0",id:12, },
    { img: car13, model: "Mercedes", price: 55,details:"Mercedes G-Class Engine 4.0",id:13, },
  ]);
  const [selected, setSelected] = useState([
    { img: car1, model: "Chevrolet", price: 25,details:"Chevrolet Corvette zr1 V10",id:1, },
    { img: car2, model: "Moto", price: 12,details:"JAPON Moto",id:2, },
    { img: car3, model: "SUV", price: 30,details:"Jeep 86",id:3, },
    { img: car4, model: "SUV", price: 35,details:"Range Rover 2.0T",id:4, },
    { img: car5, model: "Mercedes", price: 28,details:"Mercedes CLK 3.0",id:5, },
    { img: car6, model: "Audi", price: 23,details:"Audi A7 3.0T",id:6, },
    { img: car7, model: "Bmw", price: 20,details:"Bmw X6 4.4TwinTurbo",id:7, },
    { img: car8, model: "SUV", price: 30,details:"Jeep Wrangler Engine 3.6l v6",id:8, },
    { img: car9, model: "Bmw", price: 26,details:"Bmw E46",id:9, },
    { img: car10, model: "Mercedes", price: 45,details:"Mercedes A-Class 2T Engine",id:10, },
    { img: car11, model: "Audi", price: 30,details:"Audi Q5 2T",id:11, },
    { img: car12, model: "Mercedes", price: 37,details:"Mercedes GTR Engine 4.0",id:12, },
    { img: car13, model: "Mercedes", price: 55,details:"Mercedes G-Class Engine 4.0",id:13, },
  ]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);
  function loadmore() {
    setLoading(false);
    setTimeout(() => {
      setLimit(limit + 3);
      setLoading(true);
    }, 2000);
  }
  function selectCar(cars) {
    let selects = car.filter((e) => {
      return e.model == cars;      
    });
    setSelected(selects);
  }
  function allcar() {
    let allCar = car;
    setSelected(allCar);
  }
  return (
    <div className="our-car-bg-img">
      <div className="container">
        <div id="ourCar">
          <h3>Our car</h3>
          <h2>Our car</h2>
          <div data-aos="fade-up" className="our-car-btn">
            <span type="all" onClick={() => allcar()}>All</span>
            <span onClick={() => selectCar("Chevrolet")}>Chevrolet</span>
            <span onClick={() => selectCar("Moto")}>Moto</span>
            <span onClick={() => selectCar("SUV")}>SUV</span>
            <span onClick={() => selectCar("Bmw")}>Bmw</span>
            <span onClick={() => selectCar("Mercedes")}>Mercedes</span>
            <span onClick={() => selectCar("Audi")}>Audi</span>
          </div>
          <div data-aos="fade-down" className="our-car-img">
            {selected.slice(0, limit).map((car, index) => (
              <div className="our-car-pad-img">
                <img key={index} src={car.img} />
              <div className="our-car-display">
                  <div>
                    <h4>From/Day {car.price}$</h4>
                  </div>
                  <div> 
                    <h6 data-bs-toggle="modal" data-bs-target={"#c"+car.id}>Car Details</h6>
                    <div class="modal fade" id={"c"+car.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><span style={{fontWeight:"600"}}>Car Details</span> , consectetur adipisicing elit error, architecto?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <span>{car.details}</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui debitis explicabo ut dolorum, dignissimos repellat!</p>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="our-car-load-btn">
          {
            limit < car.length &&
          <button style={{ display: selected.length > 3 ? "" : "none" }} type="submit" onClick={loadmore}>
            {loading && <span>Load more</span>}
            {!loading && <><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...</>}
          </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Ourcar;
