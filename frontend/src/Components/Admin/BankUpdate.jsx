import React, { useState, useEffect, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import MetaData from "../Layout/MetaData";
import Header from "../Layout/Header";
import { getToken } from "../../Utilitys/helpers";

const BankUpdate = () => {
    const [banks, setBank] = useState({});
    const [bankName, setBankName] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [images, setImages] = useState([]);
    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])
    const [loading, setLoading] = useState(true)
    const [updateError, setUpdateError] = useState('')
    const [isUpdated, setIsUpdated] = useState(false)
    const {id} = useParams()
    let navigate = useNavigate();

    const errMsg = (message = '') => toast.error(message, {
      position: "top-right"
  });
  const successMsg = (message = '') => toast.success(message, {
      position: "top-right"
  });
    const getBankDetails =  async (id) => {
        try {
           const { data } = await axios.get(`http://localhost:4000/api/v1/bankinfo/${id}`)
           setBank(data.bank)
           setLoading(false)
           
        } catch (error) {
            setError(error.response.data.message)
            
        }
    }
   
    const updateBank = async (id, bankData)  => {
        try {
           
            const config = {
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${getToken()}`
                }
            }
            const { data } = await axios.put(`http://localhost:4000/api/v1/bankinfo/${id}`, bankData, config)
            setIsUpdated(data.success)
           
        } catch (error) {
            setUpdateError(error.response.data.message)
            
        }
    }
    const submitHandler = () => {
    
        const formData = new FormData();
        formData.set('bankName', bankName);
        formData.set('city', city);
        formData.set('postalCode', postalCode);
        formData.set('address', address);
        images.forEach(image => {
            formData.append('images', image)
        })
        updateBank(banks._id, formData)
    }
    
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
          postalCode: Yup.string().required("Postal Code is required"),
          address: Yup.string().required("Address is required"),

    
      });
    
      const formik = useFormik({
        initialValues: {
            bankName: "bank.bankName" || "",
            city: "bank.city" || "",
            postalCode: "bank.postalCode" || "",
            address: "bank.address" || "",

      
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
        if (banks && banks._id !== id) {
            getBankDetails(id)
        } else {
            setBankName(banks.bankName);
            setCity(banks.city);
            setPostalCode(banks.postalCode);
            setAddress(banks.address);
            setOldImages(banks.images)
        }
        if (error) {
            errMsg(error)
            
        }
        if (updateError) {
            errMsg(updateError);
           
        }
        if (isUpdated) {
            navigate('/banklist');
            window.location.reload()
            successMsg('Bank updated successfully');
           
        }
    }, [error, isUpdated, updateError, banks, id])
  return (
    <Fragment>
    <MetaData title={"New Bank"} />
    <section className="flex  bg-white h-screen">
      <Header />
      <div className="lg:grid flex flex-grow overflow-y-scroll justify-center items-center lg:min-h-screen lg:grid-cols-12 ">

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
          <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <h1 className="mb-4 text-2xl font-bold sm:text-3xl text-black">
                Update Bank
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
                    value={bankName}
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
                    value={city}
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
                    value={address}
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
                    value={postalCode}
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

              <button
                id="login_button"
                type="submit"
                className="btn inline-block my-2 rounded-lg bg-black  py-3 w-[150px] text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2"
              >
                UPDATE
              </button>
          </form>
          </div>
        </main>
      </div>
    </section>
  </Fragment>
  )
}

export default BankUpdate