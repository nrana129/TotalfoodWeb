import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: ""
  });
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [errors, setErrors] = useState({});
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {  // Allow only numeric values
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input field if value is not empty
      if (value && index < 3) {
        document.getElementById(`otpcode${index + 2}`).focus();
      }

      // Move to previous input field if value is empty
      if (!value && index > 0) {
        document.getElementById(`otpcode${index}`).focus();
      }
    }
  };

  const validate = () => {
    let errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.mobileNumber) {
      errors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = "Mobile number is invalid";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("https://proxy.cors.sh/https://totalfood.greenhonchos.in/rest/V1/register", {
          method: "POST",
          headers: {
            "x-cors-api-key": "temp_bff681b977c3dfa62725fa465683420b",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjIsInV0eXBpZCI6MiwiaWF0IjoxNzIxMzkxNjgwLCJleHAiOjE3MjEzOTUyODB9.KV3NjeUDc0pYsAYRbhEdELKt375JaNrNsFOH9BmvZks",
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Registration successful:", data);
          setIsOtpSent(true);
        } else {
          console.error("Registration failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");

    try {
      const response = await fetch("https://proxy.cors.sh/https://totalfood.greenhonchos.in/rest/V1/register/verifyOtp", {
        method: "POST",
        headers: {
          "x-cors-api-key": "temp_bff681b977c3dfa62725fa465683420b",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjIsInV0eXBpZCI6MiwiaWF0IjoxNzIxMzkxNjgwLCJleHAiOjE3MjEzOTUyODB9.KV3NjeUDc0pYsAYRbhEdELKt375JaNrNsFOH9BmvZks",
        },
        body: JSON.stringify({
          otp: otpCode
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log("OTP verification successful:", data);
      } else {
        console.error("OTP verification failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {!isOtpSent ? (
        <form id="registerfrom" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="firstName">
              Enter first name
            </label>
            <input
              type="text"
              className="form-control AlphabetsOnly"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="lastName">
              Enter last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Enter email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="mobileNumber">
              Enter mobile number
            </label>
            <input
              type="tel"
              className="form-control"
              id="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
          </div>
          <button type="submit" className="btn btn-primary" id="registerfrombtn">
            Register
          </button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit}>
          <div className="form-group">
            <div className="otp_inputs">
              <p>Enter your 4 digit OTP</p>
              <div className="inner_input">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="tel"
                    className="register-input"
                    maxLength="1"
                    id={`otpcode${index + 1}`}
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Verify OTP</button>
        </form>
      )}
    </div>
  );
};

export default Register;
