import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MetaData from "../Layout/MetaData";
import { getToken } from "../../Utilitys/helpers";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    _id: "",
    name: "",
    description: "",
    user: "",
    images: [],
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const categories = [
    "Battery",
    "Car Suspension",
    "Turbo",
    "Brake",
    "Chassis",
    "Air Filter",
    "Axle",
    "Shock Absorber",
    "Hood",
    "Alternator",
    "Clutch",
    "Compressor",
    "Air suspension",
    "Brake Caliper",
    "Suspension",
    "Nitrous",
    "Exhaust",
    "Interior Seats",
    "Steering Wheel",
    "Car Rims",
    "Fluids",
  ];
  let navigate = useNavigate();

  const submitHandler = async (values) => {
    try {
      const formData = new FormData();
      formData.append("_id", values._id);
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("user", values.user);
      
      // Check if values.images is an array before appending to formData
      if (Array.isArray(values.images)) {
        values.images.forEach((image) => {
          formData.append("images", image);
        });
      } else {
        // If values.images is not an array, log a warning
        console.warn("images is not an array:", values.images);
      }
  
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getToken()}`,
        },
      };
  
      const response = await axios.post(
        "http://localhost:5173/api/v1/addproduct",
        formData,
        config
      );
      console.log(response.data);
      setSuccess(response.data.success);
      setProductData({ ...productData, images: response.data.product.images }); // Update images
    } catch (error) {
      if (error.response) {
        // If error has response property
        console.error("Error response:", error.response.data); // Log error response
        setError(error.response.data.message); // Set error message
      } else {
        console.error("Error:", error); // Log error object
        setError("An unexpected error occurred."); // Set generic error message
      }
    }
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    description: Yup.string().required("Description is required"),
    user: Yup.string().required("User is required"),
    images: Yup.mixed().required("Images are required"),
  });

  const formik = useFormik({
    initialValues: {
      _id: "",
      name: "",
      description: "",
      user: "",
      images: [],
    },
    validationSchema,
    onSubmit: (values) => {
      try {
        submitHandler(values);
        console.log("Submitting product with values:", values);
      } catch (error) {
        console.error("Error submitting product:", error);
      }
    },
  });

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
      });
    }

    if (success) {
      navigate("/ProductList");
      window.location.reload();
      toast.success("Product created successfully", {
        position: "top-right",
      });
    }
  }, [error, success]);

  const onChange = (e) => {
    const files = Array.from(e.target.files || []); // Convert FileList to array
    setProductData({ ...productData, images: files }); // Ensure images is always an array
  };

  return (
    <Fragment>
      <MetaData title={"New Product"} />
      <div className="flex bg-white items-center justify-center ">
        <div className="w-72 md:w-1/6">
          {/* Sidebar */}
        </div>

        <div className="w-72 md:w-5/6">
          <Fragment>
            <div className="wrapper my-5 items-center justify-center flex">
              <form
                onSubmit={formik.handleSubmit}
                encType="multipart/form-data"
              >
                <h1 className="mb-4 text-2xl font-bold sm:text-3xl text-black">
                  New Product
                </h1>

                <div className="form-group">
                  <label
                    htmlFor="name_field"
                    className="text-mg text-black  text-left flex"
                  >
                    Name
                  </label>
                  <div className="flex items-center ">
                    <input
                      type="text"
                      id="name_field"
                      className="form-control w-72 rounded-lg border-2 text-black border-black p-2 text-sm shadow-sm bg-white"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="name"
                    />
                    {formik.errors.name && formik.touched.name && (
                      <div className="text-red-500 text-sm ml-3">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="description_field"
                    className="text-mg text-black  text-left flex"
                  >
                    Description
                  </label>
                  <div className="flex items-center">
                    <textarea
                      className="form-control w-72 rounded-lg border-2 text-black border-black p-2 text-sm shadow-sm bg-white"
                      id="description_field"
                      rows="8"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="description"
                    ></textarea>
                    {formik.errors.description &&
                      formik.touched.description && (
                        <div className="text-red-500 text-sm ml-3">
                          {formik.errors.description}
                        </div>
                      )}
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="user_field"
                    className="text-mg text-black  text-left flex"
                  >
                    User
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="user_field"
                      className="form-control w-72 rounded-lg border-2 text-black border-black p-2 text-sm shadow-sm bg-white"
                      value={formik.values.user}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="user"
                    />
                    {formik.errors.user && formik.touched.user && (
                      <div className="text-red-500 text-sm ml-3">
                        {formik.errors.user}
                      </div>
                    )}
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
                    {productData.images.map((file) => (
                      <img
                        src={URL.createObjectURL(file)}
                        key={file.name}
                        alt="Images Preview"
                        className="my-3 mr-2 "
                        width="55"
                        height="52"
                      />
                    ))}
                  </div>
                </div>

                <button
                  id="create_button"
                  type="submit"
                  className="btn inline-block my-2 rounded-lg bg-black  py-3 w-[150px] text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2"
                >
                  CREATE
                </button>
              </form>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateProduct;