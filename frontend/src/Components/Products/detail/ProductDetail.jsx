import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Loader from "../../Layout/Loader";
import MetaData from "../../Layout/MetaData";
import ReactGall from "react-image-gallery";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser, getToken } from "../../../Utilitys/helpers";
import "@fortawesome/fontawesome-free/css/all.css";
import Rating from "react-rating";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../../Layout/Header";
import './product.css'
Modal.setAppElement("#root");

const ProductDetails = ({ cartProducts, addCart }) => {
  console.log(cartProducts)
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [user, setUser] = useState(getUser());
  const [isModalOpen, setIsModalOpen] = useState(false);
  let { id } = useParams();
  let navigate = useNavigate();

  const productDetails = async (id) => {
    let link = `http://localhost:4000/api/v1/product/${id}`;
    try {
      let res = await axios.get(link);
      setProduct(res.data.product);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Product not found");
      setLoading(false);
    }
  };

  console.log(product);
  const increaseQty = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = async () => {
    await addCart(id, quantity);
  };

  const renderCustomImage = (item) => {
    return (
      <div className="gallery-image">
        <img
          src={item.original}
          alt={item.originalAlt}
          className="img-fluid rounded w-72 mx-auto"
        />
      </div>
    );
  };

  const renderCustomThumb = (item) => {
    return (
      <div className="gallery-thumbnail">
        <img
          src={item.thumbnail}
          alt={item.thumbnailAlt}
          className="img-fluid rounded w-16 h-16 mt-2 object-cover"
        />
      </div>
    );
  };

  let thumb;
  if (product && product.images && product.images.length > 0) {
    thumb = product.images.map((image) => ({
      original: image.url,
      thumbnail: image.url,
    }));
  } else {
    thumb = [{
      original: "/images/NoImage.jpeg",
      thumbnail: "/images/NoImage.jpeg",
    }];
  }


  // const handleRatingChange = (value) => {
  //   setRating(value);
  // };

  // const handleCommentChange = (value) => {
  //   setComment(value);
  // };
  
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const onChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   setImagesPreview([]);
  //   setImages([]);
  //   files.forEach((file) => {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setImagesPreview((oldArray) => [...oldArray, reader.result]);
  //         setImages((oldArray) => [...oldArray, reader.result]);
  //       }
  //     };

  //     reader.readAsDataURL(file);
  //     console.log(reader);
  //   });
  // };

  // const newReview = async (reviewData) => {
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${getToken()}`,
  //       },
  //     };

  //     const { data } = await axios.put(
  //       `http://localhost:4000/api/v1/review`,
  //       reviewData,
  //       config
  //     );
  //     console.log(data.success);
  //     closeModal();
  //     window.location.reload();
  //   } catch (error) {
  //     console.log(error.response.data.message);
  //   }
  // };

  // const reviewHandler = () => {
  //   const formData = new FormData();
  //   formData.set("rating", rating);
  //   formData.set("comment", comment);
  //   formData.set("productId", id);

  //   images.forEach((image) => {
  //     formData.append("images", image);
  //   });
  //   newReview(formData);
  // };

  // const validationSchema = Yup.object({
  //   rating: Yup.number()
  //   .required('Rating is required')
  //   .min(1, 'Rating cannot be zero'),
  //   comment: Yup.string().required("Comment is required"),
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     rating: 0,
  //     comment: "",
  //   },
  //   validationSchema,
  //   onSubmit: (values) => {
  //     console.log("Submitting review with values:", values);
  
  //     try {
  //       reviewHandler(values);
  //       closeModal();
  //       toast.success("Review Success");
  //     } catch (error) {
  //       console.error("Error submitting review:", error);
  //     }
  //   },
  // });
  
  useEffect(() => {
    productDetails(id);

    if (error) {
      toast.error(error, {
        position: "top-right",
      });
    }
  }, [id, error]);

  if (cartProducts !== undefined) {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  } else {
    console.error("cartProducts is undefined");
  }

  return (
    <Fragment>
         <div className="flex  h-screen">
       
       <Header />
     
       <section className="flex bg-white min-h-screen w-full overflow-x-hidden"> 
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={product.name} />
          <div className="bg-white">
            <section
              className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10"
              id="product_image"
            >
              <div className="container mx-auto px-4">
              <ReactGall
                  showBullets={false}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showNav={false}
                  renderItem={renderCustomImage}
                  renderThumbInner={renderCustomThumb}
                  items={thumb}
                />
              </div>
              <div className="mx-auto px-5 lg:px-5">
                <div className="pt-3 text-2xl font-bold lg:pt-0">
                  <h3 className="text-black">{product.name}</h3>
                  <p id="product_id" className="text-black">
                    Product # {product._id}
                  </p>
                  {/* <hr /> */}
                  {/* <div className="ml-3 text-sm text-gray-400">
                    <div
                      className="rating-inner"
                      style={{ width: `${(product.ratings / 5) * 100}%` }}
                    ></div>
                  </div> */}
                  {/* <span id="no_of_reviews">
                    ({product.numOfReviews} Reviews)
                  </span> */}
                  <hr />
                  <div className="flex flex-row items-center justify-center stockCounter">
                    <button
                      className="minus h-8 w-8 mx-2 cursor-pointer items-center justify-center border-2 border-red-400 bg-red-400 duration-100 text-black hover:bg-red-600 hover:border-2 hover:border-red-600"
                      onClick={decreaseQty}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="count bg-white h-8 w-10 cursor-text items-center justify-center active:ring-gray-500"
                      value={quantity}
                      readOnly
                    />
                    <button
                      className="plus h-8 w-8 mx-2 cursor-pointer items-center justify-center border-2 border-green-400 bg-green-400 duration-100 text-black hover:bg-green-600 hover:border-2 hover:border-green-600"
                      onClick={increaseQty}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    id="cart_btn"
                    className="flex h-12 w-1/3 items-center justify-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2"
                    disabled={(product.stock ?? 0) === 0}
                    onClick={addToCart}
                  >
                    Add to Cart
                  </button>
                  <hr />
                  <p className="pt-5 text-sm leading-5 text-black">
                    Status:{" "}
                    <span
                      id="stock_status"
                      className={
                        product.stock > 0 ? "text-green-600" : "text-red-600"
                      }
                    >
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </p>
                  <hr />
                  <h4 className="pt-5 text-sm leading-5 text-black">
                    Description:
                  </h4>
                  <p className="pt-5 text-sm leading-5 text-gray-500">
                    {product.description}
                  </p>
                  <hr />
                  {/* <p
                    className="pt-5 text-sm leading-5 text-black"
                    id="product_seller mb-3"
                  >
                    Sold by:{" "}
                    <strong className="pt-5 text-sm leading-5 text-gray-500">
                      {product.seller}
                    </strong>
                  </p> */}
                </div>
              </div>
            </section>

          
          </div>
        </Fragment>
      )}
      </section>
      </div>
    </Fragment>
  );
};
export default ProductDetails;