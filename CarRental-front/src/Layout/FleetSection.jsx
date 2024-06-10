import React, { useEffect, useState } from "react";
import "./FleetSection.css";
import { getAllCars } from "../services/CarService";
import { baseUrlImage } from "../services/config";

const FleetSection = () => {
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);
  const [car, setCar] = useState([]);

  async function getCars() {
    try {
      let data = await getAllCars();
      if (data) {
        setCar(data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCars();
  }, []);

  const selectedCar = car[selectedCarIndex] || {}; // Use empty object if car[selectedCarIndex] is undefined

  return (
    <div className="fleet-container">
      <h3>Vehicle Models</h3>
      <h1>Our rental fleet</h1>
      <p>
        Choose from a variety of our amazing vehicles to rent for your next
        adventure or business trip
      </p>
      <div className="fleet-box">
        <div className="d-flex flex-column gap-2">
          {car.map((carItem, index) => (
            <button
              key={index}
              className={`car-button ${
                selectedCarIndex === index ? "selected" : ""
              }`}
              onClick={() => setSelectedCarIndex(index)}
            >
              {carItem.model}
            </button>
          ))}
        </div>
        <div className="carfleet-img">
          {selectedCar.image && (
            <img
              key={selectedCarIndex}
              alt=""
              src={baseUrlImage + selectedCar.image}
            />
          )}
        </div>
        <div className="pick-description">
          <div className="pick-prix">
            <div className="rent-d">
              <span className="price-span">${selectedCar.pricePerDay}</span> /
              rent per day
            </div>
          </div>
          <div className="pick-table">
            {selectedCar.model && (
              <div className="pick-table-col">
                <span className="first-span">Model:</span>
                <span>{selectedCar.model}</span>
              </div>
            )}
            {selectedCar.model && (
              <div className="pick-table-col">
                <span className="first-span">Mark:</span>
                <span>{selectedCar.mark}</span>
              </div>
            )}
            {selectedCar.model && (
              <div className="pick-table-col">
                <span className="first-span">Year:</span>
                <span>{selectedCar.year}</span>
              </div>
            )}
             {selectedCar.model && (
              <div className="pick-table-col">
                <span className="first-span">Doors:</span>
                <span>{selectedCar.door}/5</span>
              </div>
            )}
             {selectedCar.model && (
              <div className="pick-table-col">
                <span className="first-span">AC:</span>
                <span>{selectedCar.ac}/5</span>
              </div>
            )}
             {selectedCar.model && (
              <div className="pick-table-col">
                <span className="first-span">Transmission:</span>
                <span>{selectedCar.transmission}</span>
              </div>
            )}
             {selectedCar.model && (
              <div className="pick-table-col">
                <span className="first-span">Fuel:</span>
                <span>{selectedCar.fuel}</span>
              </div>
            )}
            {/* Add similar checks for other properties */}
          </div>
          <button className="w-100 mt-3 rounded-0 fw-bold fs-5">
            RESERVE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default FleetSection;
