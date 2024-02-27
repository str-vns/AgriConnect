import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MetaData from "../Layout/MetaData";
import { getToken } from '../../Utilitys/helpers'
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../Layout/Header";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");
  const [product, setProduct] = useState({});

  let navigate = useNavigate();
 
  
  const submitHandler = () => {

    const formData = new FormData();
    formData.set("name", name);
    formData.set("description", description);
    formData.set("stock", stock);

    images.forEach((image) => {
      formData.append("images", image);
    });

    newProduct(formData);
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
  const newProduct = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      };
// console.log(getToken())
      const response = await axios.post(
        "http://localhost:4000/api/v1/addproduct",
        formData,
        config
      );
      setLoading(false);
      console.log(response.data);
      setSuccess(response.data.success);
      setProduct(response.data.product);
      toast.success("Create Product Successful", {
        position: "top-right",
    });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    description: Yup.string().required("Description is required"),
    stock: Yup.number()
      .required("Stock is required")
      .min(1, "Stock should be greater than 1")
      .max(50, "Stock Should not max at 50"),
    images: Yup.string().required("Images is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      stock: 0,
      images: "",
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

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
      });
    }

    if (success) {
      navigate("/ProductList");
      window.location.reload()
      toast.success("Product created successfully", {
        position: "top-right",
      });
    }
  }, [error, success]);

  return (
    <Fragment>
      <MetaData title={"New Product"} />
       
   <div className="flex  h-screen">
       
       <Header />
     
       <section className="flex bg-white min-h-screen w-full overflow-x-hidden"> 

        <div className="w-full ">
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
                      onChange={(e) => {
                        setDescription(e.target.value);
                        formik.setFieldValue("description", e.target.value);
                      }}
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
                    htmlFor="stock_field"
                    className="text-mg text-black  text-left flex"
                  >
                    Stock
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="stock_field"
                      className="form-control w-72 rounded-lg border-2 text-black border-black p-2 text-sm shadow-sm bg-white"
                      value={formik.values.stock}
                      onChange={(e) => {
                        setStock(e.target.value);
                        formik.setFieldValue("stock", e.target.value);
                      }}
                    />
                    {formik.errors.stock && formik.touched.stock && (
                      <div className="text-red-500 text-sm ml-3">
                        {formik.errors.stock}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group mt-3">
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
        </section>
      </div>
    </Fragment>
  );
};

export default CreateProduct;