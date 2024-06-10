import React from "react";
import "./SearchModal.css";
import { baseUrlImage } from "../services/config";
import PersonalInformationForModal from "./PersonalInformationForModal";
const SearchModal = ({ formData, showModal, handleCloseModal, carData }) => {
  const selectedCar = carData.find((car) => car.model === formData.carType);
  const handleReserveNow = (formData) => {
    // Perform the reservation process here using the formData
    // For now, let's just close the modal
    handleCloseModal();
  };
  return (
    <div>
      {showModal && <div className="modal-backdrop"></div>}
      <div
        className={`modal ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog custom-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">COMPLETE RESERVATION</h5>
              <i
                className="fas fa-times"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              ></i>
            </div>
            <div className="modal-message">
              <h5 className="d-flex gap-2 align-items-center mb-3">
                <i class="fas fa-info-circle"></i>Upon completing this
                reservation enquiry, you will receive:
              </h5>
              <p>
                Your rental voucher to produce on arrival at the rental desk and
                a toll-free customer support number.
              </p>
            </div>
            <div className="modal-body">
              <div>
                <h5 className="title-header">Location & Date</h5>
                <p>
                  <div className="d-flex align-items-center gap-2">
                    <i class="fas fa-map-marker-alt"></i>
                    <strong>Pick-up Location:</strong>
                  </div>
                  <p className="info-cont">{formData.pickupLocation}</p>
                </p>
                <p>
                  <div className="d-flex align-items-center gap-2">
                    <i class="fas fa-map-marker-alt"></i>
                    <strong>Drop-off Location:</strong>
                  </div>
                  <p className="info-cont">{formData.dropoffLocation}</p>
                </p>
                <p>
                  <div className="d-flex align-items-center gap-2">
                    <i class="fas fa-calendar-alt"></i>
                    <strong>Pick-Up Date :</strong>
                  </div>
                  <p className="info-cont">{formData.pickupDate}</p>
                </p>
                <p>
                  <div className="d-flex align-items-center gap-2">
                    <i class="fas fa-calendar-alt"></i>
                    <strong>Drop-Off Date :</strong>
                  </div>
                  <p className="info-cont">{formData.dropoffDate}</p>
                </p>
              </div>
              <div className="car-cc">
                <h5>
                  Car - <span>{formData.carType}</span>
                </h5>
                {selectedCar && (
                  <img
                    src={`${baseUrlImage}${selectedCar.image}`}
                    alt={`Car ${selectedCar.model}`}
                    className="car-image"
                  />
                )}
              </div>
            </div>
            <PersonalInformationForModal/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
