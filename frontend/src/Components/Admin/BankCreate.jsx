import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import MetaData from "../Layout/MetaData";
import Header from "../Layout/Header";
import Mappy from "../Mapps/MappY";
import BankMap from "../Mapps/BankMap";
import { getToken } from "../../Utilitys/helpers";

const BankCreate = () => {
  const [bankName, setBankName] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [bank, setBank] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [images, setImages] = useState([]);

  let navigate = useNavigate();

  const submitHandler = async () => {
    const formData = new FormData();
    formData.set("bankName", bankName);
    formData.set("city", city);
    formData.set("address", address);
    formData.set("postalCode", postalCode);
    formData.set("latitude", location ? location.latitude : null);
    formData.set("longitude", location ? location.longitude : null);

    images.forEach((image, index) => {
      formData.append(`images`, image);
    });
    newBank(formData);
  };

  const newBank = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getToken()}`,
        },
      };

      const res = await axios.post(
        `http://localhost:4000/api/v1/bankinfo`,
        formData,
        config
      );

      setBank(res.data);
      navigate("/banklist")
      console.log(res.data)
      window.location.reload();
      toast.success("Registration Successful", {
          position: "top-right",
      });
    } catch (error) {
      console.log(error);
    }
  };

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

  const validationSchema = Yup.object({
    bankName: Yup.string().required("Bank name is required"),
    city: Yup.string().required("City is required"),
    address: Yup.string().required("Address Required"),
    images: Yup.string().required("Images is Required"),
    postalCode: Yup.string().required("Postal Code is Required"),
    postalCode: Yup.string().required("Postal Code is Required"),
  });

  const formik = useFormik({
    initialValues: {
      bankName: "",
      city: "",
      address: "",
      images: "",
      postalCode: "",
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
  });

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
      });
    }

    if (success) {
      window.location.reload();
      toast.success("Product created successfully", {
        position: "top-right",
      });
    }
    newBank()
  }, [error, success]);

  return (
    <Fragment>
      <MetaData title={"New Bank"} />
      <section className="flex  bg-white h-screen">
        <Header />
        <div className="lg:grid flex flex-grow overflow-y-scroll justify-center items-center lg:min-h-screen lg:grid-cols-12 ">
          <section className="relative flex flex-col h-full items-center bg-blue-500 lg:col-span-5 lg:h-full xl:col-span-6">
            <h1 className="text-2xl font-bold p-4">Input your location</h1>
            <BankMap
              className="h-full w-full object-cover opacity-80"
              onLocationChange={handleLocationChange} 
            />
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                <h1 className="mb-4 text-2xl font-bold sm:text-3xl text-black">
                  New Bank
                </h1>

                <div className="form-group">
                  <label
                    htmlFor="bankName_field"
                    className="text-mg text-black  text-left flex"
                  >
                    Name
                  </label>
                  <div className="flex items-center ">
                    <input
                      type="text"
                      id="bankName_field"
                      className="form-control w-72 rounded-lg border-2 text-black border-black p-2 text-sm shadow-sm bg-white"
                      value={formik.values.bankName}
                      onChange={(e) => {
                        setBankName(e.target.value);
                        formik.setFieldValue("bankName", e.target.value);
                      }}
                    />
                    {formik.errors.bankName && formik.touched.bankName && (
                      <div className="text-red-500 text-sm ml-3">
                        {formik.errors.bankName}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="city_field"
                    className="text-mg text-black text-left flex"
                  >
                    City
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="city_field"
                      className="form-control w-72 rounded-lg border-2 text-black border-black p-2 text-sm shadow-sm bg-white"
                      value={formik.values.city}
                      onChange={(e) => {
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
                </div>

                <div className="form-group">
                  <label
                    htmlFor="address_field"
                    className="text-mg text-black  text-left flex"
                  >
                    Address
                  </label>
                  <div className="flex items-center">
                    <input
                      className="form-control w-72 rounded-lg border-2 text-black border-black p-2 text-sm shadow-sm bg-white"
                      id="address_field"
                      rows="8"
                      value={formik.values.address}
                      onChange={(e) => {
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
                </div>

                <div className="form-group">
                  <label
                    htmlFor="postalCode_field"
                    className="text-mg text-black  text-left flex"
                  >
                    Postal Code
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="postalCode_field"
                      className="form-control w-72 rounded-lg border-2 text-black border-black p-2 text-sm shadow-sm bg-white"
                      value={formik.values.postalCode}
                      onChange={(e) => {
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
                </div>

             
                  <div className="form-group">
                    <label
                      htmlFor="latitude_field"
                      className="text-mg text-black  text-left flex"
                    >
                      Latitude
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        id="latitude_field"
                        className="form-control w-72 rounded-lg border-2 text-black border-black p-2 text-sm shadow-sm bg-white"
                        value={location ? location.latitude : null}              
                      />
                      {formik.errors.latitude &&
                        formik.touched.latitude && (
                          <div className="text-red-500 text-sm ml-3">
                            {formik.errors.latitude}
                          </div>
                        )}
                    </div>
             
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="longitude_field"
                      className="text-mg text-black  text-left flex"
                    >
                      Longtitude
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        id="longitude_field"
                        className="form-control w-72 rounded-lg border-2 text-black border-black p-2 text-sm shadow-sm bg-white"
                        value={location ? location.longitude : null}
                      />
                      {formik.errors.longitude &&
                        formik.touched.longitude && (
                          <div className="text-red-500 text-sm ml-3">
                            {formik.errors.longitude}
                          </div>
                        )}
                    </div>
                  </div>
                </div>

                <div className="form-group">
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

                <button
                  id="login_button"
                  type="submit"
                  className="btn inline-block my-2 rounded-lg bg-black  py-3 w-[150px] text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2"
                >
                  CREATE
                </button>
              </form>
            </div>
          </main>
        </div>
      </section>
    </Fragment>
  );
};

export default BankCreate;
