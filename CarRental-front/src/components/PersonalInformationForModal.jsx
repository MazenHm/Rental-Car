import React, { useState } from "react";
import "./PersonalInformationForModal.css";
import { createUser } from "../services/UserService";

const PersonalInformationForModal = () => {
  const [successAlertVisible, setSuccessAlertVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    age: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: false,
    phone: false,
    age: false,
    email: false,
    address: false,
    city: false,
    zipcode: false,
  });

  const handleFormSubmit = async () => {
    const errors = {};
    if (!formData.age || formData.age < 18) {
      errors.age = true;
    }
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = true;
      }
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log(formData);
      const response = await createUser(formData);

      if (response.err) {
        // Handle API error here, you can display an error message or take other actions
        console.error("Error saving data:", response.err);
      } else {
        // Data saved successfully, you can proceed with your logic here
        console.log("Data saved successfully:", response.data);
        setSuccessAlertVisible(true);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false, // Reset error for the field when it's being changed
    }));
  };
  
  return (
    <div>
      <div className="personal-container">
        <h5 className="title-header">PERSONAL INFORMATION</h5>
        {successAlertVisible && ( // Render success alert if visible
          <div className="alert alert-success mt-3" role="alert">
            User added successfully!
          </div>
        )}
        <form>
          <div className="input-box mb-2">
            <div
              className={`d-flex flex-column gap-1 ${
                formErrors.username && "error"
              }`}
            >
              <label>
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your first name"
                value={formData.username}
                onChange={handleInputChange}
              />
              {formErrors.username && (
                <p className="error-text">This field is required.</p>
              )}
            </div>
            <div
              className={`d-flex flex-column gap-1 ${
                formErrors.age && "error"
              }`}
            >
              <label>
                Age <span>*</span>
              </label>
              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleInputChange}
              />
              {formErrors.age && (
                <p className="error-text">
                  {formErrors.age === true
                    ? "This field is required."
                    : formErrors.age}
                </p>
              )}
            </div>
          </div>
          <div className={`solo-input mb-2 ${formErrors.email && "error"}`}>
            <labe>
              Email <span>*</span>
            </labe>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <p className="error-text">This field is required.</p>
            )}
          </div>
          <div className="input-box">
            <div
              className={`d-flex flex-column gap-1 ${
                formErrors.phone && "error"
              }`}
            >
              <label>
                Phone Number <span>*</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && (
                <p className="error-text">This field is required.</p>
              )}
            </div>
            <div
              className={`d-flex flex-column gap-2 ${
                formErrors.address && "error"
              }`}
            >
              <label>
                Address <span>*</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleInputChange}
              />
              {formErrors.address && (
                <p className="error-text">This field is required.</p>
              )}
            </div>
          </div>
          <div className="input-box">
            <div
              className={`d-flex flex-column gap-1 ${
                formErrors.city && "error"
              }`}
            >
              <label>
                City <span>*</span>
              </label>
              <input
                type="text"
                name="city"
                placeholder="Enter your phone number"
                value={formData.city}
                onChange={handleInputChange}
              />
              {formErrors.city && (
                <p className="error-text">This field is required.</p>
              )}
            </div>
            <div
              className={`d-flex flex-column gap-2 ${
                formErrors.zipcode && "error"
              }`}
            >
              <label>
                Zip Code <span>*</span>
              </label>
              <input
                type="number"
                name="zipcode"
                placeholder="Enter your zipcode"
                value={formData.zipcode}
                onChange={handleInputChange}
              />
              {formErrors.zipcode && (
                <p className="error-text">This field is required.</p>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleFormSubmit}
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default PersonalInformationForModal;
