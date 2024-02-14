import axios from 'axios';
import Header from '../Layout/Header';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FarmRegisterSteps from './FarmRegisterSteps';
import { Fragment } from 'react';
import MetaData from '../Layout/MetaData';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import Mapa from '../Mapps/miniMap'
const FarmerLocation = ({ farmCollection }) => {
    const [farmname, setFarmname] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [location, setLocation] = useState(null);
    const [longitude, setLongitude] = useState()
    const [latitude, setLatitude] = useState(null)
    const navigate = useNavigate();
 
    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            position => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            error => {
                console.error("Error getting geolocation:", error);
            }
        );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []); 


    const submitHandler = async (e) => {
        e.preventDefault();
        document.querySelector("#register_button").disabled = true;
    
        if (!location) {
            toast.error("Location information is missing.", {
                position: "top-right",
            });
            return;
        }
    
        farmCollection.farmInfo = {
            farmName: farmname,
            address: address,
            city: city,
            postalCode: postalCode,
            latitude: location.latitude,
            longitude: location.longitude,
        };
        createRegister(farmCollection);
        console.log(farmCollection.password);
    };

    const createRegister = async (farmCollection) => {
     
        try {
            const { data } = await axios.post(`http://localhost:4000/api/v1/farmer/register`, farmCollection, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(data);
            toast.success("Registration Successful", {
                position: "top-right",
            });
            localStorage.removeItem("farmCollection");
            navigate('/login');
            window.location.reload();
        } catch (error) {
            const message = error.response
                ? error.response.data.message
                : "An error occurred. Please try again.";
            toast.error(message, {
                position: "top-right",
            });
        }
    };


    return(
        <Fragment>
            <MetaData title={"Register Location"} />
            <section className="flex  bg-white h-screen">
                <Header />
                <div className="lg:grid flex flex-grow overflow-y-scroll justify-center items-center lg:min-h-screen lg:grid-cols-12 ">
           
                <section className="relative flex flex-col h-full items-center bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 bg-black">
                <h1 className="text-2xl font-bold p-4  ">Your location</h1>
            <Mapa className="h-full w-full object-cover opacity-80">
               
            </Mapa>
        </section>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
          
                        
                        <FarmRegisterSteps farmLocation />
                        <form
                            className="mt-8 grid grid-cols-6 gap-6"
                            onSubmit={submitHandler}
                            encType="multipart/form-data"
                        >
                            <h1 className="text-3xl font-bold text-black col-span-6">
                                Location Registration
                            </h1>
                            <div className="form-group col-span-6">
                                <label
                                    htmlFor="farmname_field"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Farm Name
                                </label>
                                <input
                                    type="text"
                                    id="farmname_field"
                                    className="mt-1 p-4 lg:w-full md:w-full sm:w-full rounded-md border-2 h-10 border-black bg-white text-sm text-gray-700 shadow-sm"
                                    name="farmname"
                                    value={farmname}
                                    onChange={(e) => setFarmname(e.target.value)}
                                />
                            </div>
                            <div className="col-span-6">
                                <label
                                    htmlFor="address_field"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address_field"
                                    className="mt-1 p-4 lg:w-full md:w-full sm:w-full rounded-md border-2 h-10 border-black bg-white text-sm text-gray-700 shadow-sm"
                                    name="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="col-span-6">
                                <label
                                    htmlFor="city_field"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city_field"
                                    className="mt-1 p-4 lg:w-full md:w-full sm:w-full rounded-md border-2 h-10 border-black bg-white text-sm text-gray-700 shadow-sm"
                                    name="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="col-span-6">
                                <label
                                    htmlFor="postalCode_field"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Postal Code
                                </label>
                                <input
                                    type="text"
                                    id="postalCode_field"
                                    className="mt-1 p-4 lg:w-full md:w-full sm:w-full rounded-md border-2 h-10 border-black bg-white text-sm text-gray-700 shadow-sm"
                                    name="postalCode"
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                />
                            </div> 
                            <div>
    {location ? (
        
      <div>
         <input
                                    type="text"
                                    id="latitude_field"
                                    className="mt-1 p-4 hidden lg:w-full md:w-full sm:w-full rounded-md border-2 h-10 border-black bg-white text-sm text-gray-700 shadow-sm"
                                    name="latitude"
                                    value={location.latitude}
                                    onChange={(e) => setLatitude(e.target.value)}
                                />

<input
                                    type="text"
                                    id="longitude_field"
                                    className="mt-1 hidden p-4 lg:w-full md:w-full sm:w-full rounded-md border-2 h-10 border-black bg-white text-sm text-gray-700 shadow-sm"
                                    name="longitude"
                                    value={location.longitude}
                                    onChange={(e) => setLongitude(e.target.value)}
                                />
                                
      </div>
    ) : (
        
      <div className='hidden'>Loading...</div>
    )}
  </div>
                            <div className="w-full ">
                            <Mapa/>
  </div>
                         
                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    id="register_button"
                                    type="submit"
                                    className="inline-block rounded-lg bg-black px-5 py-3 w-[150px] text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2"
                                >
                                   REGISTER
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
                </div>
            </section>
        </Fragment>
    );
};

export default FarmerLocation;
