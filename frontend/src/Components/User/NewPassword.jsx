import React, { Fragment, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MetaData from "../Layout/MetaData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../Layout/Header";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { token } = useParams();

  const resetPassword = async (token, passwords) => {
    try {
      token = token.trim();

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.put(
        `http://localhost:4000/api/v1/password/reset/${token}`,
        passwords,
        config
      );
      setSuccess(data.success);
    navigate('/login');
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'top-center',
      });
    }
    if (success) {
      toast.success("Password updated", {
        position: 'top-center',
      });
      navigate("/login");
    }
  }, [error, success, navigate]);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validationSchema = Yup.object({

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must have at 8 characters"),
      confirmPassword: Yup.string()
      .required("Please re-type your password")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Submitting Register with values:", values);

      try {
        submitHandler(values);
      } catch (error) {
        console.error("Error submitting review:", error);
      }
    },
  });

  const submitHandler = () => {

    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      const formData = {
        password,
        confirmPassword,
      };
      resetPassword(token, formData);
    }
  };

  return (
    <Fragment>
      <MetaData title={"New Password Reset"} />
      <div className="flex  h-screen ">
      <div className=" bg-white ">
        <Header />
      </div>
      <div className="px-4 py-40 sm:px-6 lg:px-8 w-full bg-white overflow-y-scroll">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl text-black">New Password</h1>
        </div>

        <form onSubmit={formik.handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="password_field" className="text-mg text-black pl-2">
              Password  {formik.errors.password && formik.touched.password && (
                <span className="text-red-500 text-sm ml-3">
                  {formik.errors.password}
                </span>
              )}
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password_field"
                className="form-control w-full rounded-lg border-2 text-black border-black p-4 text-sm shadow-sm bg-white"
                value={formik.values.password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  formik.setFieldValue("password", e.target.value);
                }}
              />
             

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={toggleShowPassword}>
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4  text-teal-600"
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
                ) : (
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="confirm_password_field" className="text-mg text-black pl-2">
              Confirm Password {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                <span className="text-red-500 text-sm ml-3">
                  {formik.errors.confirmPassword}
                </span>
              )}
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="confirm_password_field"
                className="form-control w-full rounded-lg border-2 text-black border-black p-4 text-sm shadow-sm bg-white"
                value={formik.values.confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  formik.setFieldValue("confirmPassword", e.target.value);
                }}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={toggleShowPassword}>
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-teal-600"
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
                ) : (
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>

          <button
            id="new_password_button"
            type="submit"
            className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:border-2 hover:border-black hover:bg-white hover:text-black"
          >
            Set Password
          </button>
        </form>
      </div>
      </div>
    </Fragment>
  );
};

export default NewPassword;