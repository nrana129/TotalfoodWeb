import React, { useState, useRef } from "react";
import { login_banner, msg_icon } from "../../assets/images/index";
import Register from "../../components/Register/Register";

import { useDispatch } from "react-redux";
import { setAuthData } from "../../store/actions/authActions";

const Login = ({ onLoginSuccess }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [isCustomerRegistered, setIsCustomerRegistered] = useState(true);
  const [responseMessage, setResponseMessage] = useState("");
  const inputRefs = useRef([]);

  const dispatch = useDispatch();

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleOtpChange = (index, e) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value;

    if (value.length === 1 && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    setOtp(newOtp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponseMessage("");

    try {
      const response = await fetch(
        `https://proxy.cors.sh/https://totalfood.greenhonchos.in/rest/V1/send-otp-login`,
        {
          method: "POST",
          headers: {
            "x-cors-api-key": "temp_bff681b977c3dfa62725fa465683420b",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mobile_number: mobileNumber }),
        }
      );

      const data = await response.json();
      console.log("OTP Sent Response:", data);

      if (data.status === true) {
        setShowOtpForm(true);
        setResponseMessage("");
      } else {
        setShowOtpForm(false);
        setIsCustomerRegistered(false); // Set this to false if customer is not registered
        setResponseMessage(data.message);
      }

      if (!response.ok) {
        throw new Error(data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setError(error.message);
      setShowOtpForm(false);
      setResponseMessage(error.message);
    } finally {
      setLoading(false);
    }
  };


  console.log("responseMessageresponseMessage", responseMessage)

  const handleOtpVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const otpString = otp.join("");
      console.log("OTP String to Verify:", otpString);

      const response = await fetch(
        `https://proxy.cors.sh/https://totalfood.greenhonchos.in/rest/V1/login-otp/verify`,
        {
          method: "POST",
          headers: {
            "x-cors-api-key": "temp_bff681b977c3dfa62725fa465683420b",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjIsInV0eXBpZCI6MiwiaWF0IjoxNzIxMzkxNjgwLCJleHAiOjE3MjEzOTUyODB9.KV3NjeUDc0pYsAYRbhEdELKt375JaNrNsFOH9BmvZks",
          },
          body: JSON.stringify({
            mobileNumber: mobileNumber,
            otpCode: otpString,
            guestQuoteId: "",
          }),
        }
      );

      const data = await response.json();
      console.log("Response Data:", data);




      if (!response.ok) {
        if (data.message.includes("OTP expired")) {
          setVerificationStatus("expired");
        } else {
          throw new Error(data.message || "OTP verification failed");
        }
      } else {
        setVerificationStatus("success");

        if (data.token) {
          // Ensure the token is in the response
          localStorage.setItem("authToken", data.token); // Store the token
        }

        if (onLoginSuccess) {
          onLoginSuccess(); // Call the callback on successful login
        }
      }

      dispatch(
        setAuthData({
          customerId: data.customer_id,
          quoteId: data.quote_id,
          token: data.token,
        })
      );
      
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setVerificationStatus("failed");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login_popUp">
      <img src={login_banner} alt="Login Banner" />
      <div id="loginform" autoComplete="off">
        <div className="sign_header">
          <h2>Sign In/Sign Up</h2>
        </div>
        {isCustomerRegistered && !showOtpForm && (
          <div className="mobile_otp">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="mbnumber_box">
                  <span>+91</span>
                  <input
                    type="tel"
                    className="form-control"
                    maxLength="10"
                    id="mobilenumber"
                    autoComplete="off"
                    value={mobileNumber}
                    onChange={handleMobileChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                id="loginformbtn"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Continue with SMS OTP"}
              </button>
              {error && <p className="error">{error}</p>}
              {responseMessage && <p className="error">{responseMessage}</p>}
            </form>
          </div>
        )}
        {showOtpForm && isCustomerRegistered && (
          <div className="otp_verify">
            <p>Enter your 4 digit OTP</p>
            <form onSubmit={handleOtpVerify}>
              <div className="inner_input">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="tel"
                    className="otp-input"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    autoFocus={index === 0}
                  />
                ))}
              </div>
              {error && <p className="error">{error}</p>}
              {responseMessage && <p className="error">{responseMessage}</p>}
              <button type="submit" id="otpresentbtn" disabled={loading}>
                <img src={msg_icon} alt="Message Icon" />
                {loading ? "Verifying OTP..." : "Verify OTP"}
              </button>
              {verificationStatus === "success" && (
                <p className="success">OTP Verified Successfully!</p>
              )}
              {verificationStatus === "failed" && (
                <p className="error">OTP Verification Failed</p>
              )}
            </form>
          </div>
        )}
        {!isCustomerRegistered && <Register />}
        <div className="footer_line">
          <p>
            By continuing I agree to receive SMS, WhatsApp &amp; RCS
            communication. Send me the order status &amp; exclusive offers on
            WhatsApp, SMS &amp; RCS.
          </p>
          <div>
            <span>100% safe &amp; secure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
