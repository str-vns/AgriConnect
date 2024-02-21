
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getUser } from "../../Utilitys/helpers";

const Dashboard = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
   setUser(getUser())
   
  }, []); 
  console.log(user._id)
  return (
  
  
<>
  
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
  <title>Admin Panel</title>
  {/*sidenav */}
  <div className="fixed left-0 top-0 w-64 h-full p-4 z-50 sidebar-menu transition-transform" style={{ background:'#F8FFA2'}}
><a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
  <h2 className="font-bold text-2xl">
    <img src="images/logo.png" alt="Description of your image" className="mr-2" />
  </h2>
</a>

    <ul className="mt-4">
      <span className="text-black-400 font-bold">USER</span>
      <li className="mb-1 group">
        <a
          href=""
          className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
        >
          <i className="ri-home-2-line mr-3 text-lg" />
          <span className="text-sm">Home</span>
        </a>
      </li>
      <li className="mb-1 group">
      <Link to ={`/user/${user._id}`}>
        <a
          
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
        <a
          href=""
          className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
        >
          <i className="bx bx-envelope mr-3 text-lg" />
          <span className="text-sm">Messages</span>
        </a>
      </li>
      <li className="mb-1 group">
          <Link
            to="/"
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
          >
            <i className="bx bx-envelope mr-3 text-lg" />
            <span className="text-sm">Logout</span>
          </Link>
        </li>
    </ul>
  </div>
  <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay" />
  {/* end sidenav */}
  <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main" style={{background: '#F8FFA2'}}>
   
  </main>
</>
)};
export default Dashboard;