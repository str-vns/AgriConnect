import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../../Utilitys/helpers";
import axios from "axios";
// import './Header.css';

const Header = ({ cartProducts }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await axios.get(`http://localhost:4000/api/v1/logout`);
      setUser({});
      logout(() => navigate("/"));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const onSuccess = async (res) => {
    toast.success(
      `Logout Success: currentUser: ${JSON.stringify(res.profileObj)}`,
      {
        position: "top-right",
      }
    );
  };

  const logoutHandler = () => {
    logoutUser();
    navigate("/");
    window.location.reload();
    toast.success("Logged out Successfully", {
      position: "top-right",
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
    <Fragment >

      <link rel="preconnect" href="https://fonts.bunny.net" />
      <link
        href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
 <div className={` flex h-screen w-64 flex-col justify-between border-e h-screen overflow-y-scroll`} style={{ background: "#F8FFA2" }}>     

 {/* <div className="flex h-screen w-64 flex-col justify-between fixed-header" style={{ background: "#F8FFA2" }}> */}
  <div>
        <div className="flex items-center justify-center h-20 ">
          <span className="grid h-12 w-48 place-content-center rounded-lg text-xs text-gray-600" style={{ background: "#F8FFA2" }}>
            <h2 className="font-bold text-3xl">
              <img src="/images/logo.png" alt="Description of your image" className="mr-2" />
            </h2>
          </span>
        </div>
          <div className="border-t border-black-100  ">
            <div className="px-2 mt-4">
              {user.name ? (
                <div>
                  {user && user.role === "user" && (
                    <span className="text-black font-bold text-lg">USER</span>
                  )}
                  {user && user.role === "farmer" && (
                    <span className="text-black font-bold text-lg">FARMER</span>
                  )}
                  {user && user.role === "admin" && (
                    <span className="text-black font-bold text-lg">ADMIN</span>
                  )}
                </div>
              ) : (
                <span className="text-black font-bold"></span>
              )}
              <ul className="space-y-1 border-t border-gray-100 pt-4">
                <li className="mb-1 group">
                  <Link
                    to="/"
                    className="flex  font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                  >
                    <i className="ri-home-3-fill mr-3 text-2xl" />
                    <span className=" mr-3 text-lg">Home</span>
                  </Link>
                  
                </li>
                <li className="mb-1 group">
                  <Link
                    to="/info"
                    className="flex  font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                  >
                    <i className="ri-home-3-fill mr-3 text-2xl" />
                    <span className=" mr-3 text-lg">About</span>
                  </Link>
                </li>
                {user.name && user.role === "user" && (
                <li className="mb-1 group">
                  <Link
                    to="/cart"
                    className="flex  font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                  >
                    <i className="ri-home-3-fill mr-3 text-2xl" />
                    <span className=" mr-3 text-lg">Cart</span>
                  </Link>
                  
                </li>
                  )}
                {user.name && (user.role === "user" || user.role === "farmer" || user.role === "admin") && (
                  <section>
                    {user.name && (user.role === "user" || user.role === "farmer") && (
                      <>
                        <li className="mb-1 group">
                          <Link to={`/user/${user._id}`}>
                            <a
                              href=""
                              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
                            >
                              <i className="ri-profile-line mr-3 text-2xl" />
                              <span className="text-lg">Profile</span>
                            </a>
                          </Link>
                        </li>
                  
                         {user.name && user.role === "farmer" && (
                       
                       <li className="mb-1 group">
                     <Link to={`/orders`}>
                         <a
                           href=""
                           className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                         >

                           <i className="ri-file-text-line mr-3 text-2xl" />
                           <span className="text-lg">Transactions</span>
                           <span className="ml-2 text-black" id="cart_count">{cartProducts}</span>
                         </a>
                         </Link>
                       </li>
                       )}
                       {user.name && user.role === "user" && (
                       
                       <li className="mb-1 group">
                     <Link to={`/orderList`}>
                         <a
                           href=""
                           className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                         >

                           <i className="ri-file-text-line mr-3 text-2xl" />
                           <span className="text-lg">Transactions</span>
                           <span className="ml-2 text-black" id="cart_count">{cartProducts}</span>
                         </a>
                         </Link>
                       </li>
                       )}
                        <li className="mb-1 group">
                          <a
                            href=""
                            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                          >
                            <i className="ri-notification-3-line mr-3 text-2xl" />
                            <span className="text-lg">Notifications</span>
                          </a>
                        </li>
                        
                        <li className="mb-1 group">
                          <Link to="/messenger">
                            <a
                              href=""
                              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                            >
                              <i className="ri-chat-3-line mr-3 text-2xl" />
                              <span className="text-lg">Messages</span>
                            </a>
                          </Link>
                        </li>
                      </>
                    )}
                    {user.name && user.role === "farmer" && (
                      <>
                        <li className="mb-1 group">
                          <Link to="/reviewLog" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className="ri-user-star-fill mr-3 text-2xl" />
                            <span className="text-lg">Reviews</span>
                          </Link>
                        </li>
                        <li className="mb-1 group">
                          <Link to="/productList" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className="ri-user-star-fill mr-3 text-2xl" />
                            <span className="text-lg">Products</span>
                          </Link>
                        </li>
                        <li className="mb-1 group">
                          <Link to="/government" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className="ri-government-line mr-3 text-2xl" />
                            <span className="text-lg">Government</span>
                          </Link>
                        </li>
                        <li className="mb-1 group">
                          <Link to="/" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className="ri-government-line mr-3 text-2xl" />
                            <span className="text-lg">Dashboard</span>
                          </Link>
                        </li>
                        <li className="mb-1 group">
                          <Link to="/orders" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className="ri-government-line mr-3 text-2xl" />
                            <span className="text-lg">Orders</span>
                          </Link>
                        </li>
                      </>
                    )}
                    {user.name && user.role === "admin" && (
                      <>
                        <li className="mb-1 group">
                          <Link to="/AdminDashboard" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className=" bx bxs-dashboard mr-3 text-2xl" />
                            <span className="text-lg">Dashboard</span>
                          </Link>
                        </li>
                        <li className="mb-1 group">
                          <Link to="/AdminProfile" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                            <i className="ri-profile-line mr-3 text-2xl" />
                            <span className="text-lg">Profile</span>
                          </Link>
                        </li>
                        <li className="mb-1 group">
                          <Link to="/farmerlist" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className="bx bxs-user-badge mr-3 text-2xl" />
                            <span className="text-lg">Farmer</span>
                          </Link>
                        </li>
                        <li className="mb-1 group">
                          <Link to="/AccountList" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className="ri-folder-user-line mr-3 text-2xl" />
                            <span className="text-lg">User</span>
                          </Link>
                        </li>
                        <li className="mb-1 group">
                          <Link to="/banklist" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className="ri-bank-line mr-3 text-2xl" />
                            <span className="text-lg">Bank</span>
                          </Link>
                        </li>
                        <li className="mb-1 group">
                          <Link to="/Analytics" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className="ri-bar-chart-grouped-line mr-3 text-2xl" />
                            <span className="text-lg">Analytics</span>
                          </Link>
                        </li>
                      </>
                    )}
                    <section>
                      <li className="mb-1 group">
                        <Link
                          to="/"
                          onClick={logoutHandler}
                          className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                        >
                          <i className="ri-logout-box-line mr-3 text-2xl" />
                          <span className="text-lg">Logout</span>
                        </Link>
                      </li>
                    </section>
                  </section>
                )}


                {!user.name && (
                  <section>
                    <li className="mb-1 group">
                      <Link to="/login" id="login_btn">
                        <a className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                          <i className="ri-login-box-line mr-3 text-2xl" />
                          <span className="text-lg">Login</span>
                        </a>
                      </Link>
                    </li>
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