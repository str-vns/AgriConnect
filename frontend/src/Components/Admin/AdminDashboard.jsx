import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from "../../Utilitys/helpers";
import MetaData from "../Layout/MetaData";
import Header from '../Layout/Header';
import axios from 'axios';
// import Chart from "chart.js/auto";


const AdminDashboard = () => {
  const user = getUser();
  const chartRef = useRef(null);
  const [userData, setUserData] = useState({ users: [] });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/admin/users');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const farmerCount = userData.users.filter(user => user.role === 'farmer').length;
  const userCount = userData.users.filter(user => user.role === 'user').length;
  const adminCount = userData.users.filter(user => user.role === 'admin').length;

  return (
    <Fragment>
      <MetaData title={"ADMIN DASHBOARD"} />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <link rel="preconnect" href="https://fonts.bunny.net" />
      <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.bunny.net"/>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"/>
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="flex">
          <Header />
          <main className="w-full bg-gray-200 min-h-screen transition-all main" style={{ background: '#F8FFA2' }}>
            {/* Content */}
            <div className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                <div className="bg-white rounded-md border border-gray-100 p-8 shadow-md shadow-black/5">
                  <div className="flex justify-between mb-8">
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="text-3xl font-semibold">{farmerCount}</div>
                      </div>
                      <div className="text-lg font-medium text-gray-500">Farmers</div>
                    </div> 
                  </div>
                  <Link to="/farmerlist" className="text-[#f84525] font-medium text-lg hover:text-red-800">View Farmers</Link>
                </div>

                <div className="bg-white rounded-md border border-gray-100 p-8 shadow-md shadow-black/5">
                  <div className="flex justify-between mb-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="text-3xl font-semibold">{userCount}</div>
                      </div>
                      <div className="text-lg font-medium text-gray-500">Users</div>
                    </div> 
                  </div>
                  <a href="/AccountList" className="text-[#f84525] font-medium text-lg hover:text-red-800">View Users</a>
                </div>

                <div className="bg-white rounded-md border border-gray-100 p-8 shadow-md shadow-black/5">
                  <div className="flex justify-between mb-8">
                    <div>
                      <div className="text-3xl font-semibold mb-2">100</div>
                      <div className="text-lg font-medium text-gray-500">Blogs</div>
                    </div>
                    <div className="dropdown">
                      <button type="button" className="dropdown-toggle text-gray-400 hover:text-gray-600"><i className="ri-more-fill" /></button>
                      <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-2 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                        <li>
                          <a href="#" className="flex items-center text-lg py-2 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center text-lg py-2 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center text-lg py-2 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                        </li>
                      </ul>
                    </div> 
                  </div>
                  <a href className="text-[#f84525] font-medium text-lg hover:text-red-800">View Blogs</a>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <div className="p-10 relative flex flex-col min-w-0 mb-8 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                  <div className="rounded-t mb-0 px-0 border-0">
                    <div className="flex flex-wrap items-center px-6 py-4">
                      <div className="relative w-full max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-50">Users</h3>
                      </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                      <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                          <tr>
                            <th className="px-6 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-4 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Role</th>
                            <th className="px-6 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-4 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-gray-700 dark:text-gray-100">
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">Administrator</th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">{adminCount}</td>
                          </tr>
                          <tr className="text-gray-700 dark:text-gray-100">
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">Farmer</th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">{farmerCount}</td>
                          </tr>
                          <tr className="text-gray-700 dark:text-gray-100">
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">User</th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">{userCount}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Content */}
          </main>

      </div>
    </Fragment>
  );
};

export default AdminDashboard;