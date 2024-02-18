import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from '../../Utilitys/helpers';
import axios from 'axios';
const Header = () => {
const [user, setUser] = useState({});
const navigate = useNavigate();
const logoutUser = async () => {
try {
await axios.get(`http://localhost:4000/api/v1/logout`);
setUser({}); 
logout(() => navigate('/'));
} catch (error) {
toast.error(error.response.data.message);
}
};
const onSuccess = async (res) => {
toast.success(`Logout Success: currentUser: ${JSON.stringify(res.profileObj)}`, {
position: 'top-right',
});
}
const logoutHandler = () => {
logoutUser();
navigate('/');
window.location.reload();
toast.success('Logged out Successfully', {
position: 'top-right',
});
};
useEffect(() => {
setUser(getUser());
}, []);
const [isOpen, setIsOpen] = useState(false);
const toggleDropdown = () => {
setIsOpen(!isOpen);
};
const closeDropdown = () => {
setIsOpen(false);
};
return (
<Fragment>
   <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
      <div>
         <div className="inline-flex h-16 w-16 items-center justify-center">
            <span className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            <img src="/images/Loogo.png" alt="Logo" />
            </span>
         </div>
         <div className="border-t border-gray-100">
            <div className="px-2">
               <div className="py-4">
                  <Link to="/" className="border-t group relative flex justify-center rounded bg-yellow-50 px-2 py-1.5 text-yellow-700">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5 opacity-75"
                     fill="#000000"
                     version="1.1"
                     viewBox="0 0 495.398 495.398"
                     xmlSpace="preserve"
                     >
                     <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391     v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158     c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747     c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z" />
                     <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401     c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79     c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z" />
                  </svg>
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-yellow-200 px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                  Home
                  </span>
                  </Link>
               </div>
               <ul className="space-y-1 border-t border-gray-100 pt-4">
                  {user.name ? (
                  <section>
                     <li>
                        {user && user.role === 'farmer' && (
                        <Link to="/farmerInfo" className="border-t group relative flex justify-center rounded bg-yellow-50 px-2 py-1.5 text-yellow-700">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5 opacity-75"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth="2"
                           >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                        </svg>
                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                        Profile
                        </span>
                        </Link>
                        )}
                     </li>
                     <li>
                        {user && user.role === 'farmer' && (
                        <Link to="/government" className="mt-1.5 border-t group relative flex justify-center rounded bg-yellow-50 px-2 py-1.5 text-yellow-700">
                        <svg className="h-5 w-5 opacity-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                           strokeWidth="2" >
                           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v13H7a2 2 0 0 0-2 2Zm0 0c0 1.1.9 2 2 2h12M9 3v14m7 0v4" />
                        </svg>
                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                        Government
                        </span>
                        </Link>
                        )}
                     </li>
                     <li>
                        <Link to="/" onClick={logoutHandler} className="mt-1.5 border-t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700">
                        <svg className="h-5 w-5 opacity-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v13H7a2 2 0 0 0-2 2Zm0 0c0 1.1.9 2 2 2h12M9 3v14m7 0v4" />
                        </svg>
                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                        Logout
                        </span>
                        </Link>
                     </li>
                  </section>
                  ) : (
                  <section>
                     <div>
                        <Link to="/login" id="login_btn">
                        <a  className="border-t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700">
                           <svg
                              className="h-5 w-5 opacity-75 inline-block mr-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                              >
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v13H7a2 2 0 0 0-2 2Zm0 0c0 1.1.9 2 2 2h12M9 3v14m7 0v4" />
                           </svg>
                           <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-yellow-200 px-2 py-1.5 text-xs font-medium text-white group-hover:visible z-10">
                           Login
                           </span>
                        </a>
                        </Link>
                     </div>
                  </section>
                  )} 
               </ul>
            </div>
         </div>
      </div>
   </div>
</Fragment>
);
};
export default Header;