import React, { Fragment, useState, useEffect  } from 'react'
import MetaData from '../Layout/MetaData';
import Header from '../Layout/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useFormik } from "formik"
import {getToken, getUser} from '../../Utilitys/helpers'
import axios from 'axios';


const FarmerLocUpdate = ()=> {
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [farmname, setFarmname] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [oldImages, setOldImages] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
  

    const getLocationFarmer = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }
        try {
            const { data } = await axios.get(`http://localhost:4000/api/v1/farmer/farmer/update`, config)
            // console.log(data.farmer.images[0].url)
            setFarmname(data.farmer.farmName);
            setAddress(data.farmer.address)
            setCity(data.farmer.city)
            setPostalCode(data.farmer.postalCode)
            setImagesPreview(data.farmer.images.map(image => image.url));
            setLoading(false)
        } catch (error) {
           console.log(error)
        }
    }

    useEffect(() => {
        getLocationFarmer()
    
    }, [])


const onChange = (e) => {
  const files = Array.from(e.target.files);
  setImagesPreview([]);
  setImages([]);
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagesPreview((oldArray) => [...oldArray, reader.result]);
        setImages((oldArray) => [...oldArray, reader.result]);
      }
    };

    reader.readAsDataURL(file);
  });
};



const formik = useFormik({
   initialValues: {
    farmname: farmname,
    address: address,
    city: city,
    postalCode: postalCode,

   }, 

   onSubmit: (values) => {
    try {
      submitHandler(values);
      console.log("Submitting review with values:", values);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  },
})


const submitHandler = async (e) => {


    document.querySelector("#update_button").disabled = true;

    const formData = new FormData();

    formData.set('farmName', farmname);
    formData.set('address', address);
    formData.set('city', city);
    formData.set('postalCode', postalCode);
    
    images.forEach((image, index) => {
        formData.append(`images`, image);
    });

    updateFarmer(formData); // Call the function to update the farmer
};

const updateFarmer = async (formData) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${getToken()}`,
            }
        }

        const response = await axios.put(`http://localhost:4000/api/v1/farmer/farmerLocation/update`, formData, config); // Use PUT method to update the farmer
        console.log("Response from server:", response);

        navigate(`/user/${getUser()._id}`, { replace: true })
        window.location.reload();
        toast.success("Update Successful", {
            position: "top-right",
        });
    } catch (error) {
        let message = "An error occurred. Please try again.";
        if (error.response && error.response.data && error.response.data.message) {
            message = error.response.data.message;
        }
        console.error("Error updating farmer:", error);
        toast.error(message, {
            position: "top-right",
        });
    }
};


  return (
    <Fragment>
            <MetaData title={"Register Location Update"} />
            <section className="flex  bg-white h-screen">
                <Header />
                <div className="lg:grid flex flex-grow overflow-y-scroll justify-center items-center lg:min-h-screen  ">
           

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
                        <form
                            className="mt-8 grid grid-cols-6 gap-6"
                            onSubmit={formik.handleSubmit}
                            encType="multipart/form-data"
                        >
                            <h1 className="text-3xl font-bold text-black col-span-6">
                                Location Registration Update
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
                                    onChange={(e) => {
                                        setFarmname(e.target.value);
                                        formik.setFieldValue("farmname", e.target.value);
                                      }}
                
                                />
                     {formik.errors.farmname && formik.touched.farmname && (
                      <div className="text-red-500 text-sm ml-3">
                        {formik.errors.farmname}
                      </div>
                    )}

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
                                    onChange = {(e) => {
                                        setAddress(e.target.value);
                                        formik.setFieldValue("address", e.target.value);
                                      }}
                                />
                                 {formik.errors.address && formik.touched.address && (
                      <div className="text-red-500 text-sm ml-3">
                        {formik.errors.address}
                      </div>
                    )}

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
                                    onChange = {(e) => {
                                        setCity(e.target.value);
                                        formik.setFieldValue("city", e.target.value);
                                      }}
                                />
                                   {formik.errors.city && formik.touched.city && (
                      <div className="text-red-500 text-sm ml-3">
                        {formik.errors.city}
                      </div>
                    )}
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
                                    onChange = {(e) => {
                                        setPostalCode(e.target.value);
                                        formik.setFieldValue("postalCode", e.target.value);
                                      }}
                                />
                                   {formik.errors.postalCode && formik.touched.postalCode && (
                      <div className="text-red-500 text-sm ml-3">
                        {formik.errors.postalCode}
                      </div>
                    )}
                            </div>

                             <div className="col-span-6 ">
                  <label className=" text-mg text-black  text-left flex mb-2">
                    Images
                  </label>
                    <div className="custom-file">
                      <input
                        type="file"
                        name="images"
                        className="custom-file-input hidden"
                        id="customFile"
                        onChange={onChange}
                        multiple
                      />
                   <div className="flex items-center">
                    <label
                      htmlFor="customFile"
                      className="px-4 py-2 border-2  border-black rounded-md cursor-pointer bg-white text-black hover:bg-black hover:text-white"
                    >
                      Choose Images
                    </label>

                    {formik.errors.images && formik.touched.images && (
                        <div className="text-red-500 text-sm ml-3">
                          {formik.errors.images}
                        </div>
                      )}

                    </div>
                  </div>
                  <div className="flex flex-row mb-2">
                    {imagesPreview.map((img) => (
                      <img
                        src={img}
                        key={img}
                        alt="Images Preview"
                        className="my-3 mr-2 "
                        width="55"
                        height="52"
                      />
                    ))}
                  </div>
                </div>

                    <div>
  </div>
                    

                         
                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    id="update_button"
                                    type="submit"
                                    className="inline-block rounded-lg bg-black px-5 py-3 w-[150px] text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2"
                                >
                                   Update
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
                </div>
            </section>
        </Fragment>
  )
}

export default FarmerLocUpdate