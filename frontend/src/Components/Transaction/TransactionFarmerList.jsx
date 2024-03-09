import React, { useEffect, useState, Fragment } from 'react'
import Header from '../Layout/Header'
import { getToken } from '../../Utilitys/helpers';
import axios from 'axios';
import MetaData from '../Layout/MetaData';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Layout/Loader';
import { MDBDataTable } from 'mdbreact';

const TransactionList = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([])
  let navigate = useNavigate()
  const getFarmerProducts = async () => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    };

    const response = await axios.get(
      `http://localhost:4000/api/v1/allTransactions`, 
      config
    );

    console.log("Response Data:", response.data);
    if (response.data.success) {
      setOrders(response.data.orders);
      setLoading(false);
    } else {
      setError(response.data.message || 'An error occurred while fetching data');
    }
  } catch (error) {
    console.error("Error:", error); 
    setError(error.response?.data?.message || 'An error occurred while fetching data');
  }
};

const confirmOrderHandler = async (id,userData) => {  
  try {
      const config = {
          headers: {
              'Content-Type': 'application/json', 
              'Authorization': `Bearer ${getToken()}`
          }
      }
    const response = await axios.put(`http://localhost:4000/api/v1/order/confirm/${id}`,userData, config);
    console.log(response); 
    navigate('/orders')
    window.location.reload();
    toast.success('Confirmation successfully',
    {
        position: "top-right"
    });
  } catch (error) {
    console.error(error); 
  }
};


  useEffect(() => {
    getFarmerProducts();

   }, []);

   const ordersList = () => {
    const data = {
        columns: [
            {
                label: 'Order ID',
                field: 'id',
                sort: 'asc'
            },
            {
                label: 'No of Items',
                field: 'numofItems',
                sort: 'asc'
            },
            {
                label: 'Status',
                field: 'status',
                sort: 'asc'
            },
            {
                label: 'Actions',
                field: 'actions',
            },
        ],
        rows: []
    };

    if (!Array.isArray(orders)) {
        console.error('Orders is not an array:', orders);
        return data;
    }

    orders.forEach(order => {
        let orderConfirmation = 'Not Confirmed';
        if (order.orders && order.orders.length > 0) {
            // Check the confirmation status of the first item in orderItems
            orderConfirmation = order.orders[0].orderConfirmation;
        }

        data.rows.push({
            id: order._id,
            numofItems: order.orders ? order.orders.length : 0,
            status: orderConfirmation === 'Confirmed'
                ? <p style={{ color: 'green' }}>Confirmed</p>
                : <p style={{ color: 'blue' }}>Not Confirmed</p>,
            actions: (
                <Fragment>
                    {orderConfirmation === 'Confirmed' && (
                        <Fragment>
                            <Link
                                to={`/OrderProcess/${order._id}`}
                                className="btn btn-primary py-1 px-2 ml-2"
                            >
                                <i className="fa fa-eye"></i>
                            </Link>
                            {/* <button
                                className="btn btn-danger py-1 px-2 ml-2"
                                onClick={() => deleteOrderHandler(order._id)}
                            >
                                <i className="fa fa-trash"></i>
                            </button> */}
                        </Fragment>
                    )}
                    {orderConfirmation === 'NotConfirm' && (
                        <Fragment>
                            <button
                                className="btn btn-success py-1 px-2 ml-2"
                                onClick={() => confirmOrderHandler(order._id)}
                            >
                                <i className="fa fa-check"></i>
                            </button>
                            
                            {/* <button
                                className="btn btn-danger py-1 px-2 ml-2"
                                onClick={() => deleteOrderHandler(order._id)}
                            >
                                <i className="fa fa-trash"></i>
                            </button> */}
                        </Fragment>
                    )}
                </Fragment>
            )
        });
    });

    return data;
};

  return (
    <Fragment>
    <MetaData title={"Orders"} />
    <div className="flex justify-center bg-white items-center h-screen">
        <div className="bg-white w-full bg-white md:w-1/6">
                <Header />
            </div>
            <div className="lg:grid flex flex-grow overflow-y-scroll justify-center items-center lg:min-h-screen">
          <div className="flex flex-col items-center bg-white ">
            <h1 className="my-14 font-bold text-lg text-black ">
              Orders
            </h1>
       
            <div className="w-[1080px] overflow-x-auto">
            <Fragment>
              {loading ? (
                <Loader />
              ) : (
                <MDBDataTable
                  data={ordersList()}
                  className="table border-2  border-black  shadow-lg p-10 text-black"
                  bordered
                  striped
                  hover
                  entriesOptions={[10, 20, 30]}
                  entries={3}
                  noBottomColumns
                />
              )}
            </Fragment>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  )
}

export default TransactionList