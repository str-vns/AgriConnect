import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
      <div className="container">
        <div className="main_div">
          <div className="title">Enter OTP</div>
          <form onSubmit={handleSubmit}>
            <div className="input_box">
              <input
                type="text"
                placeholder="Enter OTP"
                value={enteredOTP}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input_box button">
              <input type="submit" value="Verify OTP" />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Otp;
