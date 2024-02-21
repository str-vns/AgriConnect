import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../../Utilitys/helpers";
import axios from "axios";
const Header = () => {
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
    <Fragment>
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
      <div
        className="flex h-screen w-64 flex-col justify-between border-e "
        style={{ background: "#F8FFA2" }}
      >
        <div>
          <div className="inline-flex h-16 w-64 items-center justify-center  border-b-2 border-b-gray-800">
            <span
              className="grid h-10 w-40 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
              style={{ background: "#F8FFA2" }}
            >
              <h2 className="font-bold text-2xl">
                <img
                  src="/images/logo.png"
                  alt="Description of your image"
                  className="mr-2"
                />
              </h2>
            </span>
          </div>
          <div className="border-t border-gray-100">
            <div className="px-2 mt-4">
            {user.name ? (
  <div>
    {user && user.role === "user" && (
      <span className="text-black font-bold">USER</span>
    )}
    {user && user.role === "farmer" && (
      <span className="text-black font-bold">FARMER</span>
    )}
    {user && user.role === "admin" && (
      <span className="text-black font-bold">ADMIN</span>
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
                
                  <i className="ri-home-2-line mr-3 text-lg" />
                  <span className=" mr-3 text-sm">Home</span>
                </Link>
              </li>
              {user.name ? (
                 <section>
                <li className="mb-1 group">
                <Link to ={`/user/${user._id}`}>
                  <a
                    href=""
                    className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
                  >
                   
                   <i className="bx bx-user mr-3 text-lg" />
                   <span className="text-sm">Profile</span>
                  </a>
                  </Link>
                </li>

                <li className="mb-1 group">
        <a
          href=""
          className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
        >
          <i className="bx bx-archive mr-3 text-lg" />
          <span className="text-sm">Transactions</span>
        </a>
      </li>
      <li className="mb-1 group">
        <a
          href=""
          className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
        >
          <i className="bx bx-bell mr-3 text-lg" />
          <span className="text-sm">Notifications</span>
        </a>
      </li>
                <li className="mb-1 group">
                  <Link to="/messenger">
                    <a
                      href=""
                      className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                    >
                      <i className="bx bx-envelope mr-3 text-lg" />
                      <span className="text-sm">Messages</span>
                    </a>
                  </Link>
                </li>
                
             
        
                
                 
                    <li className="mb-1 group">
                      {user && user.role === "farmer" && (
                        <Link
                          to="/government"
                          className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                        >
                         
                         <i className="bx bx-envelope mr-3 text-lg" />
                          <span className="text-sm">Goverment</span>
                        </Link>
                      )}
                    </li>
                    <li className="mb-1 group">
                      <Link
                        to="/"
                        onClick={logoutHandler}
                        className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
                      >
                     
                     <i className="bx bx-envelope mr-3 text-lg" />
                     <span className="text-sm">Logout</span>
                      </Link>
                    </li>
                  </section>
                ) : (
                  <section>
                    <li className="mb-1 group">
                      <Link to="/login" id="login_btn">
                        <a className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                          
                        <i className="bx bx-envelope mr-3 text-lg" />
                     <span className="text-sm">Login</span>
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
