import React, { Fragment, useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import MetaData from "../../Layout/MetaData";
import Header from "../../Layout/Header";
import { getToken } from "../../../Utilitys/helpers";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SrpUpdate = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);
    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])
    const [error, setError] = useState('')
    const [srpProduct, setSrpProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [updateError, setUpdateError] = useState('')
    const [isUpdated, setIsUpdated] = useState(false)
    const { id } = useParams();

 
  let navigate = useNavigate();

const config = {
    headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${getToken()}`
    }
};

const getSrpProductDetails = async (id) => {
    try {
        const { data } = await axios.get(`http://localhost:4000/api/v1/srp/show/${id}`, config);
        setSrpProduct(data.srpProducts)
        setImagesPreview(data.srpProducts.images.map(image => image.url));
    } catch (error) {
        setError(error);
    }
};


const updateSrpProduct = async (id, formData) => {
    try {
        const { data } = await axios.put(`http://localhost:4000/api/v1/srp/update/${id}`, formData, config);
        setIsUpdated(data.success);
        setLoading(false);
    } catch (error) {
        setError(error);
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

useEffect(() => {
  
    if (srpProduct && srpProduct._id !== id) {
        getSrpProductDetails(id)
    } else {
        setName(srpProduct.name);
        setPrice(srpProduct.price);
        setOldImages(srpProduct.images)
    }
    

    if (error) {
        toast.error(error);
        setError('');
    }
    
    if (isUpdated) {
        toast.success('Farmer updated successfully', { position: "top-right" });
        navigate('/srp/List');
        window.location.reload();
    }
}, [error, isUpdated, id, srpProduct]);


const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('name', name);
    formData.set('price', price);
    images.forEach(image => {
        formData.append('images', image)
    })
    updateSrpProduct(srpProduct._id, formData);
};

  return (
    <Fragment>
      <MetaData title={"Update Product"} />
      <div className="flex bg-white items-center justify-center ">
        <div className="w-72 md:w-1/6">
      <Header/>
        </div>

        <div className="w-72 md:w-5/6">
          <Fragment>
            <div className="wrapper my-5 items-center justify-center flex">
              <form
                onSubmit={submitHandler}
                encType="multipart/form-data"
              >
                <h1 className="mb-4 text-2xl font-bold sm:text-3xl text-black">
                  Update Srp Product
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
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                    />
                  </div>
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
                                    value={price}
                                    onChange={(e) => {
                                      setPrice(e.target.value)
                                    }}
                
                                />
                
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
              
                    <label
                      htmlFor="customFile"
                      className="px-4 py-2 border-2  border-black rounded-md cursor-pointer bg-white text-black hover:bg-black hover:text-white"
                    >
                      Choose Images
                    </label>

                    
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
                  id="srpRegister_button"
                  type="submit"
                  className="btn inline-block my-2 rounded-lg bg-black  py-3 w-[150px] text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2"
                >
                  Update
                </button>
              </form>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
  
}

export default SrpUpdate

