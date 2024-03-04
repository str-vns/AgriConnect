import React, { useEffect, useState, Fragment } from 'react'
import Header from '../Layout/Header'
import { getToken } from '../../Utilitys/helpers';
import axios from 'axios';
import MetaData from '../Layout/MetaData';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Layout/Loader';
import { MDBDataTable } from 'mdbreact';

const TransactionUserList = () => {
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
        `http://localhost:4000/api/v1/orders/my`, 
        config
      );
  
      console.log("Response Data:", response.data);
      if (response.data.success) {
        setOrders(response.data.orders);
        console.log(response.data.orders.length)
        setLoading(false);
      } else {
        setError(response.data.message || 'An error occurred while fetching data');
      }
    } catch (error) {
      console.error("Error:", error); 
      setError(error.response?.data?.message || 'An error occurred while fetching data');
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
        let allConfirmed = true; 


    order.orderItems.forEach(item => {
        if (item.orderConfirmation !== 'Confirmed') {
            allConfirmed = false; 
        }
    });

    let orderConfirmation = allConfirmed ? 'Confirmed' : 'Not Confirmed';
  
          data.rows.push({
              id: order._id,
              numofItems: order.orderItems ? order.orderItems.length : 0,
              status: orderConfirmation === 'Confirmed'
                  ? <p style={{ color: 'green' }}>Confirmed</p>
                  : <p style={{ color: 'blue' }}>Not Confirmed</p>,
              actions: (
                  <Fragment>
                
                          <Fragment>
                              <Link
                                  to={`/SingleOrder/${order._id}`}
                                  className="btn btn-primary py-1 px-2 ml-2"
                              >
                                  <i className="fa fa-eye"></i>
                              </Link>
                          </Fragment>
                    
                   
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
    )
}

export default TransactionUserList