import React, { Fragment, useEffect, useRef, useState} from 'react'
import MetaData from '../Layout/MetaData'
import Header from '../Layout/Header'
import ListReviews from '../Review/ListReviews'
import axios from 'axios'
import { getUser, logout } from '../../Utilitys/helpers';
import Footer from '../Layout/Footer'
import {io} from "socket.io-client"
import { useNavigate, useParams } from 'react-router-dom'
function FarmerInfo() {
   const [userly, setUserly] = useState({});
   const [farmerloc, setFarmerLoc] = useState({});
   const [conversations, setConversations] = useState([]);
   const [newconver, setNewConver] = useState({})
   const navigate = useNavigate();
   let { id } = useParams();
   const socket = useRef();
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
 
   const handleSubmit = async (e) => {
      if (userly._id && farmerloc && farmerloc.farmersloc && farmerloc.farmersloc.user) {
        const existingConversation = conversations.find(conversation =>
          conversation.members.includes(userly._id) && conversation.members.includes(farmerloc.farmersloc.user)
        );
    
        if (existingConversation) {
          navigate('/Messenger', { state: { conversation: existingConversation } });
        } else {
          const newconvo = {
            members: [userly._id, farmerloc.farmersloc.user]
          };
    
          try {
            const res = await axios.post('http://localhost:4000/api/v1/conversation', newconvo);
            setNewConver(res.data);
            navigate('/Messenger', { state: { conversation: res.data } });
          } catch (error) {
            console.log(error);
          }
        }
      }
    };
 
   useEffect(() => {
     handleSubmit();
   }, [userly._id, farmerloc.user]);
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
                  <h1> COmment</h1>
                  <ListReviews/>
                  <hr class="mt-6" />
                  <div class="flex  bg-gray-50 ">
                        <p>
                           <span class="font-semibold">2.5 k </span> Followers</p>
                     </div>
                  </div>
               </div>
                        <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer"  onClick={handleSubmit}>
            </div>
        </div>
       
        </div>
        
        
        </section>
    </section>
  </Fragment>
  
  )
}
export default FarmerInfo