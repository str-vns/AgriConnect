import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getUser } from '../../Utilitys/helpers'; // Import getUser function

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = getUser(); // Get the logged-in user data

  useEffect(() => {
    fetchUsers();
  }, []); 
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/alluser');
      // Filter out users with role 'admin' or 'farmer'
      const filteredUsers = response.data.user.filter(user => user.role !== 'admin' && user.role !== 'farmer');
      setUsers(filteredUsers);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <>
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
              {loading ? (
                <p>Loading...</p>
              ) : (
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider dark:text-gray-300">Avatar</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider dark:text-gray-300">Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider dark:text-gray-300">Email</th>
                      {/* Add more columns if needed */}
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img src={user.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">{user.email}</div>
                        </td>
                        {/* Add more columns if needed */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UserList;