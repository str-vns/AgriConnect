import React, { Fragment, useEffect, useRef, useState} from 'react'
import MetaData from '../Layout/MetaData'
import Header from '../Layout/Header'
import Modal from "react-modal";
import ListReviews from '../Review/ListReviews'
import axios from 'axios'
import { getUser, logout, getToken } from '../../Utilitys/helpers';
import Footer from '../Layout/Footer'
import {io} from "socket.io-client"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Rating from "react-rating";
import "@fortawesome/fontawesome-free/css/all.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FarmerInfo() {
   const [userly, setUserly] = useState({});
   const [farmerloc, setFarmerLoc] = useState({});
   const [conversations, setConversations] = useState([]);
   const [newconver, setNewConver] = useState({})
   const [user, setUser] = useState(getUser());
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [rating, setRating] = useState(0);
   const [comment, setComment] = useState("");
   const navigate = useNavigate();
   let { id } = useParams();
   const socket = useRef();
   const [images, setImages] = useState([]);
   const [imagesPreview, setImagesPreview] = useState([]);


   const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

   useEffect(() => {
     const fetchUser = () => {
       setUserly(getUser());
     };
     fetchUser();
   }, []);
 
   useEffect(() =>{
     socket.current = io("ws://localhost:8900")
   
     socket.current.on("getMessage", (data) => {
       setArriveMessage({
         sender: data.senderId,
         text: data.text,
         createdAt: Date.now(),
       });
     })
   },[]);
   
   
 
 useEffect(()=>{
     const FarmerLc = async (id) => {
       let link = `http://localhost:4000/api/v1/farmer/farmers/${id}`;
       try {
         let res = await axios.get(link);
         setFarmerLoc(res.data);
         console.log(res.data)
       } catch (err) {
         console.log(err);
       }
     };
     FarmerLc(id)
 }, [id])
 
 console.log("Reviews:", farmerloc?.farmersloc?.reviews);
 console.log(farmerloc?.farmersloc?.user)
   useEffect(() => {
     const fetchConversations = async () => {
       try {
         const config = { headers: { Authorization: `Bearer ${getToken()}` } };
         const res = await axios.get(`http://localhost:4000/api/v1/conversation/${userly._id}`, config);
         setConversations(res.data);
       } catch (error) {
         console.log(error);
       }
     };
     if (userly._id) {
       fetchConversations();
     }
   }, [userly._id]);
//  console.log(userly._id)
// console.log(farmerloc?.farmersloc?.user)
const handleSubmit = async (e) => {
  if (userly._id && farmerloc && farmerloc?.farmersloc && farmerloc?.farmersloc?.user) {
    const existingConversation = conversations.find(conversation =>
      conversation.members.includes(userly._id) && conversation.members.includes(farmerloc?.farmersloc?.user)
    );

    if (existingConversation) {
      navigate('/Messenger', { state: { conversation: existingConversation } });
    } else {
      const newconvo = {
        senderId: userly._id,
        receiverId: farmerloc?.farmersloc?.user
      };
         console.log(newconvo)
      try {
        const res = await axios.post('http://localhost:4000/api/v1/conversation', newconvo);
        console.log(res.data)
        setNewConver(res.data);
        navigate('/Messenger', { state: { conversation: res.data } });
      } catch (error) {
        console.log(error);
      }
    }
  }
};




    const handleRatingChange = (value) => {
      setRating(value);
    };
  
    const handleCommentChange = (value) => {
      setComment(value);
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
        console.log(reader);
      });
    };

    const newReview = async( reviewData) => {
      try {
         const config = {
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${getToken()}`,
           },
         };
   
         const { data } = await axios.put(
           `http://localhost:4000/api/v1/farmer/review`,
           reviewData,
           config
           
         );
         console.log(reviewData)
         console.log(data.success);
         closeModal();
         window.location.reload();
       } catch (error) {
         console.log(error.response.data.message);
         console.log(reviewData)
       }
    }
    

    const validationSchema = Yup.object({
      rating: Yup.number()
      .required('Rating is required')
      .min(1, 'Rating cannot be zero'),
      comment: Yup.string().required("Comment is required"),
    });
  
  const reviewHandler = () => {
    const formData = new FormData();
    formData.set("rating", rating);
    formData.set("comment", comment);
    formData.set("farmerId", id);

    images.forEach((image) => {
      formData.append("images", image);
    });
    newReview(formData);
  };
  
  const formik = useFormik({
   initialValues: {
     rating: 0,
     comment: "",
   },
   validationSchema,
   onSubmit: (values) => {
     console.log("Submitting review with values:", values);
 
     try {
       reviewHandler(values);
       closeModal();
       toast.success("Review Success");
     } catch (error) {
       console.error("Error submitting review:", error);
     }
   },
 });
  
//  useEffect(() => {
//   handleSubmit();
// }, [userly._id, farmerloc?.user]);

  return (
 <Fragment>
    <MetaData title={"Farmer Information"} />
   
   <section className="flex  bg-white h-screen">
       
   <Header />
 
   <section className="flex bg-white min-h-screen overflow-x-hidden"> {/* Add overflow-x-hidden */}

   
      <div className="lg:grid  flex flex-grow overflow-y-scroll justify-center items-center lg:min-h-screen ">
         <div class=" py-8   flex flex-wrap items-center  justify-center  ">
            <div class="container rounded-lg lg:w-5/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
               <div class=" h-48  overflow-hidden" >
                  <img class="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
               </div>
               <div class="flex justify-right px-5 items-end -mt-12">
                  <img class="h-32 w-32 bg-white p-2 ring-2 ring-black rounded-full" src="/images/default_avatar.jpg" alt="" />
                  <div class="mt-14 ml-14">
                     <h2 class="text-gray-800 text-3xl font-bold">Mohit Dhiman</h2>
                     <a class="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/immohitdhiman/" target="BLANK()">@immohitdhiman</a>
                  </div>
               </div>
               <div className="text-center my-10">
                  <h1 className="text-3xl font-bold mb-8">Products Available</h1>
                  <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                     <li>
                        <a href="#" className="group block overflow-hidden">
                           <img
                              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                              alt=""
                              className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
                              />
                           <div className="relative bg-white pt-3">
                              <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                 Basic Tee
                              </h3>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="group block overflow-hidden">
                           <img
                              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                              alt=""
                              className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
                              />
                           <div className="relative bg-white pt-3">
                              <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                 Basic Tee
                              </h3>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="group block overflow-hidden">
                           <img
                              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                              alt=""
                              className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
                              />
                           <div className="relative bg-white pt-3">
                              <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                 Basic Tee
                              </h3>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="group block overflow-hidden">
                           <img
                              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                              alt=""
                              className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
                              />
                           <div className="relative bg-white pt-3">
                              <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                 Basic Tee
                              </h3>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="group block overflow-hidden">
                           <img
                              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                              alt=""
                              className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
                              />
                           <div className="relative bg-white pt-3">
                              <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                 Basic Tee
                              </h3>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="group block overflow-hidden">
                           <img
                              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                              alt=""
                              className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
                              />
                           <div className="relative bg-white pt-3">
                              <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                 Basic Tee
                              </h3>
                           </div>
                        </a>
                     </li>
                    
                  </ul>
                  <h1> Comment</h1>
                  {user ? (
              <button
                id="review_btn"
                type="button"
                className="inline-block ml-[600px] mt-10 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2"
                onClick={openModal}
              >
                Submit Your Review
              </button>
            ) : (
              <Link to="/login">
              <div
                className="inline-block ml-[600px] mt-5 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2"
                type="alert"
              >
                Login to post your review.
              </div>
              </Link>
            )}
        <div className="flex items-start mt-2 pb-2 mr-10 overflow-y-auto overscroll-y-auto h-80">
  {farmerloc?.farmersloc?.reviews && farmerloc?.farmersloc?.reviews.length > 0 && (
    <ListReviews reviews={farmerloc?.farmersloc?.reviews} />
  )}
</div>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              className="Modal p-5 max-w-4xl mx-auto bg-white rounded-md"
              overlayClassName="Overlay fixed inset-0 bg-black flex items-center justify-center"
            >
              <div className="mt-2 mb-5">
                <h5 className="text-xl font-bold mb-3 text-black ">Submit Review</h5>
                <p className="text-black text-sm">Your Rating: {rating}</p>

                <Rating
  emptySymbol={<i className="far fa-star" style={{ color: "gray" }} />}
  fullSymbol={<i className="fas fa-star" style={{ color: "gold" }} />}
  initialRating={formik.values.rating}
  onChange={(value) => {
    handleRatingChange(value);
    formik.setFieldValue("rating", value);
  }}
  stop={5}
/>
{formik.touched.rating && formik.errors.rating ? (
  <div className="text-red-500 text-sm" >{formik.errors.rating}</div>
) : null}
                <div>
                  <div className="form-group">
                    <label className="text-black text-sm" >Images</label>
                  </div>
                  <div className="custom-file py-5 ">
                    <input
                      type="file"
                      name="images"
                      className="hidden"
                      id="customFile"
                      onChange={onChange}
                      multiple
                    />
                    <label
                      className="custom-file-label px-4 py-2 border-2 border-black rounded-md cursor-pointer bg-white text-black hover:bg-black hover:text-white"
                      htmlFor="customFile"
                    >
                      Choose Images
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {imagesPreview.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`Selected ${index}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "5px",
                        }}
                      />
                    ))}
                  </div>
                </div>
                {formik.errors.comment && formik.touched.comment && (
                  <div className="text-red-500 text-sm">{formik.errors.comment}</div>
                )}
                <textarea
                  name="comment"
                  id="comment"
                  className="w-full h-32 mt-3 p-2 border rounded-md"
                  value={formik.values.comment}
                  onChange={(e) => {
                    handleCommentChange(e.target.value);
                    formik.setFieldValue('comment', e.target.value);
                  }}
                ></textarea>
                <button
                  className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2"
                  onClick={formik.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </Modal>
            {user ? (
             <button class="text-center mt-5 rounded-xl border-2 border-black text-black  px-32 py-3 hover:bg-black hover:text-white cursor-pointer"  onClick={handleSubmit}>
                <span >Chat now</span>
            </button>
             ) : (
              <Link to="/login">
              <button
                className="text-center mt-5 rounded-xl border-2 border-black text-black  px-32 py-3 hover:bg-black hover:text-white cursor-pointer"
                type="alert"
              >
                Login to Chat 
              </button>
              </Link>
            )}
                  </div>
               </div>
                 
        </div>
       
        </div>
        
        
        </section>
    </section>
  </Fragment>
  
  )
}
export default FarmerInfo