import React, { useEffect, useState } from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import "../styles/Models.css";
import { Link } from "react-router-dom";
import { getAllCars } from "../services/CarService";
import { baseUrlImage } from "../services/config";
const Models = () => {
 
  const [Car, setCar] = useState([]);

  async function getCars() {
    try {
      let data = await getAllCars();
      if (data) {
        setCar(data);
      }
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  }

  useEffect(() => {
    getCars();
  }, []);

  

  return (
    <div>
      <Navbar />
      <div className="models-section">
        <h1>Models</h1>
        <p>
          <Link to="/">
            <span>Home</span>
          </Link>
          / Cars Models
        </p>
        <div className="models-main">
          <div className="macars-container">
            {Car.map((car, index) => (
              <div key={car._id} className="car-box">
                <img src={baseUrlImage + car.image} alt={car.model} />

                <div className="d-flex py-3 px-4 flex-column bg-white gap-3">
                  <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center">
                      <h1>{car.model}</h1>
                      <h3>${car.pricePerDay}</h3>
                    </div>
                    <div className="d-flex justify-content-between py-0 align-items-center">
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <i class="fas fa-car-side"></i>
                      <h5 className="m-0">{car.mark}</h5>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <h5 className="m-0">{car.door}/5</h5>
                      <i class="fas fa-car-side"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <i class="fas fa-car-side"></i>
                      <h5 className="m-0">{car.transmission}</h5>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <h5 className="m-0">{car.fuel} </h5>
                      <i class="fas fa-car-side"></i>
                    </div>
                  </div>
                  <div>
                    <hr />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <button>Book Ride</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="banner-about">
        <h2>Book a car by getting in touch with us</h2>
        <div className="d-flex gap-3">
          <i class="fas fa-phone-alt"></i>{" "}
          <h3 className="m-0">(123) 456-7869</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Models;
