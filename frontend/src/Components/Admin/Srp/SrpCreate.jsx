import axios from 'axios';
import Header from '../../Layout/Header';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import MetaData from '../../Layout/MetaData';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useFormik } from "formik"
import {getToken} from '../../../Utilitys/helpers'
const SrpCreate = () => {
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();
 

const validationSchema = Yup.object({
    name: Yup.string().required("Farm name Is Required"),
    price: Yup.number()
    .required("Price is required")
    .min(50, "Price greater than 50")
    .max(10000, "Price Should not max at 10000"),
    images: Yup.string().required("Images are required")
})

const formik = useFormik({
   initialValues: {
    name: "",
    price: 0 || "",
    images: ""
   }, 

   validationSchema,
   onSubmit: (values) => {
    try {
      submitHandler(values);
      console.log("Submitting review with values:", values);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  },
})
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
    
  const submitHandler = async (e) => {
    document.querySelector("#srpRegister_button").disabled = true;

    if (!location) {
        toast.error("Srp information is missing.", {
            position: "top-right",
        });
        return;
    }

    const formData = new FormData();
    formData.set('name', name);
    formData.set('price', price);
    images.forEach((image, index) => {
        formData.append(`images`, image);
    });
console.log(images)
   createSrp(formData);
};

const createSrp = async (formData) => {
  try {
      const config = {
          headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${getToken()}`,
          }
      }

      const response = await axios.post(`http://localhost:4000/api/v1/srp/register`, formData, config);
      console.log("Response from server:", response);

      navigate("/farmerDashboard");
      window.location.reload();
      toast.success("Registration Successful", {
          position: "top-right",
      });
  } catch (error) {
      let message = "An error occurred. Please try again.";
      if (error.response && error.response.data && error.response.data.message) {
          message = error.response.data.message;
      }
      console.error("Error creating farm:", error);
      toast.error(message, {
          position: "top-right",
      });
  }
};


    return(
        <Fragment>
            <MetaData title={"Register Srp Product"} />
            <section className="flex  bg-white h-screen">
                <Header />
                <div className="lg:grid flex flex-grow overflow-y-scroll justify-center items-center lg:min-h-screen ">

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
                        <form
                            className="mt-8 grid grid-cols-6 gap-6"
                            onSubmit={formik.handleSubmit}
                            encType="multipart/form-data"
                        >
                            <h1 className="text-3xl font-bold text-black col-span-6">
                            Register Srp Product
                            </h1>
                            <div className="form-group col-span-6">
                                <label
                                    htmlFor="name_field"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                 Product Name
                                </label>
                                <input
                                    type="text"
                                    id="name_field"
                                    className="mt-1 p-4 lg:w-full md:w-full sm:w-full rounded-md border-2 h-10 border-black bg-white text-sm text-gray-700 shadow-sm"
                                    name="farmname"
                                    value={formik.values.name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        formik.setFieldValue("name", e.target.value);
                                      }}
                
                                />
                     {formik.errors.name && formik.touched.name && (
                      <div className="text-red-500 text-sm ml-3">
                        {formik.errors.name}
                      </div>
                    )}

                            </div>
                            
                            <div className="form-group col-span-6">
                                <label
                                    htmlFor="price_field"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                 Price
                                </label>
                                <input
                                    type="text"
                                    id="price_field"
                                    className="mt-1 p-4 lg:w-full md:w-full sm:w-full rounded-md border-2 h-10 border-black bg-white text-sm text-gray-700 shadow-sm"
                                    name="farmname"
                                    value={formik.values.price}
                                    onChange={(e) => {
                                      setPrice(e.target.value);
                                      formik.setFieldValue("price", e.target.value);
                                    }}
                
                                />
                     {formik.errors.price && formik.touched.price && (
                      <div className="text-red-500 text-sm ml-3">
                        {formik.errors.price}
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
                        onChange={(event) => {
                            onChange(event);
                            formik.setFieldValue(
                              "images",
                              event.currentTarget.files
                            );
                            formik.setFieldTouched("images", true, false);
                          }}
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
                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    id="srpRegister_button"
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

export default SrpCreate;
