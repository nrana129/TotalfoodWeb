import React, { useState } from "react";
import "./EditAddressForm.scss"; // Add styles as needed

const EditAddressForm = ({ onClose, initialData, onSave }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    mobileNumber: initialData?.mobileNumber || "",
    pincode: initialData?.pincode || "",
    streetAddress: initialData?.streetAddress || "",
    city: initialData?.city || "",
    state: initialData?.state || "",
    landmark: initialData?.landmark || "",
    addressType: initialData?.addressType || "Home", // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Pass the updated data to parent
    onClose(); // Close the portal
  };

  return (
    <div className="edit-address-form">
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>
      <h2>Edit Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Street Address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Nearest Landmark</label>
          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address Type</label>
          <div className="address-type-options">
            <label>
              <input
                type="radio"
                name="addressType"
                value="Home"
                checked={formData.addressType === "Home"}
                onChange={handleChange}
              />
              Home
            </label>
            <label>
              <input
                type="radio"
                name="addressType"
                value="Work"
                checked={formData.addressType === "Work"}
                onChange={handleChange}
              />
              Work
            </label>
            <label>
              <input
                type="radio"
                name="addressType"
                value="Other"
                checked={formData.addressType === "Other"}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="save-btn">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAddressForm;
