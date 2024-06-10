import React, { useEffect, useState } from "react";
import "./BookSection.css";
import { getAllCars } from "../services/CarService";
import SearchModal from "../components/SearchModal";

const BookSection = () => {
  const [Car, setCar] = useState([]);
  const [formData, setFormData] = useState({
    carType: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    dropoffDate: "",
  });
  const [formError, setFormError] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [carData, setCarData] = useState("");

  const TunisiaCities = [
    "Ariana",
    "Beja",
    "Ben Arous",
    "Bizerte",
    "Gabes",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Kef",
    "Mahdia",
    "Manouba",
    "Medenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ];

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

  const isDateValid = (pickupDate, dropoffDate) => {
    const selectedPickupDate = new Date(pickupDate);
    const selectedDropoffDate = new Date(dropoffDate);

    // Get the current UTC date and tomorrow's UTC date
    const currentDateUTC = new Date().setUTCHours(0, 0, 0, 0);
    const tomorrowUTC = new Date(currentDateUTC);
    tomorrowUTC.setDate(tomorrowUTC.getDate() + 1);

    // Convert selected dates to UTC for accurate comparisons
    const selectedPickupDateUTC = selectedPickupDate.setUTCHours(0, 0, 0, 0);
    const selectedDropoffDateUTC = selectedDropoffDate.setUTCHours(0, 0, 0, 0);

    return (
      selectedPickupDateUTC >= currentDateUTC &&
      selectedDropoffDateUTC >= tomorrowUTC &&
      selectedDropoffDateUTC > selectedPickupDateUTC
    );
  };

  const handleFormSubmit = () => {
    const {
      carType,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      dropoffDate,
    } = formData;

    if (
      !carType ||
      !pickupLocation ||
      !dropoffLocation ||
      !pickupDate ||
      !dropoffDate
    ) {
      setFormError("Please fill in all required fields.");
    } else if (!isDateValid(pickupDate, dropoffDate)) {
      setFormError("Invalid date selection. Please choose valid dates.");
    } else {
      setFormError("");

      const selectedCar = Car.find((car) => car.model === carType);
      if (selectedCar) {
        setCarData(selectedCar.image);
      }

      setShowModal(true);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseAlert = () => {
    setFormError("");
  };

  return (
    <div className="book-content">
      <div className="book-content-box">
        <h1 className="mb-5">Book a car</h1>
        {formError && (
          <div className="alert alert-danger" role="alert">
            {formError}
            <i
              type="button"
              className="fas fa-times"
              aria-label="Close"
              onClick={handleCloseAlert}
            ></i>
          </div>
        )}
        <div className="d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-4 resp">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-2">
                <i class="fas fa-car"></i>
                <label>
                  Select Your Car Type <span className="color-span">*</span>
                </label>
              </div>

              <select
                name="carType"
                value={formData.carType}
                onChange={handleInputChange}
              >
                <option value="">Select your car type</option>
                {Car.map((car) => (
                  <option key={car.model} value={car.model}>
                    {car.model}
                  </option>
                ))}
              </select>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-2">
                <i class="fas fa-map-marker-alt"></i>
                <label>
                  Pick-up <span className="color-span">*</span>
                </label>
              </div>
              <select
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleInputChange}
              >
                <option value="">Select your pick up location</option>
                {TunisiaCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-2">
                <i class="fas fa-map-marker-alt"></i>
                <label>
                  Drop-off <span className="color-span">*</span>
                </label>
              </div>
              <select
                name="dropoffLocation"
                value={formData.dropoffLocation}
                onChange={handleInputChange}
              >
                <option value="">Select your drop off location</option>
                {TunisiaCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="d-flex align-items-center gap-4 resp">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-2">
                <i class="fas fa-calendar-alt"></i>
                <label>
                  Pick-up Date <span className="color-span">*</span>
                </label>
              </div>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-2">
                <i class="fas fa-calendar-alt"></i>
                <label>
                  Drop-off Date <span className="color-span">*</span>
                </label>
              </div>
              <input
                type="date"
                name="dropoffDate"
                value={formData.dropoffDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="d-flex align-items-center justify-content-center mt-5">
              <button onClick={handleFormSubmit}>Search</button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <SearchModal
          formData={formData} // Pass the whole formData object as a prop
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          carData={Car}
        />
      )}
    </div>
  );
};

export default BookSection;
