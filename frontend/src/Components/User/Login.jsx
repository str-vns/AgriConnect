import React, { Fragment, useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Loader from "../Layout/Loader";
import Metadata from "../Layout/MetaData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { authenticate } from "../../Utilitys/helpers";
import { getUser } from "../../Utilitys/helpers";
import Header  from "../Layout/Header";
import {io} from "socket.io-client"

const Login = () => {
  const [farms, setFarms] = useState([])
  const initialState = {
    email: "",
    password: "",
    err: "",
    success: "",
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(initialState)
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const navigate = useNavigate();
  let matchingFarmer = null;
  let location = useLocation();
  const socket = useRef();
    const redirect = location.search ? new URLSearchParams(location.search).get('redirect') : ''
   
    useEffect(() =>
    {
      socket.current = io("ws://localhost:8900")
      socket.current.emit("addUser", user._id);
      socket.current.on("getUsers", (users) => {
  
        const onlineUsers = users.filter(user => user.isOnline);
        
        setOnlineUsers(onlineUsers);
      });
      
      return () => {
        socket.current.off("getUsers");
      };
    },[user._id]);

    const login = async (email, password) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const { data } = await axios.post(
          `http://localhost:4000/api/v1/login`,
          { email, password },
          config
        );
        socket.current.emit("addUser", data.user._id);

        const { data: farmerData } = await axios.get(`http://localhost:4000/api/v1/farmer/allfarmer`, config);
    

        setFarms(farmerData.farmers);
       
        if (farmerData && farmerData.farmers && farmerData.farmers.length > 0) {
          setFarms(farmerData.farmers);
      
          const loggedInUserID = data.user._id;
      
          for (const farmer of farmerData.farmers) {
              if (farmer && farmer.user === loggedInUserID) {
                  matchingFarmer = farmer;
                  break;
              }
          }
       
      } else {
          console.log("No farmers found in the response.");
      }
      
        authenticate(data, () => {
          toast.success("Logged in successfully", {
            position: "top-right",
          });
    
          if (data.user.role === 'admin') {
            authenticate(data, () => navigate("/AdminDashboard"));
          } else if(data.user.role === 'farmer') {
            if(matchingFarmer){
              authenticate(data, () => navigate("/farmerDashboard"));
              
            } else
            {
              authenticate(data, () => navigate("/farmerLocation"));
              
            }
         
          } else {
            authenticate(data, () => navigate("/"));
          }
        });
      } catch (error) {
        console.error("Error:", error);
        if (error.response) {
          console.error("Response Data:", error.response.data);
        }
        toast.error("User or Password is Invalid", {
          position: "top-right",
        });
      }
    };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      console.log(error);
      setError();
    }
  }, [error, isAuthenticated]);

  useEffect(() => {
    if (getUser() && redirect === "confirm") {
      navigate(`/${redirect}`);
    }
    
  }, []);
  return (
  
        <Fragment>
          <Metadata title={"Login"} />

          <div className="flex bg-white h-screen">
          <div className="w-full md:w-1/6 md:w-auto">
  <Header />
</div>

      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={"Login"} />

          <section className="flex flex-wrap  lg:h-screen lg:items-center justify-center bg-white w-full md:w-6/6">
          <div className="w-full px-4 py-10 sm:px-0 sm:py-16 lg:w-2/4 lg:px-0 lg:py-24">
    <div className=" text-center">
      <h1 className="text-2xl font-bold sm:text-3xl text-black">
                  Welcome To AgriConnect! Please Login{" "}
                </h1>
              </div>
              <form
                className="mx-auto mb-0 mt-8 max-w-md space-y-4"
                onSubmit={submitHandler}
              >
                <div>
                  <label htmlFor="email_field" className="sr-only">
                    Email
                  </label>

                  <div className="relative ">
                    <input
                      type="email"
                      id="email_field"
                      className="w-full rounded-lg border-2 border-black bg-white p-4 pe-12 text-sm shadow-sm text-black "
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4 bf">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="password_field" className="sr-only">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password_field"
                      className="w-full rounded-lg border-2 border-black p-4 pe-12 bg-white text-sm shadow-sm text-black"
                      placeholder="Enter password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <label
                      className="absolute inset-y-0 end-0 grid place-content-center px-4"
                      htmlFor="check"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 text-black ${
                          showPassword ? "text-teal-600" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </label>
                    <input
                      id="check"
                      type="checkbox"
                      value={showPassword}
                      onChange={() => setShowPassword((prev) => !prev)}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="grid grid-rows-2 ">
                    <p className="text-sm text-black">
                      No account?
                      <Link to="/register">
                        <a className=" hover:underline"> Sign up</a>
                      </Link>
                    </p>
                    <p className="text-sm text-black py-1 ">
                      You Forgot Password?
                      <Link to="/password/forgot" className=" hover:underline">
                        {" "}
                        Forgot Password
                      </Link>
                    </p>
                  </div>

                  <button
                    id="login_button"
                    type="submit"
                    className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>
          
           </div>
            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
              alt="Welcome"
              src="/images/4.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
            </div>
          </section>
        </Fragment>
      )}

          </div>
        </Fragment>

  );
};

export default Login;