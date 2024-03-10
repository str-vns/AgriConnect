import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Otpas.css';

const Otp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [enteredOTP, setEnteredOTP] = useState("");
  const email = location.state && location.state.email;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email not found");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/api/v1/verify-otp", {
        email,
        enteredOTP
      });
  
      if (response.status === 200) {
        // OTP verification successful
        toast.success("OTP verified successfully");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        // OTP verification failed
        console.error("Incorrect OTP");
        toast.error("Incorrect OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Error verifying OTP. Please try again.");
    }
  };
  const handleChange = (e) => {
    setEnteredOTP(e.target.value);
  };
  return (
    <>
      <div className="containerO">
        <div className="main_div">
        <div className="title" style={{ textAlign: "center" }}>
        One Time Password
        </div>
          <form onSubmit={handleSubmit} className="otp-form">
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter OTP"
                value={enteredOTP}
                onChange={handleChange}
                required
                style={{
                  width: "300px", // Adjust the width as needed
                  height: "40px", // Adjust the height as needed
                  fontSize: "16px", // Adjust the font size as needed
                  textAlign: "center", 
                }}
              />
            </div>
            <button
              style={{
                backgroundColor: "#F8FFA2",
                color: "#000",
                transition: "background-color 0.3s ease",
                width: "150px", // Adjust the width as needed
                height: "50px", // Adjust the height as needed
                fontSize: "18px", // Adjust the font size as needed
              }}
              id="login_button"
              type="submit"
              className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-bold text-white hover:bg-white hover:text-black"
              onMouseOver={(e) => (e.target.style.backgroundColor = "#EFB745")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#F8FFA2")}
            >
              Verify
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
  
};

export default Otp;