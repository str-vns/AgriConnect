import React, { useState, useEffect } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { getToken } from "../../../Utilitys/helpers";
import axios from "axios";
import Loader from '../../Layout/Loader';

const barColors = ["#0d6efd", "#6610f2", "#6f42c1", "#d63384", "#dc3545", "#fd7e14", "#ffc107", "#28a745", "#20c997", "#17a2b8", "#fff", "#6c757d", "#343a40", "#007bff", "#6c757d", "#28a745", "#17a2b8", "#ffc107", "#dc3545", "#f8f9fa", "#343a40"];
function MostRatedFarmer() {
    const [loading, setLoading] = useState(true);
    const [rated, setRated] = useState('');

    const getSpecificProducts = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }
        try {
            const { data } = await axios.get(`http://localhost:4000/api/v1/farmer/ratingFarmer`, config);
            console.log(data.topRatedFarmers);
            setRated(data.topRatedFarmers);
            setLoading(false);
        } catch (error) {
           console.log(error);
        }
    }
    
    useEffect(() => {
        getSpecificProducts();
    }, []);



  return (
    <>
  <p className='text-center ml-20'>Highest Rated Farms</p>
    <ResponsiveContainer width="100%" height="100%">
        {loading ? <Loader /> : (
            <BarChart data={rated}>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="farmName" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="ratings">
                    {
                rated.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
                ))
            }
                </Bar>
            </BarChart>
        )}
    </ResponsiveContainer>
    </>
  )
}

export default MostRatedFarmer