import React, {useEffect, useState} from 'react'
import Header from '../Layout/Header'
import { Link, useNavigate } from 'react-router-dom'
import FarmRegisterSteps from './FarmRegisterSteps'
import { Fragment } from 'react'
import MetaData from '../Layout/MetaData'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";


const FarmRegister = ({farmerInfo, saveFarmerRegister}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName]= useState(farmerInfo.name)
  const [email, setEmail]= useState(farmerInfo.email)
  const [password, setPassword] = useState(farmerInfo.password)
  const [passwordConfirm, setPasswordConfirm] = useState(farmerInfo.passwordConfirm)
  const [avatar, setAvatar] = useState(farmerInfo.avatar);
  const [avatarPreview, setAvatarPreview] = useState("/images/default_avatar.jpg");
  let navigate = useNavigate();

const submitHandler = (e) =>
{
  e.preventDefault()
  saveFarmerRegister({name, email, password, passwordConfirm, avatar})
  navigate('/farmerLocation')

}

  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };



  // console.log("Password:", password);
  // console.log("Password Confirmation:", passwordConfirm);

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);

      setAvatar(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
 
 
  return (
 <Fragment>
    <MetaData title={"Register Farmer"} />
   
    <section className="flex  bg-white h-screen">
      
         <Header />
  
      <div className="lg:grid flex overflow-y-scroll flex-grow justify-center items-center lg:min-h-screen lg:grid-cols-12 ">
        
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          
          <img
            alt="Night"
            src="images/5.png"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Agriconnect 🌾
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </a>

             
            </div>
            <FarmRegisterSteps farmerInfo />
            <form
              className="mt-8 grid grid-cols-6 gap-6"
              onSubmit={submitHandler}
            >
              <h1 className="text-3xl font-bold text-black col-span-6">
               Farmer Register
              </h1>

              <div className="form-group col-span-6">
                <label
                  htmlFor="name_field"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
            
                </label>
                <input
                  type="text"
                  id="name_field"
                  className="mt-1 p-4 lg:w-full md:w-full sm:w-full rounded-md border-2 h-10 border-black bg-white text-sm text-gray-700 shadow-sm"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="email_field"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                 
                </label>
                <input
                  type="email"
                  id="email_field"
                  className="mt-1 p-4 lg:w-full md:w-full sm:w-full rounded-md border-2 h-10 border-black bg-white text-sm text-gray-700 shadow-sm"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <div className="form-group">
                  <label
                    htmlFor="password_field"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password 
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password_field"
                      className="mt-1 p-4 lg:w-full md:w-full sm:w-full rounded-md border-2 h-10 border-black bg-white text-sm text-gray-700 shadow-sm"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      />
                   

                    <span
                      onClick={toggleShowPassword}
                      className="absolute right-4 bottom-1 transform -translate-y-1/2 cursor-pointer"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 text-black `}
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
                          className={`h-4 w-4 text-teal-600 `}
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
             
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="passwordConfirm"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation  
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="passwordConfirm"
                    name="passwordConfirm"
                    className="mt-1 p-4 lg:w-full md:w-full sm:w-full rounded-md border-2 h-10 border-black bg-white text-sm text-gray-700 shadow-sm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    />

                  <span
                    onClick={toggleShowPassword}
                    className="absolute right-4 bottom-1 transform -translate-y-1/2 cursor-pointer"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 text-black `}
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
                        className={`h-4 w-4 text-teal-600 `}
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

              <div className="col-span-6 form-group">
                <label
                  htmlFor="avatar_upload"
                  className="block text-sm font-medium text-gray-700"
                >
                  Avatar
                </label>
                <div className="d-flex flex-wrap items-centermy-2">
                  <div className="pr-3">
                    <figure className="avatar w-20 h-20">
                      <img
                        src={avatarPreview}
                        className="rounded-circle w-16 h-16  object-cover "
                        alt="Avatar Preview"
                      />
                    </figure>
                  </div>
                  <div className="custom-file relative">
                  <input
                                       type="file"
                                       name="avatar"
                                       className="hidden "
                                       id="customFile"
                                       accept="image/*"
                                       onChange={onChange}
                                    />
                    <label
                      htmlFor="customFile"
                      className="px-4 py-2 border-2 border-black rounded-md cursor-pointer bg-white text-black hover:bg-black hover:text-white"
                    >
                      Choose Avatar
                    </label>
                   
                  </div>
                </div>
              </div>
        <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                id="register_button"
                type="submit"
                className="inline-block rounded-lg bg-black px-5 py-3 w-[150px] text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2"
                // disabled={loading ? false : true}
              >
                NEXT
              </button>

          <p class="mt-4 text-sm text-gray-500 sm:mt-0">
            Already have an account?
            <Link to="/Login" > 
            <a href="#" class="text-gray-700 underline">Log in</a>.
            </Link>
          </p>
</div>
            </form>
          </div>
        </main>
      </div>
    </section>
  </Fragment>
   
  )
}

export default FarmRegister