import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../Layout/MetaData'
import Loader from '../Layout/Loader'

import axios from 'axios';
import { toast } from 'react-toastify';
import { getToken } from '../../Utilitys/helpers';
import Header from '../Layout/Header'

const Accountslist = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [allUsers, setAllUsers] = useState([])
    const [isDeleted, setIsDeleted] = useState('')
    let navigate = useNavigate();
    const config = {
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${getToken()}`
        }
    }
    const listUsers = async () => {
        try {
            const { data } = await axios.get(`http://localhost:4000/api/v1/admin/users`, config);
            
            // Filter users and admins
            const filteredUsers = data.users.filter(user => user.role === 'user' || user.role === 'admin');
            
            setAllUsers(filteredUsers);
            setLoading(false);
        } catch (error) {
            setError(error.response.data.message);
            console.log(error.response.data.message);
        }
    };
    
    const deleteUser = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:4000/api/v1/admin/user/${id}`, config)
            setIsDeleted(data.success)
            setLoading(false)
            window.location.reload();
        } catch (error) {
           setError(error.response.data.message)
           setError()
            
        }
    }

    useEffect(() => {
        listUsers();
        if (error) {
           console.log(error);
            setError('')
        }
        if (isDeleted) {

            toast.success("User deleted successfully", {
                position:"top-right",
              }); 
              
            navigate('/AccountList');
            window.location.reload();
        }

    }, [error, isDeleted,])


    const deleteUserHandler = (id) => {
       deleteUser(id)
    }
    
    const showDeleteConfirmation = (userId) => {
        const isConfirmed = window.confirm("Are you sure you want to delete?");
        
        if (isConfirmed) {
            deleteUserHandler(userId);
        }
    };
    
    const accountlist = () => {
        const data = {
            columns: [
                {
                   label: 'User ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'
                },
                {
                    label: 'Role',
                    field: 'role',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }
        allUsers.forEach(user => {
            data.rows.push({
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                actions: 
                <Fragment>
    <Link to={`/AccountUpdate/${user._id}`} className="btn bg-blue-500 py-1 px-2 hover:bg-blue-700 ">
        Edit
    </Link>
    <button
        className="bg-red-500 btn py-1 px-2 ml-2 hover:bg-red-700"
        onClick={() => showDeleteConfirmation(user._id)}
    >
        Delete
    </button>
</Fragment>

            
            })
        })
        return data;
    }

    return (
        <Fragment>
            <MetaData title={"All Farmers"} />
            <div className="flex justify-center bg-white items-center h-screen">
            <div className="bg-white">
                    <Header />
                </div>
                <div className="lg:grid flex flex-grow overflow-y-scroll justify-center items-center lg:min-h-screen">
            <div className="flex flex-col items-center bg-white">
                <h1 className="my-14 font-bold text-lg text-black mr-32">
                All Accounts
                </h1>
            
                <div className="flex w-full justify-center container pb-10 mr-40">
                <Fragment>
                    {loading ? (
                    <Loader />
                    ) : (
                    <MDBDataTable
                        data={accountlist()}
                        className="table border-2  border-black shadow-lg py-10 text-black"
                        bordered
                        striped
                        hover
                        entriesOptions={[10, 20, 30]}
                        entries={10}
                        noBottomColumns
                    />
                    )}
                </Fragment>
                </div>
            </div>
            </div>
            </div>
        </Fragment>
    );
}

export default Accountslist