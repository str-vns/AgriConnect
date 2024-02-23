import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getUser } from "../../Utilitys/helpers";

const FarmerList = () => {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [user, setUser] = useState({});
  
  useEffect(() => {
    setUser(getUser());
    fetchFarmers();
  }, []); 
  
  const fetchFarmers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/farmer/allfarmer');
      setFarmers(response.data.farmers); // Update to access farmers array from response
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching farmers:', error);
    }
  };

  console.log(user._id);

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
          <span className="text-black-400 font-bold">ADMIN</span>
          <li className="mb-1 group">
            <a
              href=""
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <i className="ri-home-2-line mr-3 text-lg" />
              <span className="text-sm">Dashboard</span>
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
              href="/farmerlist"
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <i className="bx bx-archive mr-3 text-lg" />
              <span className="text-sm">Farmer</span>
            </a>
          </li>
          <li className="mb-1 group">
            <a
              href="/userlist"
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <i className="bx bx-bell mr-3 text-lg" />
              <span className="text-sm">User</span>
            </a>
          </li>
          <li className="mb-1 group">
            <a
              href=""
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <i className="bx bx-envelope mr-3 text-lg" />
              <span className="text-sm">Analytics</span>
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
      {/* end sidenav */}
      <main className="ml-64 pt-16 pb-8 px-8 bg-gray-200 min-h-screen transition-all main" style={{background: '#F8FFA2'}}>
        <div className="py-5 px-6 overflow-x-auto sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg dark:shadow-md">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider dark:text-gray-300">Farm Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider dark:text-gray-300">Address</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider dark:text-gray-300">City</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider dark:text-gray-300">Postal Code</th>
                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {farmers.map((farmer, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{farmer.farmName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{farmer.address}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{farmer.city}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{farmer.postalCode}</div>
                    </td>
                    {/* Add more columns as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FarmerList;